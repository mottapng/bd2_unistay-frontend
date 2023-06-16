'use client'
import { HeadSection } from '@/components/Pages/Home/HeadSection'
import { AddSection } from '@/components/Pages/Home/AddSection'
import { ListSection } from '@/components/Pages/Home/ListSection'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <HeadSection />
      <ListSection />
      <AddSection />
    </div>
  )
}