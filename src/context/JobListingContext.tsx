import type { ReactNode } from "react";
import { useState, useEffect, useContext, createContext } from "react";
import data from "../../data.json";

export type ListingType = typeof data[0];

type JobListingContextType = {
    renderedListings: ListingType[],
    filters: string[],
    toggleFilter: (filter: string) => void,
    clearFilters: () => void
}

const JobListingContext = createContext<JobListingContextType>(null!);

export function useJobListing() {
    return useContext(JobListingContext);
}

export default function JobListingProvider({ children }: { children: ReactNode }) {
    const [listings] = useState<ListingType[]>(data);
    const [renderedListings, setRenderedListings] = useState<ListingType[]>(listings);
    const [filters, setFilters] = useState<string[]>([]);

    // useEffect(() => {
    //     //check if listing has a matching filter and if so then display it otherwise filter it out.
    //     setRenderedListings(() => {
    //         const filteredListings: ListingType[] = [];

    //         listings.forEach(listing => {
    //             const listingFilters = [...listing.languages, ...listing.tools];

    //             listingFilters.forEach(listingFilter => {
    //                 if (
    //                     filters.includes(listingFilter) || 
    //                     filters.some(f => f !== listingFilter) ||
    //                     filters.length === 0 && 
    //                     filteredListings.find(l => l.id === listing.id) === undefined
    //                 ) filteredListings.push(listing);
    //             });
    //         });

    //         return filteredListings;
    //     });
    // }, [filters]);

    function toggleFilter(filter: string) {
        setFilters(prevFilters => {
            if (prevFilters.includes(filter)) {
                return prevFilters.filter(f => f !== filter);
            } else {
                return [...prevFilters, filter];
            }
        });
    }

    function clearFilters() {
        setFilters([]);
    }

    return (
        <JobListingContext.Provider value={{ renderedListings, filters, toggleFilter, clearFilters }}>
            { children }
        </JobListingContext.Provider>
    );
}