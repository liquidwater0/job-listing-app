import { useState, useEffect } from "react";
import type { ListingType } from "../../context/JobListingContext";
import { useJobListing } from "../../context/JobListingContext";

export default function Listing({ listing }: { listing: ListingType }) {
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
    const [path, setPath] = useState<string>("");

    useEffect(() => {
        const path = `../../assets/${logo}`;

        import(path /* @vite-ignore */)
          .then(module => setPath(module.default));
      }, []);

    return (
        <div className={`listing ${isFeatured ? "listing-featured" : ""}`}>
            <div className="company-logo">
                <img 
                    src={path} 
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