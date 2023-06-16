import React from 'react'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'
import { SelectOne } from '../../SelectOne'
import { ChatBox } from './ChatBox'

export const Chat = ({ setModal }) => {
  const options = [
    'John Doe',
    'Dohn Joe',
    'Jane Doe',
  ];

  return (
    <div className={styles.chatContainer}>
      <GrFormClose className={styles.closeIcon} onClick={() => setModal(null)} />
      <h1>Chat</h1>
      <SelectOne options={options} label="Selecione o Chat" search={true} />
      <ChatBox />
    </div>
  )
}
