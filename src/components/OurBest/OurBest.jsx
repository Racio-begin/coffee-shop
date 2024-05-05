import './OurBest.css';
import OurBestCardList from '../OurBestCardList/OurBestCardList';

function OurBest() {
	return (
		<div className="our-best">
			<h2 className="our-best__title">Our best</h2>

			{/* <div className="our-best__container">

				<div className="our-best__card"></div>
				<div className="our-best__card"></div>
				<div className="our-best__card"></div> */}

			{/* </div> */}
			<OurBestCardList />
		</div>
	);
};

export default OurBest;