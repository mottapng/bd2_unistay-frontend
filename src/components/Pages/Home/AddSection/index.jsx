import React from 'react'
import styles from './styles.module.scss'
import { Input } from '@/components/Input'
import { SelectOne } from '@/components/SelectOne'

export const AddSection = () => {
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

  return (
    <section className={styles.addContainer}>
      <h2>Use nossa plataforma E tenha garantia de seu aluguel </h2>
      <div className={styles.formContainer}>
        <h2>Adicione uma nova propriedade</h2>
        <form className={styles.form}>
          <div className={styles.inputArea}>
            <Input label="Nome" type="text" placeholder="Digite o Nome da Propriedade" required />
            <Input label="Endereço" type="text" placeholder="Digite Endereço" required />
            <Input label="Número" type="text" placeholder="Digite o Número do Ederenço " required />
            <Input label="Estado" type="text" placeholder="Selecione o Estado" required />
            <Input label="Cidade" type="text" placeholder="Selecione a Cidade" required />
            <SelectOne label="Tipo de Imóvel" options={optionsLocation} required />
            <Input label="Quantidade de Quartos" type="count" placeholder="Digite a Quantidade de Quartos" required />
            <Input label="Quantidade de Banheiros" type="count" placeholder="Digite a Quantidade de Banheiros" required />
            <Input label="Vagas na Garagem" type="count" placeholder="Digite a Quantidade de Vagas na Garagem" required />
            <Input label="Preço" type="text" placeholder="Insira o Preço" regex="money" required />
            <SelectOne label="Tipo de Quarto" options={optionsRoom} required />
          </div>
          <Input styles={{ marginTop: "20px" }} label="Descrição" type="textarea" required />
          <Input styles={{ marginTop: "20px" }} label="Carregar Fotos (Limite de 6 imagens)" type="file" required multiple />
          <div className={styles.submitContainer}>
            <button className={styles.submitButton}>Adicionar Nova Propriedade</button>
          </div>
        </form>
      </div>
    </section>
  )
}
