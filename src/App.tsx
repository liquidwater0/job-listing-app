import "./scss/App.scss";
import { useJobListing } from "./context/JobListingContext";
import Listing from "./components/Listing";

function App() {
	const { renderedListings } = useJobListing();

	return (
		<>
			{renderedListings.map(listing =>
				<Listing
					key={listing.id}
					listing={listing}
				/>
			)}

			{/* <div className="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="https://www.frontendmentor.io/profile/liquidwater0">@liquidwater0</a>.
			</div> */}
		</>
	);
}

export default App;