import Listings from '@/app/(listings)/listings/page';
import Header from '@/app/components/Header';
import React from 'react';

export default function Home() {
    return (
        <div>
            <Header/>
            <Listings/>
        </div>
    );
}
