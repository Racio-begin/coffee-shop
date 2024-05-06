import './OurBest.css';
import OurBestCardList from '../OurBestCardList/OurBestCardList';

function OurBest() {
	return (
		<div className="our-best">
			<h2 className="our-best__title">Our best</h2>

			<OurBestCardList />
		</div>
	);
};

export default OurBest;