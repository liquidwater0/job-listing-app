import { useState, useContext, createContext, ReactNode } from "react";
import data from "../../data.json";

export type ListingType = typeof data[0];

type JobListingContextType = {
    renderedListings: ListingType[],
}

const JobListingContext = createContext<JobListingContextType>(null!);

export function useJobListing() {
    return useContext(JobListingContext);
}

export default function JobListingProvider({ children }: { children: ReactNode }) {
    const [listings] = useState<ListingType[]>(data);
    const [renderedListings, setRenderedListings] = useState<ListingType[]>(listings);

    return (
        <JobListingContext.Provider value={{ renderedListings }}>
            { children }
        </JobListingContext.Provider>
    );
}