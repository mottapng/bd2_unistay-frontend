'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Input } from '@/components/Input'
import { SelectOne } from '@/components/SelectOne'
import { useAuthContext } from '@/context/AuthProvider'
import { Modal } from '@/components/Modal'
import { useRouter } from 'next/navigation'

export const AddSection = () => {
  const { auth } = useAuthContext();
  const [modal, setModal] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const optionsRoom = [
    { label: 'Privado', value: 'Privado' },
    { label: 'Compartilhado', value: 'Compartilhado' }
  ];

  const optionsLocation = [
    { label: 'República', value: 'República' },
    { label: 'Apartamento', value: 'Apartamento' },
    { label: 'Quarto', value: "Quarto" },
    { label: 'Casa', value: "Casa" },
    { label: 'Kitnet', value: 'Kitnet' }
  ];

  const [type, setType] = useState(optionsLocation[0]);
  const [room, setRoom] = useState(optionsRoom[0]);
  const [files, setFiles] = useState([]);
  const [resetForm, setResetForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const type_id = type.value === "República" ? 1 :
      type.value === "Apartamento" ? 2 :
        type.value === "Quarto" ? 3 :
          type.value === "Casa" ? 4 :
            type.value === "Kitnet" ? 5 :
              undefined

    const name = e.target[0].value;
    const street = e.target[1].value;
    const number = Number(e.target[2].value);
    const uf = e.target[3].value;
    const city = e.target[4].value;
    const qnt_bedrooms = Number(e.target[6].value);
    const qnt_bathrooms = Number(e.target[9].value);
    const qnt_garage = Number(e.target[12].value);
    const price = Number(e.target[14].value.replace(/\D/g, '') / 100);
    const private_room = room.value === "Privado" ? true : false;
    const description = e.target[15].value;
    const images = files;

    try {
      setLoading(true)
      const createPostResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`
        },
        body: JSON.stringify({
          name,
          street,
          number,
          uf,
          city,
          type_id,
          qnt_bedrooms,
          qnt_bathrooms,
          qnt_garage,
          price,
          private_room,
          description,
        }),
      });

      const listing = await createPostResponse.json();
      const listing_id = listing.listing.listing_id

      const imagesFormData = new FormData();
      for (const file of images) {
        imagesFormData.append("photos", file);
      }

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${listing_id}/photos`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${auth.token}`
        },
        body: imagesFormData,
      });

      setLoading(false);
      router.refresh();
      setResetForm(true);
      setFiles([]);
      setType('República');
      setRoom('Privado');
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleButton = (e) => {
    if (!auth.user) {
      e.preventDefault();
      setModal('login');
    }
  }

  useEffect(() => {
    if (resetForm) {
      setResetForm(false);
    }
  }, [resetForm]);

  return (
    <section className={styles.addContainer}>
      <h2>Use nossa plataforma E tenha garantia de seu aluguel </h2>
      <div className={styles.formContainer}>
        <h2>Adicione uma nova propriedade</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputArea}>
            <Input label="Nome" type="text" placeholder="Digite o Nome da Propriedade" reset={resetForm} required />
            <Input label="Endereço" type="text" placeholder="Digite Endereço" required reset={resetForm} />
            <Input label="Número" type="number" placeholder="Digite o Número do Ederenço" reset={resetForm} required />
            <Input label="UF" type="text" placeholder="Selecione o Estado" maxLength={2} reset={resetForm} required />
            <Input label="Cidade" type="text" placeholder="Selecione a Cidade" reset={resetForm} required />
            <SelectOne label="Tipo de Imóvel" value={type} setValue={setType} options={optionsLocation} required />
            <Input label="Quantidade de Quartos" type="count" placeholder="Digite a Quantidade de Quartos" reset={resetForm} required />
            <Input label="Quantidade de Banheiros" type="count" placeholder="Digite a Quantidade de Banheiros" reset={resetForm} required />
            <Input label="Vagas na Garagem" type="count" placeholder="Digite a Quantidade de Vagas na Garagem" reset={resetForm} required />
            <Input label="Preço" type="text" placeholder="Insira o Preço" regex="money" reset={resetForm} required />
            <SelectOne label="Tipo de Quarto" value={room} setValue={setRoom} options={optionsRoom} required />
          </div>
          <Input styles={{ marginTop: "20px" }} label="Descrição" type="textarea" reset={resetForm} required />
          <Input styles={{ marginTop: "20px" }} label="Carregar Fotos (Limite de 6 imagens)" type="file" reset={resetForm} required multiple files={files} setFiles={setFiles} />
          <div className={styles.submitContainer}>
            <button className={styles.submitButton} onClick={handleButton} disabled={loading} style={{ transition: loading && "9999999s" }}>
              {!loading ? 'Adicionar Nova Propriedade' : 'Validando...'}
            </button>
          </div>
        </form>
      </div>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </section>
  )
}
