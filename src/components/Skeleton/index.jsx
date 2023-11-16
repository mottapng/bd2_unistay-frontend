import React from 'react'
import styles from './styles.module.scss';

const Skeleton = (props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.wrapper}>
        {props.children}
      </div>
    </div>
  )
}

export default Skeleton