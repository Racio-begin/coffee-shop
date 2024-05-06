import './CardPage.css';
import OurCoffeePageWrapper from '../OurCoffeePageWrapper/OurCoffeePageWrapper';
import AboutIt from '../AboutIt/AboutIt';

function CardPage() {
	return (
		<div className="card-page">
			<OurCoffeePageWrapper></OurCoffeePageWrapper>
			<AboutIt></AboutIt>
		</div>
	);
};

export default CardPage;