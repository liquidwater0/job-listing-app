import "./scss/App.scss";
import { useJobListing } from "./context/JobListingContext";
import Listing from "./components/Listing";
import Filter from "./components/Filter";

function App() {
	const { renderedListings, filters, clearFilters } = useJobListing();

	return (
		<main className="main">
			<div className="filters-container">
				{filters.map(filter =>
					<Filter
						key={filter}
						filter={filter}
					/>	
				)}

				<button 
					className="clear-filters-button"
					onClick={clearFilters}
				>
					Clear
				</button>
			</div>

			<div className="listings-container">
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