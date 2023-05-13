import { useJobListing } from "../../context/JobListingContext";
import Listing from "./Listing";

//company logos
import accountLogo from "../../assets/account.svg";
import eyecamLogo from "../../assets/eyecam-co.svg";
import faceitLogo from "../../assets/faceit.svg";
import insureLogo from "../../assets/insure.svg";
import loopStudiosLogo from "../../assets/loop-studios.svg";
import manageLogo from "../../assets/manage.svg";
import myHomeLogo from "../../assets/myhome.svg";
import photosnap from "../../assets/photosnap.svg";
import shortly from "../../assets/shortly.svg";
import airFilterLogo from "../../assets/the-air-filter-company.svg";

const logos = [
    accountLogo, 
    eyecamLogo, 
    faceitLogo, 
    insureLogo, 
    loopStudiosLogo, 
    manageLogo, 
    myHomeLogo, 
    photosnap, 
    shortly, 
    airFilterLogo
];

export default function Listings() {
    const { renderedListings } = useJobListing();

    return (
        <div className="container listings-container">
            {renderedListings.map(listing =>
                <Listing
                    key={listing.id}
                    listing={listing}
                    logos={logos}
                />
            )}
        </div>
    );
}