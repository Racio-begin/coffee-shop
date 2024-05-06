import './AboutIt.css';

import cardImage from '../../images/pictures/Card_pic-4.png';
import BeansImg from '../BeansImg/BeansImg';
import CardPrice from '../CardPrice/CardPrice';

function AboutIt() {
	return (
		<section className="about-it">

			<img
				className="about-it__img"
				src={cardImage}
				alt="Фотография товара крупным планом"
			/>

			<div className="about-it__container">
				<h3 className="about-it__title">About it</h3>

				<div className="about-it__beans-img">
					<BeansImg />
				</div>

				<div className="about-it__options">
					<div className="about-it__country"><b>Country: </b>Brazil</div>
					<div className="about-it__description">
						<b>Description: </b>This full-bodied coffee has a&nbsp;richly intense toasted flavour.
						It&nbsp;has a&nbsp;long lasting aftertaste and releases notes of&nbsp;malt and dark chocolate.
						For all coffee makers.
						A&nbsp;rich blend of&nbsp;coffee from the Brazilian coast of&nbsp;Santos, finest Kaapi Royale of&nbsp;India and from the mountains of&nbsp;Central Africa.
						Imagine sitting by&nbsp;the Neapolitan seaside sipping this coffee under the Italian sunshine.
					</div>
					<CardPrice />
				</div>

			</div>
		</section>
	);
};

export default AboutIt;
