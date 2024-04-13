'use client';
import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Agency } from '@/models/agency';
import Image from 'next/image';
import Agents from '@/app/components/Agents';

const AgencyInfoCard = () => {
  const [agencyInfo, setAgencyInfo] = useState<Agency | null>(null);

  useEffect(() => {
    fetch(`/api/agency`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAgencyInfo(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const title = () => {
    return (
      <div className='flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='flex'>
          <div>
            <div className={'text-2xl font-bold text-neutral-900'}>
              {agencyInfo?.name}
            </div>
            <div className='text-base text-neutral-500'>
              {agencyInfo?.details.streetAddress1}
            </div>
          </div>
        </div>
        <Image
          width={200}
          height={100}
          alt={agencyInfo?.name!}
          src={agencyInfo?.profile.agencyLogoStandard!}
        />
      </div>
    );
  };

  const footer = () => {
    return (
      <div className='flex flex-col items-center gap-2 md:flex-row md:justify-around md:gap-0'>
        <div className='flex gap-2'>
          <i className='las la-envelope text-2xl'></i>
          <div>{agencyInfo?.contactDetails?.general.email}</div>
        </div>
        <div className='flex gap-2'>
          <i className='las la-phone text-2xl'></i>
          <div>{agencyInfo?.contactDetails?.general.phone}</div>
        </div>
        <div className='flex gap-2'>
          <i className='las la-fax text-2xl'></i>
          <div>{agencyInfo?.contactDetails?.general.fax}</div>
        </div>
      </div>
    );
  };

  return (
    <Card title={title()} footer={footer()}>
      <div className='flex h-40 justify-center md:h-[110px]'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='mt-4 flex flex-grow justify-center gap-8 px-8'>
            <div className='flex flex-col gap-1'>
              <div className='text-center'>
                <i className='las la-hand-holding-usd'></i>
              </div>
              <div className='text-center text-lg font-bold'>
                {agencyInfo?.profile.numberForSale}
              </div>
              <div className='w-20 text-center text-sm'>For Sale</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='text-center'>
                <i className='las la-bed'></i>
              </div>
              <div className='text-center text-lg font-bold'>
                {agencyInfo?.profile.numberForRent}
              </div>
              <div className='w-20 text-center text-sm'>For Rent</div>
            </div>
          </div>
          <div className='flex w-96 items-center justify-center'>
            <Agents agents={agencyInfo?.agents || []} numVisible={5} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AgencyInfoCard;
