import "./scss/App.scss";
import { useJobListing } from "./context/JobListingContext";
import Listing from "./components/Listing";
import Filter from "./components/Filter";
import mobileHeaderImage from "./assets/bg-header-mobile.svg";
import desktopHeaderImage from "./assets/bg-header-desktop.svg";

function App() {
	const { renderedListings, filters, clearFilters } = useJobListing();

	return (
		<>
			<header className="header">
				<picture className='sidebar-image'>
					<source media='(max-width: 900px)' srcSet={mobileHeaderImage}/>
					<source media='(min-width: 1024px)' srcSet={desktopHeaderImage}/>
					<img src={desktopHeaderImage} alt="header image" />
				</picture>
			</header>

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
		</>
	);
}

export default App;