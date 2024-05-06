import './Filters.css';
import Search from '../Search/Search.jsx';
import Filter from '../Filter/Filter.jsx';

function Filters() {
	return (
		<div className="filters">
			<Search />
			<Filter />
		</div>
	);
};

export default Filters;