import Image from 'next/image';
import React from 'react'
import styles from './styles.module.scss'
import { getInitials } from '@/utils/getInitials';
import { HiPencilAlt } from 'react-icons/hi';

export const UserPicture = () => {
  const hasPicture = false;
  const imageUrl = 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1600';

  return (
    <div className={styles.userAvatar}>
      {!hasPicture ?
        <div className={styles.avatarContainer}>{getInitials('Victor Motta')}</div>
        :
        <Image src={imageUrl} width={220} height={220} alt={imageUrl} />
      }
      <div className={styles.iconContainer}>
        <HiPencilAlt className={styles.editIcon} />
      </div>
    </div>
  )
}
