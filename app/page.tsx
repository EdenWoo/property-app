import Header from '@/app/components/Header';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cards from '@/images/cards.png';
import listings from '@/images/listings.png';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='px-24 py-10 text-lg'>
        <div>
          <div className='text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl'>
            Property App features:
          </div>
          <ul className='list-disc'>
            <li>
              <Link
                href='/listings'
                target='_blank'
                className={'text-blue-700'}
              >
                Sandbox
              </Link>
              : listing data from Domain.com.au.
            </li>
            <li>
              <Link
                href='/local-listings'
                target='_blank'
                className={'text-blue-700'}
              >
                Local
              </Link>
              : listing data from local json data.
            </li>
            <li>
              Unit test added for important logic under: parsePrice.test.ts
            </li>
            <li>Responsive on both phone and desktop.</li>
            <li>
              Implemented ActiveListingsCard, AveragePriceCard,AgencyInfoCard:
              <Image src={cards} width={1000} alt={'image'} />
            </li>
            <li>
              Add extra cards for local listings:
              <Image src={listings} width={1000} alt={'image'} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
