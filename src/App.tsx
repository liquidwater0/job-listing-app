import "./scss/App.scss";
import { useJobListing } from "./context/JobListingContext";
import Listings from "./components/Listings";
import Filters from "./components/Filters";
import mobileHeaderImage from "./assets/bg-header-mobile.svg";
import desktopHeaderImage from "./assets/bg-header-desktop.svg";

function App() {
	const { filters } = useJobListing();

	return (
		<>
			<header className="header">
				<picture>
					<source media='(max-width: 600px)' srcSet={mobileHeaderImage}/>
					<source media='(min-width: 1024px)' srcSet={desktopHeaderImage}/>
					<img src={desktopHeaderImage} alt="header image" />
				</picture>
			</header>

			<main className="main">
				{ filters.length > 0 && <Filters/> }
				<Listings/>

				<div className="attribution">
					Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
					Coded by <a href="https://www.frontendmentor.io/profile/liquidwater0">@liquidwater0</a>.
				</div>
			</main>
		</>
	);
}

export default App;