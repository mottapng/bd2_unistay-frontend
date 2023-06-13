import React from 'react'
import { RepCard } from '@/components/RepsList/RepCard'
import Link from 'next/link'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '@/utils/slider.css'

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.chevron}`}
      onClick={onClick}
    >
      <FaChevronRight fontSize={23} color="var(--purple-primary)" />
    </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.chevron}`}
      onClick={onClick}
    >
      <FaChevronLeft fontSize={23} color="var(--purple-primary)" />
    </div>
  );
}

export const UserListings = () => {
  const data = [{
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className={styles.userListingsContainer}>
      <h2>Seus Anúncios</h2>
      <div className={styles.userListings}>
        <Slider {...settings}>
          {data.map((item, i) => (
            <Link href={`/listings/${item.id}`} key={i}>
              <RepCard data={item} />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}
