import { FetchEventsParams, EventResponse } from '../types/EventTypes';

export const fetchEventsFromTicketMaster = async ({
  query,
  category,
}: FetchEventsParams): Promise<EventResponse> => {
  const apiKey = 'ENTER_YOUR_API_KEY_HERE';
  const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json';

  const params = new URLSearchParams({
    keyword: query,
    apikey: apiKey,
    ...(category ? { classificationName: category } : {}),
  });

  try {
    const response = await fetch(`${baseUrl}?${params}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Adjust this as needed based on actual data structure
  } catch (error) {
    console.error('Search failed:', error);
    throw error; // Rethrow the error to handle it in the component
  }
};
