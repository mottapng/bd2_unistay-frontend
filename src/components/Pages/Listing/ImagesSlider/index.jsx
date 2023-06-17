'use client'
import React from 'react'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './styles.module.scss'
import '@/utils/slider.css'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

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

export function ImagesSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, i) => (
          <div className={styles.slide} key={i}>
            <Image src={image.file_url} fill={true} alt={image.file_name} />
          </div>
        ))}
      </Slider>
    </div>
  );
}