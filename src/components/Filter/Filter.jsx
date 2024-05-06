import './Filter.css';
import FilterButton from '../FilterButton/FilterButton';

function Filter() {
	return (
		<div className="filter">
			<p className="filter__text">Or filter</p>

			<div className="filter__container">
				<FilterButton
					buttonName={"Brazil"}
				/>
				<FilterButton
					buttonName={"Kenya"}
				/>
				<FilterButton
					buttonName={"Columbia"}
				/>
			</div>
		</div>
	);
};

export default Filter;