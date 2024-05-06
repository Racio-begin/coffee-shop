import './CardPage.css';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';
import AboutIt from '../AboutIt/AboutIt';
import Footer from '../Footer/Footer';

function CardPage() {
	return (
		<>
				<OurCoffeePageWrapper />
			<main className="card-page">
				<AboutIt />
			</main>
			<Footer />
		</>
	);
};

export default CardPage;