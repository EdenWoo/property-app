import {useEffect, useState} from 'react';
import {Listing} from '@/models/property';

export const useQueryLocalListings = () => {
    const [listings, setListings] = useState<Listing[]>([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`/api/agency-listings`, {
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(response => response.json())
            .then((listings: Listing[]) => {
                setListings(listings);
            })
            .catch(error => {
                setError(error)
            });
    }, []);

    return {listings, error};
};
