import { useJobListing } from "../context/JobListingContext";
import removeIcon from "../assets/icon-remove.svg";

export default function Filter({ filter }: { filter: string }) {
    const { toggleFilter } = useJobListing();

    return (
        <div className="filter-container">
            <div className="filter-text">{ filter }</div>

            <button 
                className="remove-filter-button"
                onClick={() => toggleFilter(filter)}
                aria-label={`remove ${filter} filter`}
            >
                <img src={removeIcon} alt="remove filter icon" />
            </button>
        </div>
    )
}