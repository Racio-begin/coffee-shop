import './OurCoffeePageWrapper.css';

import Header from '../Header/Header';
import OurCoffeeTitle from '../OurCoffeeTitle/OurCoffeeTitle';

function OurCoffeePageWrapper() {
	return (
		<header className="our-coffee-page-wrapper">
			<Header />
			<OurCoffeeTitle />
		</header>
	);
};

export default OurCoffeePageWrapper;