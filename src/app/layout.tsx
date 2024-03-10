// Inside the RootLayout.tsx or equivalent layout file
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { EventsProvider } from '@/context/EventsContext';
import './globals.css'; // Assuming this is the correct path to your global styles

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <EventsProvider>
          <Navbar />
          <div>{children}</div>
        </EventsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
