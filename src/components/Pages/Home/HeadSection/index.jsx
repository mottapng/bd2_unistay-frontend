import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Icon } from './Icon'
import { RiEye2Line, RiMoneyDollarCircleLine, RiPlantLine, RiShieldStarLine, RiStackLine } from 'react-icons/ri'
import { TbBuildingCommunity } from 'react-icons/tb'

export const HeadSection = () => {
  return (
    <section className={styles.headContainer}>
      <h1>Encontre vagas em repúblicas pelo menor custo</h1>
      <div className={styles.bottomContainer}>
        <Image src="/unsplashImg.png" width={387} height={521} className={styles.image} alt="Unsplash" />
        <div className={styles.infoGrid}>
          <Icon icon={<RiMoneyDollarCircleLine className={styles.icon} />} text="Preços que cabem no bolso!" />
          <Icon icon={<TbBuildingCommunity className={styles.icon} />} text="Se conecte com outros estudantes!" />
          <Icon icon={<RiStackLine className={styles.icon} />} text="Fale diretamente com o proprietário " />
          <Icon icon={<RiPlantLine className={styles.icon} />} text="Tudo pertinho e acessível" />
          <Icon icon={<RiShieldStarLine className={styles.icon} />} text="Plataforma segura" />
          <Icon icon={<RiEye2Line className={styles.icon} />} text="Pague pelo que usa" />
        </div>
      </div>
    </section>
  )
}
