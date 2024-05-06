import './Search.css';

import SearchInput from '../SearchInput/SearchInput';

function Search() {
	return (
		<div className="search">
			<p className="search__text">Looking for</p>
			<SearchInput></SearchInput>
		</div>
	);
};

export default Search;