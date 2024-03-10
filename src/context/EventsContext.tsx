// In EventsContext.tsx or wherever your context is defined
'use client';
import React, { createContext, useContext, useState } from 'react';
import { Event } from '../types/EventTypes'; // Ensure this is the correct path
import { Option } from '../types/DropdownTypes';

interface EventContextType {
  query: string;
  setQuery: (query: string) => void;
  selectedCategory: Option | null;
  setSelectedCategory: (option: Option | null) => void;
  events: Event[];
  setEvents: (events: Event[]) => void;
}

const EventsContext = createContext<EventContextType | undefined>(undefined);

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Option | null>(null);
  const [events, setEvents] = useState<Event[]>([]);

  const value = {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    events,
    setEvents,
  };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventsProvider');
  }
  return context;
};
