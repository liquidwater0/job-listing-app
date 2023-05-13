import { useJobListing } from "../../context/JobListingContext";
import Filter from "./Filter";

export default function index() {
    const { filters, clearFilters } = useJobListing();

    return (
        <div className="container filters-container">
            <div className="filters">
                {filters.map(filter =>
                    <Filter
                        key={filter}
                        filter={filter}
                    />	
                )}
            </div>

            <button 
                className="clear-filters-button"
                onClick={clearFilters}
            >
                Clear
            </button>
        </div>
    );
}