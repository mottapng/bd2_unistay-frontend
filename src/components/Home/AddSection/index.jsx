import React from 'react'
import styles from './styles.module.scss'
import { Input } from '@/components/Input'

export const AddSection = () => {
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
            <Input label="Tipo de Quarto" type="text" placeholder="Selecione o Tipo de Quarto" required />
            <Input label="Preço" type="text" placeholder="Insira o Preço" required />
            <Input label="Tipo de imóvel" type="text" placeholder="Selecione Tipo de Imóvel" required />
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
