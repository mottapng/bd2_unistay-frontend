import React, { useState } from 'react'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'
import { Input } from '@/components/Input'
import { useAuthContext } from '@/context/AuthProvider'

export const Login = ({ setModal }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        }),
      });

      if (res.status === 400) {
        setError('email');
      } else if (res.status === 401) {
        setError('senha');
      } else {
        const data = await res.json()

        const user = data?.user.user_id;
        const name = data?.user.name;
        const token = data?.token;

        res.status === 201 && setAuth({ user, name, email, token });
        setModal(null)
      }
    } catch (err) {
      setError(err);
      console.log(err);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <GrFormClose className={styles.closeIcon} onClick={() => setModal(null)} />
      <h1>Bem-vindo ao <br /> UniStay</h1>
      <form onSubmit={handleSubmit} onChange={() => setError("")}>
        <Input
          label="E-mail"
          type="email"
          placeholder="Digite Seu E-mail"
          required
          width={326}
          style={error === "email" ? { border: "1px solid #ff3632", color: "#ff3632" } : {}}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite Sua Senha"
          required
          width={326}
          style={error === "senha" || error === "email" ? { border: "1px solid #ff3632", color: "#ff3632" } : {}}
        />

        <button disabled={loading} style={{ transition: loading && "9999999s" }}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
      <button onClick={() => setModal('register')}>Cadastrar-se</button>
    </div>
  )
}
