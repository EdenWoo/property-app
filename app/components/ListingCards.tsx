'use client';
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Listing } from '@/models/property';
import ListingCard from '@/app/components/ListingCard';

// e&pageNumber=1&pageSize=6

export interface ListingCardsProps {
  listings: Listing[];
}

export default function ListingCards({ listings }: ListingCardsProps) {
  const [activeListings, setActiveListings] = useState<Listing[]>([]);
  const agentId = '27337';
  useEffect(() => {
    fetch(
      `https://api.domain.com.au/sandbox/v1/agencies/${agentId}/listings?listingStatusFilter=live`,
      {
        headers: {
          'content-type': 'application/json',
          'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY as string,
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        setActiveListings(
          data.filter((listing: Listing) => listing.status === 'live')
        )
      );
  }, []);

  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

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
      <div className='my-4 text-2xl font-bold'>Properties For Rent</div>
      <div className='flex flex-wrap justify-center'>
        {activeListings.map((listing: any) => (
          <div key={listing.id} className='w-[600px]'>
            <Card unstyled={true} footer={footer(listing)} className=''>
              <ListingCard listing={listing} />
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
