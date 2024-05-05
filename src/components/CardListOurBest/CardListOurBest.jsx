import './CardListOurBest.css';
import Card from '../Card/Card';
import photo from '../../images/pictures/Card_pic-1.png';

function CardListOurBest() {
	return (
		<section className="card-list-our-best">
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				// country="BRAZIL"
				price="6.99"
			/>
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				// country="BRAZIL"
				price="6.99"
			/>
			<Card
				cardPhoto={photo}
				cardTitle="Solimo Coffee Beans 2 kg"
				// country="BRAZIL"
				price="6.99"
			/>
		</section>
	);
};

export default CardListOurBest;