import './OurBestCardList.css';
import Card from '../Card/Card';
import photo from '../../images/pictures/Card_pic-1.png';

function OurBestCardList() {
	return (
		<section className="our-best-card-list">
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

export default OurBestCardList;