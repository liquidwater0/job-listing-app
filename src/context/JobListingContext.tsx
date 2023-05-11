import { useState, useContext, createContext, ReactNode } from "react";
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