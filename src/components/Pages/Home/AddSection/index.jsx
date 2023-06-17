'use client'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Input } from '@/components/Input'
import { SelectOne } from '@/components/SelectOne'
import { useAuthContext } from '@/context/AuthProvider'
import { Modal } from '@/components/Modal'

export const AddSection = () => {
  const { auth } = useAuthContext();
  const [modal, setModal] = useState();

  const optionsRoom = [
    'Privado',
    'Compartilhado'
  ];

  const optionsLocation = [
    'República',
    'Apartamento',
    'Quarto',
    'Casa',
    'Kitnet'
  ];

  const [type, setType] = useState(optionsLocation[0]);
  const [room, setRoom] = useState(optionsRoom[0]);
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const type_id = type === "República" ? 1 :
      type === "Apartamento" ? 2 :
        type === "Quarto" ? 3 :
          type === "Casa" ? 4 :
            type === "Kitnet" ? 5 :
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
    const private_room = room === "Privado" ? true : false;
    const description = e.target[15].value;
    const images = files;

    try {
      const createPostResponse = await fetch("http://localhost:5000/listings", {
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

      await fetch(`http://localhost:5000/listings/${listing_id}/photos`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${auth.token}`
        },
        body: imagesFormData,
      });

      /* e.target.reset(); */
    } catch (err) {
      console.log(err);
    }
  };

  const handleButton = (e) => {
    if (!auth.user) {
      e.preventDefault();
      setModal('login');
    }
  }

  return (
    <section className={styles.addContainer}>
      <h2>Use nossa plataforma E tenha garantia de seu aluguel </h2>
      <div className={styles.formContainer}>
        <h2>Adicione uma nova propriedade</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputArea}>
            <Input label="Nome" type="text" placeholder="Digite o Nome da Propriedade" required />
            <Input label="Endereço" type="text" placeholder="Digite Endereço" required />
            <Input label="Número" type="number" placeholder="Digite o Número do Ederenço " required />
            <Input label="UF" type="text" placeholder="Selecione o Estado" maxLength={2} required />
            <Input label="Cidade" type="text" placeholder="Selecione a Cidade" required />
            <SelectOne label="Tipo de Imóvel" value={type} setValue={setType} options={optionsLocation} required />
            <Input label="Quantidade de Quartos" type="count" placeholder="Digite a Quantidade de Quartos" required />
            <Input label="Quantidade de Banheiros" type="count" placeholder="Digite a Quantidade de Banheiros" required />
            <Input label="Vagas na Garagem" type="count" placeholder="Digite a Quantidade de Vagas na Garagem" required />
            <Input label="Preço" type="text" placeholder="Insira o Preço" regex="money" required />
            <SelectOne label="Tipo de Quarto" value={room} setValue={setRoom} options={optionsRoom} required />
          </div>
          <Input styles={{ marginTop: "20px" }} label="Descrição" type="textarea" required />
          <Input styles={{ marginTop: "20px" }} label="Carregar Fotos (Limite de 6 imagens)" type="file" required multiple files={files} setFiles={setFiles} />
          <div className={styles.submitContainer}>
            <button className={styles.submitButton} onClick={handleButton}>Adicionar Nova Propriedade</button>
          </div>
        </form>
      </div>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </section>
  )
}
