import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

export const BottomInfo = ({ data }) => {
  return (
    <div className={styles.bottomInfoContainer}>
      <div className={styles.description}>
        <p>
          <b>Descrição da Republica</b>
          <br />
          <br />
          {data.desc}
        </p>
      </div>
      <div className={styles.location}>
        <p>
          <b>Localização da Republica</b>
          <br />
          <br />
          {`${data.street}, N°${data.num} - ${data.city}`}
          <br />
          {`${data.state}, ${data.cep}`}</p>
      </div>
      <div className={styles.locExample}>
        <Image src='/locExample.png' fill={true} alt='Location' />
      </div>
    </div>
  )
}
