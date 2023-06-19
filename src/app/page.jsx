import { HeadSection } from '@/components/Pages/Home/HeadSection'
import { AddSection } from '@/components/Pages/Home/AddSection'
import { ListSection } from '@/components/Pages/Home/ListSection'
import styles from './styles.module.scss'

async function getData() {
  const res = await fetch("https://unistay-api.onrender.com/listings", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  let data = await getData();

  return (
    <div className={styles.homeContainer}>
      <HeadSection />
      <ListSection data={data} />
      <AddSection />
    </div>
  )
}