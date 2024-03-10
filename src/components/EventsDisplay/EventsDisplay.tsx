// EventsDisplay component
'use client';
import React from 'react';
import { useEvents } from '../../context/EventsContext';
import EventCard from '../EventCard/EventCard';

const EventsDisplay: React.FC = () => {
  const { events } = useEvents();

  return (
    <div>
      {events.slice(0, 5).map((event) => (
        <EventCard
          key={event.id}
          name={event.name}
          date={event.date}
          imageUrl={event.imageUrl}
        />
      ))}
    </div>
  );
};

export default EventsDisplay;
