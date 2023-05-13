import type { ReactNode } from "react";
import { useState, useEffect, useContext, createContext } from "react";
import data from "../../data.json";

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
                    listing.role,
                    listing.level,
                    ...listing.languages,
                    ...listing.tools,
                ]
            }
        });
    });
    const [renderedListings, setRenderedListings] = useState<ListingType[]>(listings);
    const [filters, setFilters] = useState<string[]>([]);

    useEffect(() => {
        const filteredListings = getFilteredListings();
        setRenderedListings(filteredListings);
    }, [filters]);

    function getFilteredListings() {
        return listings.filter(listing => {
            const listingFiltersThatMatch = listing.filters.filter(filter => {
                return filters.includes(filter);
            });
            const matches = filters.every((filter, index) => {
                return listingFiltersThatMatch[index] === filter;
            });

            return matches;
        });
    }

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