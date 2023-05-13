import type { ReactNode } from "react";
import { useState, useEffect, useContext, createContext } from "react";
import data from "../../data.json";

// export type ListingType = typeof data[0] & { filters: string[] };
type Data = typeof data[0];
export interface ListingType extends Data {
    filters: string[]
}

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
    const [listings] = useState<ListingType[]>(() => {
        return data.map(listing => {
            return { 
                ...listing, 
                filters: [
                    ...listing.languages,
                    ...listing.tools,
                    listing.level,
                    listing.role
                ]
            }
        });
    });
    const [renderedListings, setRenderedListings] = useState<ListingType[]>(listings);
    const [filters, setFilters] = useState<string[]>([]);

    useEffect(() => {
        setRenderedListings(() => {
            return listings.filter(listing => {
                const listingFilters = [
                    ...listing.languages, 
                    ...listing.tools, 
                    listing.level, 
                    listing.role
                ];

                for (const listingFilter of listingFilters) {
                    if (filters.includes(listingFilter) || filters.length === 0) {
                        return true;
                    }
                }

                return false;
            });
        });
    }, [filters]);

    //partially works
    // useEffect(() => {
    //     setRenderedListings(() => {
    //         return listings.filter(listing => {
    //             const listingFilters = [...listing.languages, ...listing.tools];

    //             for (const listingFilter of listingFilters) {
    //                 if (filters.some(filter => filter === listingFilter) || filters.length === 0) {
    //                     return true;
    //                 }
    //             }

    //             return false;
    //         });
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