import React from 'react';
import AveragePriceCard from './AveragePriceCard';
import AgencyInfoCard from './AgencyInfoCard';
import ActiveListingsCard from '@/app/components/ActiveListingsCard';
import { Listing } from '@/models/property';

export interface DashboardProps {
  listings: Listing[];
}
const Dashboard = ({ listings }: DashboardProps) => {
  return (
    <div className='mx-4 my-8 flex flex-col justify-center gap-4 lg:flex-row'>
      <div className=''>
        <AgencyInfoCard />
      </div>
      <div className='flex flex-col justify-between gap-4'>
        <div className=''>
          <ActiveListingsCard listings={listings} />
        </div>
        <div className=''>
          <AveragePriceCard listings={listings} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
