import './OurCoffee.css';

import AboutOurBeans from '../AboutOurBeans/AboutOurBeans';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';
import Filters from '../Filters/Filters';
import OurCoffeeCardList from '../OurCoffeeCardList/OurCoffeeCardList';
import Footer from '../Footer/Footer';

function OurCoffee() {
	return (
		<div className="our-coffee">

			<OurCoffeePageWrapper />
			<AboutOurBeans />

			<hr className="our-coffee__hr" />

			<Filters />
			<OurCoffeeCardList />

			<Footer />
		</div>
	);
};

export default OurCoffee;