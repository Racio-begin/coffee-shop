import './OurBestCardList.css';
import Card from '../Card/Card';
import photo1 from '../../images/pictures/Card_pic-1.png';
import photo2 from '../../images/pictures/Card_pic-2.png';
import photo3 from '../../images/pictures/Card_pic-3.png';

function OurBestCardList() {
	return (
		<section className="our-best-card-list">
			<Card
				cardPhoto={photo1}
				cardTitle="Solimo Coffee Beans 2 kg"
				price="10.73"
			/>
			<Card
				cardPhoto={photo2}
				cardTitle="Presto Coffee Beans 1 kg"
				price="15.99"
			/>
			<Card
				cardPhoto={photo3}
				cardTitle="AROMISTICO Coffee 1 kg"
				price="6.99"
			/>
		</section>
	);
};

export default OurBestCardList;