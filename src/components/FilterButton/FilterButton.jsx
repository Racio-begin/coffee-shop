import './FilterButton.css';

function FilterButton({ buttonName }) {
	return (
		<button className="filter-button button">
			{buttonName}
		</button>
	);
};

export default FilterButton;