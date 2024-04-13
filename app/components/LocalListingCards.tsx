'use client';
import React from 'react';
import { Card } from 'primereact/card';
import { Listing } from '@/models/property';
import ListingCard from '@/app/components/ListingCard';

export interface LocalListingCardsProps {
  listings: Listing[];
}

export default function LocalListingCards({
  listings,
}: LocalListingCardsProps) {
  const footer = (listing: Listing) => {
    return (
      <div className='h-50 mx-12 flex flex-col gap-2 px-4 py-4'>
        <div className='line-clamp-2 h-14 text-lg font-semibold capitalize text-neutral-900'>
          {listing.headline}
        </div>
        {listing.priceDetails?.canDisplayPrice ? (
          <div className='text-base font-bold text-neutral-500'>
            ${listing.priceDetails.displayPrice}
          </div>
        ) : (
          <div className='text-base font-bold text-neutral-500'>
            Price on request
          </div>
        )}
        <div className='text-sm text-neutral-500 dark:text-neutral-400'>
          {listing.addressParts.displayAddress}
        </div>
        <div className='flex gap-3'>
          <div className='flex gap-2'>
            <div>{listing.bedrooms}</div>
            <i className='las la-bed text-2xl'></i>
          </div>
          <div className='flex gap-2'>
            <div>{listing.bathrooms}</div>
            <i className='las la-bath text-2xl'></i>
          </div>
          <div className='flex gap-2'>
            <div>{listing.carspaces}</div>
            <i className='las la-parking text-2xl'></i>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className='flex flex-wrap justify-center'>
        {listings.map((listing: Listing) => (
          <div key={listing.id} className='w-[600px]'>
            <div className='relative'>
              {listing.status === 'underOffer' && (
                <div className='absolute right-20 top-5 z-50 rounded-2xl border border-solid border-white bg-white px-2 text-sm font-bold'>
                  Under Offer
                </div>
              )}
              <Card unstyled={true} footer={footer(listing)} className=''>
                <ListingCard listing={listing} />
              </Card>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
