import './OurCoffee.css';

import AboutOurBeans from '../AboutOurBeans/AboutOurBeans';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';

function OurCoffee() {
	return (
		<div className="our-coffee">

			<OurCoffeePageWrapper />
			<AboutOurBeans />

		</div>
	);
};

export default OurCoffee;