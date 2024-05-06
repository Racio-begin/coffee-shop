import './OurCoffeeCardList.css';
import Card from '../Card/Card';
import photo from '../../images/pictures/Card_pic-3.png';

function OurCoffeeCardList() {
	return (
		<section className="our-coffee-card-list">
			<Card
				className="card__box-shadow"
				cardPhoto={photo}
				cardTitle="AROMISTICO Coffee 1 kg"
				country="Brazil"
				price="6.99"
				isBoxShadow={true}
			/>
			<Card
				className="card__box-shadow"
				cardPhoto={photo}
				cardTitle="AROMISTICO Coffee 1 kg"
				country="Brazil"
				price="6.99"
				isBoxShadow={true}
			/>
			<Card
				className="card__box-shadow"
				cardPhoto={photo}
				cardTitle="AROMISTICO Coffee 1 kg"
				country="Brazil"
				price="6.99"
				isBoxShadow={true}
			/>
			<Card
				className="card__box-shadow"
				cardPhoto={photo}
				cardTitle="AROMISTICO Coffee 1 kg"
				country="Brazil"
				price="6.99"
				isBoxShadow={true}
			/>
			<Card
				className="card__box-shadow"
				cardPhoto={photo}
				cardTitle="AROMISTICO Coffee 1 kg"
				country="Brazil"
				price="6.99"
				isBoxShadow={true}
			/>
			<Card
				className="card__box-shadow"
				cardPhoto={photo}
				cardTitle="AROMISTICO Coffee 1 kg"
				country="Brazil"
				price="6.99"
				isBoxShadow={true}
			/>
		</section>
	);
};

export default OurCoffeeCardList;