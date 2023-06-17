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
          {data.description}
        </p>
      </div>
      <div className={styles.location}>
        <p>
          <b>Localização da Republica</b>
          <br />
          <br />
          {`${data.address.street}, N°${data.address.number} - ${data.address.city}`}
          <br />
          {`${data.address.uf}, 86300-000`}</p>
      </div>
      <div className={styles.locExample}>
        <Image src='/locExample.png' fill={true} alt='Location' />
      </div>
    </div>
  )
}
