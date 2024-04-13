'use client';
import React from 'react';
import { useQueryLocalListings } from '@/app/utils/useQueryLocalListings';
import LocalListingCards from '@/app/components/LocalListingCards';
import Dashboard from '@/app/components/Dashboard';

export default function LocalListings() {
  const { listings } = useQueryLocalListings();
  return (
    <>
      <Dashboard listings={listings} />
      <LocalListingCards listings={listings} />
    </>
  );
}
