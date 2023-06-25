import React from 'react';
import { Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';

//Remove the data fetching logic from the Listings component, and move this to a separate ListingsContainer component located in /components/container/Listings.tsx

export default function Listings({ data }) {
  if (!data) return null;

  return (
    <ListingsGrid>
      {data.listings.map((listing) => (
        <Listing key={listing.id} listing={listing} />
      ))}
    </ListingsGrid>
  );
}
