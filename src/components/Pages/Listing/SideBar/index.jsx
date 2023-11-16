'use client'
import React, { useRef, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { HiCheckCircle } from 'react-icons/hi'
import { getInitials } from '@/utils/getInitials'
import { Modal } from '@/components/Modal'
import { useAuthContext } from '@/context/AuthProvider'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getType } from '@/utils/getType'

export const SideBar = ({ active, data }) => {
  const { auth, setAuth } = useAuthContext();

  const elementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(null);
  const [modal, setModal] = useState();

  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams();

  const handleContactButton = async () => {
    if (auth.user === data.users.user_id)
      return

    if (!auth.user)
      return setModal("login");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/conversations/${data.users.user_id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      })

      const resData = await res.json();

      const params = new URLSearchParams(searchParams)
      params.set("chat", resData.conversation.conversation_id)
      router.push(pathname + '?' + params.toString());

      setModal("chat")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getElementWidth = () => {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setElementWidth(width);
      }
    };

    getElementWidth();

    const handleResize = () => {
      getElementWidth();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={elementRef} className={styles.sideBar}>
      <div className={styles.sideBarContainer} style={{ width: elementWidth > 300 ? elementWidth : 300 }}>
        <div className={styles.sideBarHead}>
          <h2>{data.private_room ? 'Quarto Privado' : 'Quarto Compartilhado'}</h2>
          <p><span>R${data.price.toLocaleString('pt-BR')}</span>/Mês</p>
        </div>

        <div className={styles.sideBarChecks}>
          <div className={styles.sideBarCheck}>
            <HiCheckCircle fontSize={40} color="var(--purple-primary)" />
            <p>Imóvel tipo {getType(data.type_id)}</p>
          </div>
          <div className={styles.sideBarCheck}>
            <HiCheckCircle fontSize={40} color="var(--purple-primary)" />
            <p>Disponível Agora</p>
          </div>
          <div className={styles.sideBarCheck}>
            <HiCheckCircle fontSize={40} color="var(--purple-primary)" />
            <p>Sexo Misto</p>
          </div>
        </div>

        <div className={styles.sideBarUser}>
          <div className={styles.userAvatar}>
            {getInitials(data.users.name)}
          </div>
          <p>{data.users.name} <br /> ★ 3,6</p>
        </div>

        <a onClick={handleContactButton}>Contatar Locador</a>
      </div>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </div>
  )
}
