'use client'
import React, { useRef, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { HiCheckCircle } from 'react-icons/hi'
import { getInitials } from '@/utils/getInitials'

export const SideBar = ({ active }) => {
  const elementRef = useRef(null);
  const [elementWidth, setElementWidth] = useState(null);

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
          <h2>Quarto Privado</h2>
          <p><span>R$800</span>/Mês</p>
        </div>

        <div className={styles.sideBarChecks}>
          <div className={styles.sideBarCheck}>
            <HiCheckCircle fontSize={40} color="var(--purple-primary)" />
            <p>Disponível Agora</p>
          </div>
          <div className={styles.sideBarCheck}>
            <HiCheckCircle fontSize={40} color="var(--purple-primary)" />
            <p>4 Vagas Restantes</p>
          </div>
          <div className={styles.sideBarCheck}>
            <HiCheckCircle fontSize={40} color="var(--purple-primary)" />
            <p>Sexo Misto</p>
          </div>
        </div>

        <div className={styles.sideBarUser}>
          <div className={styles.userAvatar}>
            {getInitials('Victor Motta')}
          </div>
          <p>Claudio junior da Silva <br /> ★ 4,8</p>
        </div>

        <a>Contatar Locador</a>
      </div>
    </div>
  )
}
