import React from 'react'
import { RepCard } from './RepCard'
import styles from './styles.module.scss'
import Link from 'next/link'

const republics = [
  {
    id: 1,
    name: 'República 01',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1100,
    numBedrooms: 1,
    numBathrooms: 2,
    numGarage: 3
  },
  {
    id: 2,
    name: 'República 02',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1200,
    numBedrooms: 3,
    numBathrooms: 2,
    numGarage: 1
  },
  {
    id: 3,
    name: 'República 03',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1300,
    numBedrooms: 2,
    numBathrooms: 3,
    numGarage: 1
  },
  {
    id: 4,
    name: 'República 01',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1100,
    numBedrooms: 1,
    numBathrooms: 2,
    numGarage: 3
  },
  {
    id: 5,
    name: 'República 02',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1200,
    numBedrooms: 3,
    numBathrooms: 2,
    numGarage: 1
  },
  {
    id: 6,
    name: 'República 03',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1300,
    numBedrooms: 2,
    numBathrooms: 3,
    numGarage: 1
  },
  {
    id: 7,
    name: 'República 01',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1100,
    numBedrooms: 1,
    numBathrooms: 2,
    numGarage: 3
  },
  {
    id: 8,
    name: 'República 02',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1200,
    numBedrooms: 3,
    numBathrooms: 2,
    numGarage: 1
  },
  {
    id: 9,
    name: 'República 03',
    photos: ['https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/4588041/pexels-photo-4588041.jpeg?auto=compress&cs=tinysrgb&w=1600', 'https://images.pexels.com/photos/9956248/pexels-photo-9956248.jpeg?auto=compress&cs=tinysrgb&w=1600'],
    type: 'Quarto Privado',
    price: 1300,
    numBedrooms: 2,
    numBathrooms: 3,
    numGarage: 1
  },
]

export const RepsList = ({ displayListings }) => {
  const republicsToShow = republics.slice(0, displayListings);

  return (
    <div className={styles.repsGrid}>
      {republicsToShow.map((data, i) => (
        <Link href={`/listings/${data.id}`} key={i}>
          <RepCard data={data} />
        </Link>
      ))}
    </div>
  )
}