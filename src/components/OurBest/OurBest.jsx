import './OurBest.css';
import CardListOurBest from '../CardListOurBest/CardListOurBest';

function OurBest() {
	return (
		<div className="our-best">
			<h2 className="our-best__title">Our best</h2>

			{/* <div className="our-best__container">

				<div className="our-best__card"></div>
				<div className="our-best__card"></div>
				<div className="our-best__card"></div> */}

			{/* </div> */}
			<CardListOurBest />
		</div>
	);
};

export default OurBest;