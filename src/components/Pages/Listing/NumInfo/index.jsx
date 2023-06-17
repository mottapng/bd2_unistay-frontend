import React from 'react'
import styles from './styles.module.scss'
import { BiBed } from 'react-icons/bi'
import { FaBath, FaCarSide } from 'react-icons/fa'

export const NumInfo = ({ data }) => {
  return (
    <div className={styles.numInfoContainer}>
      <div className={styles.prop}>
        <div className={styles.icon}>
          <BiBed fontSize={32} color="var(--purple-primary)" />
        </div>
        <p>{data.qnt_bedrooms} Quartos</p>
      </div>
      <div className={styles.prop}>
        <div className={styles.icon}>
          <FaBath fontSize={32} color="var(--purple-primary)" />
        </div>
        <p>{data.qnt_bathrooms} Banheiros</p>
      </div>
      <div className={styles.prop}>
        <div className={styles.icon}>
          <FaCarSide fontSize={32} color="var(--purple-primary)" />
        </div>
        <p>{data.qnt_garage} Vagas na Garagem</p>
      </div>
    </div>
  )
}
