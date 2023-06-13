import React from 'react'
import styles from './styles.module.scss'
import { LuUploadCloud } from 'react-icons/lu'

export const ChatBox = () => {
  return (
    <div className={styles.chatBoxContainer}>
      <div className={styles.messagesContainer}>
        <div className={`${styles.receivedMessage} ${styles.message}`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, rerum enim iure, aliquam nesciunt amet praesentium, optio similique error odit dolorem quasi iusto mollitia voluptates cupiditate itaque esse maxime velit!</p>
          <span>12:00</span>
        </div>

        <div className={`${styles.sentMessage} ${styles.message}`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, rerum enim iure, aliquam nesciunt amet praesentium, optio similique error odit dolorem quasi iusto mollitia voluptates cupiditate itaque esse maxime velit!</p>
          <span>12:00</span>
        </div>

        <div className={`${styles.receivedMessage} ${styles.message}`}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, rerum enim iure, aliquam nesciunt amet praesentium, optio similique error odit dolorem quasi iusto mollitia voluptates cupiditate itaque esse maxime velit!</p>
          <span>12:00</span>
        </div>
      </div>

      <div className={styles.typeMessage}>
        <input type="text" placeholder="Digite Uma Mensagem..." />
        <LuUploadCloud color='#958a8a' fontSize={24} />
      </div>
    </div>
  )
}
