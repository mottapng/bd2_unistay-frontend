import React from 'react'
import styles from './styles.module.scss'
import { GrFormClose } from 'react-icons/gr'
import { Input } from '@/components/Input'
import { SelectOne } from './SelectOne'
import { ChatBox } from './ChatBox'

export const Chat = ({ setModal }) => {
  return (
    <div className={styles.chatContainer}>
      <GrFormClose className={styles.closeIcon} onClick={() => setModal(null)} />
      <h1>Chat</h1>
      <SelectOne />
      <ChatBox />
    </div>
  )
}
