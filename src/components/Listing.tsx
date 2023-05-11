import type { ListingType } from "../context/JobListingContext";
import { useJobListing } from "../context/JobListingContext";

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
        languages,
        tools
    } = listing;
    const { toggleFilter } = useJobListing();

    return (
        <div className={`listing ${isFeatured ? "listing-featured" : ""}`}>
            <div className="company-logo">
                <img 
                    src={logo} 
                    alt={`${company} logo`} 
                />
            </div>
            <div className="listing-details">
                <div className="details-section">
                    <span className="company-name">{ company }</span>
                    { isNew && <span className="badge new-badge">New!</span> }
                    { isFeatured && <span className="badge featured-badge">Featured</span> }
                </div>

                <h1 className="position-text">{ position }</h1>

                <div className="details-section">
                    <span>{ postedAt }</span>
                    <span>{ contract }</span>
                    <span>{ location }</span>
                </div>
            </div>
            <div className="listing-tags">
                {[...languages, ...tools].map(tag => 
                    <div 
                        key={tag} 
                        className="tag"
                        onClick={() => toggleFilter(tag)}
                    >
                        { tag }
                    </div>    
                )}
            </div>
        </div>
    );
}