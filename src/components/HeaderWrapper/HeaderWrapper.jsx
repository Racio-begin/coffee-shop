import Header from '../Header/Header';
import Title from '../Title/Title';
import './HeaderWrapper.css';

function HeaderWrapper() {
	return (
		<div className="header-wrapper">
			<Header />
			<Title />
		</div>
	);
};

export default HeaderWrapper;