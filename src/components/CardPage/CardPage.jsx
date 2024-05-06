import './CardPage.css';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';
import AboutIt from '../AboutIt/AboutIt';
import Footer from '../Footer/Footer';

function CardPage() {
	return (
		<>
			<main className="card-page">
				<OurCoffeePageWrapper />
				<AboutIt />
			</main>
			<Footer />
		</>
	);
};

export default CardPage;