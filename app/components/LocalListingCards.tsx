'use client'
import React from 'react';
import {Card} from 'primereact/card';
import {Listing} from '@/models/property';
import ListingCard from '@/app/components/ListingCard';

export interface LocalListingCardsProps {
    listings: Listing[];
}

export default function LocalListingCards({listings}: LocalListingCardsProps) {

    const footer = (listing: Listing) => {
        return (
            <div className="flex flex-col gap-2 py-4 px-4 mx-12 h-50">
                <div
                    className="h-14 text-lg font-semibold capitalize text-neutral-900 line-clamp-2">{listing.headline}</div>
                {
                    listing.priceDetails?.canDisplayPrice ? (
                        <div className="text-base text-neutral-500 font-bold">${listing.priceDetails.displayPrice}</div>
                    ) : (
                        <div className="text-base text-neutral-500 font-bold">Price on request</div>
                    )
                }
                <div
                    className="text-sm text-neutral-500 dark:text-neutral-400">{listing.addressParts.displayAddress}</div>
                <div className="flex gap-3">
                    <div className="flex gap-2">
                        <div>{listing.bedrooms}</div>
                        <i className="las la-bed text-2xl"></i>
                    </div>
                    <div className="flex gap-2">
                        <div>{listing.bathrooms}</div>
                        <i className="las la-bath text-2xl"></i>
                    </div>
                    <div className="flex gap-2">
                        <div>{listing.carspaces}</div>
                        <i className="las la-parking text-2xl"></i>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {
                    listings.map((listing: Listing) => (
                        <div key={listing.id} className="w-[600px]">
                            <div className="relative">
                                {
                                    listing.status === 'underOffer' && (
                                        <div
                                            className="absolute top-5 right-20 z-50 border rounded-2xl border-solid border-white bg-white text-sm font-bold px-2">
                                            Under Offer</div>
                                    )
                                }
                                <Card unstyled={true} footer={footer(listing)} className="">
                                    <ListingCard listing={listing}/>
                                </Card>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>

    );
}
