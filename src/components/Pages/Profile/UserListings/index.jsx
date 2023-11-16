'use client'
import React from 'react'
import { RepCard } from '@/components/RepsList/RepCard'
import Link from 'next/link'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss'
import { FaChevronLeft, FaChevronRight, FaRegTrashAlt } from 'react-icons/fa';
import '@/utils/slider.css'
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthProvider';

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

export const UserListings = ({ listings }) => {
  const router = useRouter();
  const { auth } = useAuthContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const handleDeleteListing = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      },
    })

    if (response.ok) {
      router.refresh();
    }
  }

  return (
    <div className={styles.userListingsContainer}>
      <h2>Seus Anúncios</h2>
      <div className={styles.userListings}>
        {listings.length > 3 ?
          <Slider {...settings}>
            {listings.map((listing, i) => (
              <div key={i} className={styles.deleteListingContainer}>
                <div className={styles.deleteListing} onClick={() => handleDeleteListing(listing.listing_id)}>
                  <FaRegTrashAlt />
                </div>
                <Link href={`/listings/${listing.listing_id}`} key={i}>
                  <RepCard data={listing} />
                </Link>
              </div>
            ))}
          </Slider>
          :
          <div className={styles.userListingsInner}>
            {listings.map((listing, i) => (
              <div key={i} className={styles.deleteListingContainer}>
                <div className={styles.deleteListing} onClick={() => handleDeleteListing(listing.listing_id)}>
                  <FaRegTrashAlt />
                </div>
                <Link href={`/listings/${listing.listing_id}`}>
                  <RepCard data={listing} />
                </Link>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}
