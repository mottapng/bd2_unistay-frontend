import React, { useState } from 'react'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'
import { Input } from '@/components/Input'

export const Register = ({ setModal }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const cellphone = e.target[2].value;
    const birth_date = e.target[3].value.split('/').reverse().join('-');
    const uf = e.target[4].value;
    const country = e.target[5].value;
    if (e.target[6].value !== e.target[7].value)
      return setError("As senhas devem ser iguais!")
    const password = e.target[6].value;

    setError('')

    try {
      setLoading(true);
      const res = await fetch("https://unistay-api.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          cellphone,
          birth_date,
          uf,
          country,
          password,
        }),
      });
      setLoading(false);
      res.status === 201 && setModal('login');
    } catch (err) {
      setError(err);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <GrFormClose className={styles.closeIcon} onClick={() => setModal(null)} />
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.formWrap}>
            <Input label="Nome" type="text" placeholder="Digite Nome Completo" required />
            <Input label="E-mail" type="email" placeholder="email@dominio.com" required />
            <Input label="Número do telefone" type="text" placeholder="(12) 34567-8910" regex="cellphone" minLength={15} required />
            <Input label="Data de nascimento" type="text" placeholder="00/00/0000" regex="date" minLength={10} required />
            <Input label="Estado" maxLength="2" type="text" placeholder="UF" minLength={2} required />
            <Input label="Cidade" type="text" placeholder="Cidade do Usuário" required />
            <Input label="Senha" type="password" placeholder="Digite Sua Senha" minLength={6} required />
            <div style={{ position: 'relative' }}>
              <Input label="Confirmar Senha" type="password" placeholder="Repita sua Senha" minLength={6} required />
              <p style={{ position: 'absolute', right: '-200px', bottom: '18px' }}>{error && error}</p>
            </div>
          </div>
          <div className={styles.fileInput}>
            <Input type="file" styles={{ marginTop: "20px" }} label="Foto de Perfil"
              multiple={false} required files={files} setFiles={setFiles} />
          </div>
        </div>

        <p className={styles.agree}>
          Ao selecionar Concordar e Continuar, eu concordo com os <u>Termos de Serviço</u>, os <u> Termos de  Serviço de <br /> Pagamentos</u>, a <u>Política de Não Discriminação</u> e reconheço a Política de Privacidade.
        </p>

        <div className={styles.submitContainer}>
          <button disabled={loading} style={{ transition: loading && "9999999s" }}>
            {!loading ? 'Concordar e Continuar' : 'Validando...'}
          </button>
        </div>
      </form>
    </div>
  )
}
