'use client'
import { HeadSection } from '@/components/Home/HeadSection'
import { AddSection } from '@/components/Home/AddSection'
import { ListSection } from '@/components/Home/ListSection'
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