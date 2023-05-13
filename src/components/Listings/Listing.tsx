import { useState } from "react";
import type { ListingType } from "../../context/JobListingContext";
import { useJobListing } from "../../context/JobListingContext";

type ListingProps = {
    listing: ListingType,
    logos: string[]
}

export default function Listing({ listing, logos }: ListingProps) {
    const { 
        company, 
        logo, 
        new: isNew, 
        featured: isFeatured, 
        position, 
        postedAt, 
        contract, 
        location,
        filters
    } = listing;
    const { toggleFilter } = useJobListing();
    const [logoPath] = useState<string>(() => {
        const path = logos.find(l => l.includes(logo));
        if (!path) return "";
        return path;
    });

    return (
        <div className={`listing ${isFeatured ? "listing-featured" : ""}`}>
            <div className="company-logo">
                <img 
                    src={logoPath} 
                    alt={`${company} logo`} 
                />
            </div>
            <div className="listing-details">
                <div className="details-section">
                    <span className="company-name">{ company }</span>
                    { isNew && <span className="badge new-badge">New!</span> }
                    { isFeatured && <span className="badge featured-badge">Featured</span> }
                </div>

                <h1 className="position-text" aria-label={position}>
                    <a href="#">{ position }</a>
                </h1>

                <div className="details-section">
                    <span>{ postedAt }</span>
                    <span>{ contract }</span>
                    <span>{ location }</span>
                </div>
            </div>
            
            <div className="divider"/>

            <div className="listing-tags">
                {filters.map(tag => 
                    <button 
                        key={tag} 
                        className="tag"
                        onClick={() => toggleFilter(tag)}
                    >
                        { tag }
                    </button>    
                )}
            </div>
        </div>
    );
}