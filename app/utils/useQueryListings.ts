import {useEffect, useState} from 'react';
import {Listing} from '@/models/property';

export const useQueryListings = ({agentId}: { agentId: string }) => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://api.domain.com.au/sandbox/v1/agencies/${agentId}/listings?listingStatusFilter=live`, {
            headers: {
                'content-type': 'application/json',
                'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY as string
            }
        })
            .then(response => response.json())
            .then(data => setListings(data));
    }, []);

    return {listings, error};
};
