import React from 'react'
import styles from './styles.module.scss'
import { getType } from '@/utils/getType'

export const BottomInfo = ({ data }) => {
  return (
    <div className={styles.bottomInfoContainer}>
      <div className={styles.description}>
        <p>
          <b>Descrição da {getType(data.type_id)}</b>
          <br />
          <br />
          {data.description}
        </p>
      </div>
      <div className={styles.location}>
        <p>
          <b>Localização da {getType(data.type_id)}</b>
          <br />
          <br />
          {`${data.address.street}, N°${data.address.number}, `}
          <br />
          {`${data.address.city} - ${data.address.uf}`}</p>
      </div>
      <div className={styles.locExample}>
        <iframe
          height="500"
          loading="lazy"
          style={{ border: 0, width: '100%' }}
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                &q=${data.address.street}, n°${data.address.number}, ${data.address.city} - ${data.address.uf}`}>
        </iframe>
      </div>
    </div>
  )
}
