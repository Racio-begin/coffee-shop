import './OurCoffee.css';

import AboutOurBeans from '../AboutOurBeans/AboutOurBeans';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';
import Filters from '../Filters/Filters';
import OurCoffeeCardList from '../OurCoffeeCardList/OurCoffeeCardList';
import Footer from '../Footer/Footer';

function OurCoffee() {
	return (
		<>
			<OurCoffeePageWrapper />

			<main className="our-coffee">
				<AboutOurBeans />

				<hr className="our-coffee__hr" />

				<Filters />
				<OurCoffeeCardList />
			</main>

			<Footer />
		</>
	);
};

export default OurCoffee;