'use client';
import React from 'react';
import Image from 'next/image';
import styles from './EventCard.module.css';
import { EventCardProps } from '../../types/EventTypes';

const EventCard: React.FC<EventCardProps> = ({
  name,
  imageUrl,
  priceRange,
  date,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={`Event named ${name}`}
          width={500} // Specify appropriate width
          height={300} // Specify appropriate height, maintaining the aspect ratio
          className={styles.image}
          layout="responsive" // Optional, depending on your design needs
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.date}>{date}</p>
        {priceRange && <p className={styles.price}>Price: {priceRange}</p>}
      </div>
    </div>
  );
};

export default EventCard;
