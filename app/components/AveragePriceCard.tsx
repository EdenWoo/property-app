'use client';
import React from 'react';
import {Card} from 'primereact/card';
import {Listing} from '@/models/property';
import {calculateAveragePrice} from '@/app/utils/parsePrice';

export interface AveragePriceCardProps {
    listings: Listing[];
}

const AveragePriceCard = ({listings}: AveragePriceCardProps) => {
    return (
        <Card>
            <div className="flex justify-center gap-2 px-10">
                <div className="flex justify-center items-center">
                    <i className="las la-dollar-sign text-6xl text-primary"></i>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-neutral-500 text-base">Average Listing Price</div>
                    <div className="flex justify-center items-center">
                        <span className="text-3xl text-neutral-900">${calculateAveragePrice(listings)}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default AveragePriceCard;
