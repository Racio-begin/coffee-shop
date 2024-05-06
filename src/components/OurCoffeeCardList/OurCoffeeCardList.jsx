import './OurCoffeeCardList.css';
import Card from '../Card/Card';
import photo from '../../images/pictures/Card_pic-1.png';

function OurCoffeeCardList() {
	return (
		<section className="our-best-card-list">
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				country="Brazil"
				price="6.99"
			/>
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				country="Brazil"
				price="6.99"
			/>
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				country="Brazil"
				price="6.99"
			/>
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				country="Brazil"
				price="6.99"
			/>
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				country="Brazil"
				price="6.99"
			/>
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				country="Brazils"
				price="6.99"
			/>
		</section>
	);
};

export default OurCoffeeCardList;