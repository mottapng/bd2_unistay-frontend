import React from 'react'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'
import { Input } from '@/components/Input'

export const Register = ({ setModal }) => {
  return (
    <div className={styles.registerContainer}>
      <GrFormClose className={styles.closeIcon} onClick={() => setModal(null)} />
      <h1>Cadastro de Usuário</h1>
      <form action="">
        <div className={styles.formContainer}>
          <div className={styles.formWrap}>
            <Input label="Nome" type="text" placeholder="Digite Nome Completo" required />
            <Input label="E-mail" type="email" placeholder="email@dominio.com" required />
            <Input label="Número do telefone" type="text" placeholder="(12) 34567-8910" required />
            <Input label="Data de nascimento" type="text" placeholder="00/00/0000" required />
            <Input label="Estado" maxLength="2" type="text" placeholder="UF" required />
            <Input label="Cidade" type="text" placeholder="Cidade do Usuário" required />
            <Input label="Senha" type="password" placeholder="Digite Sua Senha" required />
            <Input label="Confirmar Senha" type="password" placeholder="Repita sua Senha" required />
          </div>
          <div className={styles.fileInput}>
            <Input type="file" styles={{ marginTop: "20px" }} label="Foto de Perfil"
              multiple={false} required />
          </div>
        </div>

        <p className={styles.agree}>
          Ao selecionar Concordar e Continuar, eu concordo com os <u>Termos de Serviço</u>, os <u> Termos de  Serviço de <br /> Pagamentos</u>, a <u>Política de Não Discriminação</u> e reconheço a Política de Privacidade.
        </p>

        <div className={styles.submitContainer}>
          <button>Concordar e Continuar</button>
        </div>
      </form>
    </div>
  )
}
