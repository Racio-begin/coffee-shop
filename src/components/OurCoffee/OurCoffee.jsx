import './OurCoffee.css';

import AboutOurBeans from '../AboutOurBeans/AboutOurBeans';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';
import Filters from '../Filters/Filters';
import OurCoffeeCardList from '../OurCoffeeCardList/OurCoffeeCardList';

function OurCoffee() {
	return (
		<div className="our-coffee">

			<OurCoffeePageWrapper />
			<AboutOurBeans />

			<hr className="our-coffee__hr" />

			<Filters />
			<OurCoffeeCardList />


		</div>
	);
};

export default OurCoffee;