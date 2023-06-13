import React from 'react'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'
import { Input } from '@/components/Input'

export const Login = ({ setModal }) => {
  return (
    <div className={styles.loginContainer}>
      <GrFormClose className={styles.closeIcon} onClick={() => setModal(null)} />
      <h1>Bem-vindo ao <br /> UniStay</h1>
      <form action="">
        <Input label="E-mail" type="email" placeholder="Digite Seu E-mail" required width={326} />
        <Input label="Senha" type="password" placeholder="Digite Sua Senha" required width={326} />

        <button>Entrar</button>
      </form>
      <button onClick={() => setModal('register')}>Cadastrar-se</button>
    </div>
  )
}
