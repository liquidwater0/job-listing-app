import { useJobListing } from "../../context/JobListingContext";
import Listing from "./Listing";

export default function Listings() {
    const { renderedListings } = useJobListing();

    return (
        <div className="container listings-container">
            {renderedListings.map(listing =>
                <Listing
                    key={listing.id}
                    listing={listing}
                />
            )}
        </div>
    );
}