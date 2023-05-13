import { useJobListing } from "../../context/JobListingContext";
import Listing from "./Listing";

//company logos
import "../../assets/account.svg";
import "../../assets/eyecam-co.svg";
import "../../assets/faceit.svg";
import "../../assets/insure.svg";
import "../../assets/loop-studios.svg";
import "../../assets/manage.svg";
import "../../assets/myhome.svg";
import "../../assets/photosnap.svg";
import "../../assets/shortly.svg";
import "../../assets/the-air-filter-company.svg";

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