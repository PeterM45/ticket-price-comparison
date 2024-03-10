// Defines parameters for fetching events
export interface Event {
  id: string;
  name: string;
  date: string; // Assuming the API returns a simple date string
  imageUrl: string;
  // Include any other properties directly returned by the API
}

export interface EventImage {
  url: string;
  width: number;
  height: number;
}

export interface EventPriceRange {
  type: string; // For example, "standard" or "VIP"
  currency: string;
  min: number;
  max: number;
}

export interface FetchEventsParams {
  query: string;
  category?: string;
}

// Represents the structure of the response from the event API
export interface EventResponse {
  [x: string]: any;
  // Define the structure based on the API response
  // For example:
  events: Array<{
    id: string;
    name: string;
    date: string;
    // Add more fields as needed
  }>;
}

export interface EventCardProps {
  name: string;
  imageUrl: string;
  priceRange?: string; // Price might not always be available
  date: string;
}
