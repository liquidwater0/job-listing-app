import "./scss/App.scss";
import { useJobListing } from "./context/JobListingContext";
import Listing from "./components/Listing";

function App() {
	const { renderedListings, filters } = useJobListing();

	return (
		<main className="main">
			<div className="filters">
				{filters.map(filter =>
					<div key={filter} className="filter">
						{ filter }
					</div>	
				)}
			</div>

			<div className="listings">
				{renderedListings.map(listing =>
					<Listing
						key={listing.id}
						listing={listing}
					/>
				)}
			</div>

			{/* <div className="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="https://www.frontendmentor.io/profile/liquidwater0">@liquidwater0</a>.
			</div> */}
		</main>
	);
}

export default App;