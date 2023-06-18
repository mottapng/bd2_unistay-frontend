import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import { BiBed } from 'react-icons/bi'
import { FaBath, FaCarSide } from 'react-icons/fa'

export const RepCard = ({ data }) => {
  return (
    <div className={styles.repCard}>
      <div className={styles.bannerContainer}>
        <Image
          src={data.images[0] ? data.images[0].file_url :
            '/placeholder.jpg'}
          fill={true}
          className={styles.banner}
          alt="Banner República"
        />
      </div>
      <div className={styles.repContent}>
        <h2>{data.name}</h2>
        <div className={styles.repInfo}>
          <p>{data.type}</p>
          <b>R${data.price.toLocaleString('pt-BR')}/Mês</b>
        </div>
        <div className={styles.repNums}>
          <div>
            <BiBed fontSize={17} />
            {data.qnt_bedrooms}
          </div>
          <div>
            <FaBath fontSize={17} />
            {data.qnt_bathrooms}
          </div>
          <div>
            <FaCarSide fontSize={17} />
            {data.qnt_garage}
          </div>
        </div>
      </div>
    </div>
  )
}
