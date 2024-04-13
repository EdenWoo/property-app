'use client';
import React from 'react';
import LocalListingCards from '@/app/components/LocalListingCards';
import { useQueryListings } from '@/app/utils/useQueryListings';
import Dashboard from '@/app/components/Dashboard';

export default function Listings() {
  const agentId = '27337';
  const { listings } = useQueryListings({ agentId });
  return (
    <>
      <Dashboard listings={listings} />
      <LocalListingCards listings={listings} />
    </>
  );
}
