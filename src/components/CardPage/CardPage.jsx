import './CardPage.css';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';
import AboutIt from '../AboutIt/AboutIt';
import Footer from '../Footer/Footer';

function CardPage() {
	return (
		<div className="card-page">
			<OurCoffeePageWrapper></OurCoffeePageWrapper>
			<AboutIt></AboutIt>
			<Footer />
		</div>
	);
};

export default CardPage;