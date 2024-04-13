'use client';
import React from 'react';
import { Card } from 'primereact/card';
import { Listing } from '@/models/property';

export interface ActiveListingsCardProps {
  listings: Listing[];
}

const ActiveListingsCard = ({ listings }: ActiveListingsCardProps) => {
  const activeListings = listings.filter(
    (listing) => listing.status === 'live'
  );
  return (
    <Card>
      <div className='flex justify-center gap-2 px-10'>
        <div className='flex items-center justify-center'>
          <i className='las la-home text-primary text-6xl'></i>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='text-base text-neutral-500'>
            Currently Active Listings
          </div>
          <div className='flex items-center justify-center'>
            <span className='text-3xl text-neutral-900'>
              {activeListings?.length}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ActiveListingsCard;
