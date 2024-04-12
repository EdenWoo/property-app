'use client';
import React, {useEffect, useState} from 'react';
import {Card} from 'primereact/card';
import {Agency} from '@/models/agency';
import Image from 'next/image';
import Agents from '@/app/components/Agents';

const AgencyInfoCard = () => {
    const [agencyInfo, setAgencyInfo] = useState<Agency | null>(null);

    useEffect(() => {
        fetch(`/api/agency`, {
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setAgencyInfo(data)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const title = () => {
        return (
            <div className='flex justify-between flex-col-reverse md:flex-row'>
                <div className="flex">
                    <div>
                        <div className={'text-2xl font-bold text-neutral-900'}>{agencyInfo?.name}</div>
                        <div className='text-neutral-500 text-base'>{agencyInfo?.details.streetAddress1}</div>
                    </div>
                </div>
                <Image width={200} height={100} alt={agencyInfo?.name!} src={agencyInfo?.profile.agencyLogoStandard!} />
            </div>
        )
    }

    const footer = () => {
        return <div className="flex justify-around flex-col gap-2 md:flex-row md:gap-0">
            <div className="flex gap-2">
                <i className="las la-envelope text-2xl"></i>
                <div>{agencyInfo?.contactDetails?.general.email}</div>
            </div>
            <div className="flex gap-2">
                <i className="las la-phone text-2xl"></i>
                <div>{agencyInfo?.contactDetails?.general.phone}</div>
            </div>
            <div className="flex gap-2">
                <i className="las la-fax text-2xl"></i>
                <div>{agencyInfo?.contactDetails?.general.fax}</div>
            </div>
        </div>
    }

    return (
        <Card title={title()} footer={footer()}>
            <div className="h-[110px]">
                <div className="flex gap-4 flex-col md:flex-row">
                    <div className="flex gap-8 mt-4 flex-grow px-8">
                        <div className="flex flex-col gap-1">
                            <div className="text-center"><i className="las la-hand-holding-usd"></i></div>
                            <div className='text-center text-lg font-bold'>{agencyInfo?.profile.numberForSale}</div>
                            <div className='text-sm w-20 text-center'>For Sale</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-center"><i className="las la-bed"></i></div>
                            <div className='text-center text-lg font-bold'>{agencyInfo?.profile.numberForRent}</div>
                            <div className='text-sm w-20 text-center'>For Rent</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-96">
                        <Agents agents={agencyInfo?.agents || []} numVisible={5}/>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default AgencyInfoCard;
