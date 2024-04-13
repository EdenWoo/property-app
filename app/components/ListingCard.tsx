import React, { FC } from 'react';
import { Listing, Media } from '@/models/property';
import { Carousel } from 'primereact/carousel';

export interface ListingCardProps {
  className?: string;
  data?: any;
  size?: 'default' | 'small';
  listing: Listing;
}

const ListingCard: FC<ListingCardProps> = ({ listing }) => {
  const itemTemplate = (media: Media) => {
    return (
      <div className=''>
        <div className=''>
          {media.type === 'photo' ? (
            <img
              src={media.url}
              alt={''}
              className='h-80 w-[600px] object-cover'
            />
          ) : (
            <div className='flex h-80 items-center justify-center border border-solid'>
              <a href={media.url} target='_blank'>
                <i className='lab la-youtube text-8xl'></i>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={listing.media}
      numScroll={1}
      numVisible={1}
      showNavigators={true}
      showIndicators={false}
      itemTemplate={itemTemplate}
    />
  );
};

export default ListingCard;
