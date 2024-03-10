'use client';
import type { NextPage } from 'next';
import SearchBar from '@/components/SearchBar/SearchBar';
import styles from './page.module.css';
import EventsDisplay from '@/components/EventsDisplay/EventsDisplay';
import { useEvents } from '@/context/EventsContext';

const Home: NextPage = () => {
  return (
    <div className={styles.mainHero}>
      <h1>Find events near you</h1>
      <SearchBar />
      <EventsDisplay />
    </div>
  );
};

export default Home;
