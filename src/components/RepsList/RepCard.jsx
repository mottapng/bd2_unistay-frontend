import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
import { BiBed } from 'react-icons/bi'
import { FaBath, FaCarSide } from 'react-icons/fa'

export const RepCard = ({ data }) => {
  console.log(data)

  return (
    <div className={styles.repCard}>
      <div className={styles.bannerContainer}>
        <Image src={data.images[0]?.file_url} fill={true} className={styles.banner} alt="Banner República" />
      </div>
      <div className={styles.repContent}>
        <h2>{data.name}</h2>
        <div className={styles.repInfo}>
          <p>{data.type}</p>
          <b>R${data.price}/Mês</b>
        </div>
        <div className={styles.repNums}>
          <div>
            <BiBed fontSize={17} />
            {data.numBedrooms}
          </div>
          <div>
            <FaBath fontSize={17} />
            {data.numBedrooms}
          </div>
          <div>
            <FaCarSide fontSize={17} />
            {data.numBedrooms}
          </div>
        </div>
      </div>
    </div>
  )
}
