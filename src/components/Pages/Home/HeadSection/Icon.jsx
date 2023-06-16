import React from 'react'
import styles from './styles.module.scss'

export const Icon = ({ icon, text }) => {
  return (
    <div className={styles.infoContainer}>
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  )
}