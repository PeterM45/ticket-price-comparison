'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './SearchBar.module.css';
import Dropdown from '../Dropdown/Dropdown';
import { Option } from '../../types/DropdownTypes';
import { fetchEventsFromTicketMaster } from '../../services/EventService';
import { useEvents } from '../../context/EventsContext';

const SearchBar: React.FC = () => {
  const { query, setQuery, selectedCategory, setSelectedCategory } =
    useEvents();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchSubmitted, setSearchSubmitted] = useState<boolean>(false);

  const { setEvents } = useEvents(); // Destructure setEvents from your context

  const categoryOptions = [
    { value: 'CONCERT', label: 'Concerts' },
    { value: 'SPORTS', label: 'Sports' },
    { value: 'ARTS_THEATER', label: 'Arts & Theater' },
    { value: 'FAMILY', label: 'Family' },
  ];

  const handleCategorySelect = (option: Option) => {
    setSelectedCategory(option);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) return;

    setLoading(true);
    setError(null);

    try {
      const data = await fetchEventsFromTicketMaster({
        query,
        category: selectedCategory?.value,
      });
      // Directly use the data if it matches the Event interface structure
      setEvents(data._embedded.events);
    } catch (error) {
      setError('Search failed. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className={styles.searchbarInput}
          placeholder="Search..."
        />

        <Dropdown
          options={categoryOptions}
          onOptionSelected={handleCategorySelect}
        />

        <button
          type="submit"
          className={styles.searchbarSubmitBtn}
          disabled={loading}
        >
          Search
        </button>
      </form>
      {loading && <p>Searching...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.choice}>
        {selectedCategory && (
          <p>
            Searching for {selectedCategory.label} events related to &quot;
            {query}&quot;
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
