import './Main.css';
import HeaderWrapper from '../HeaderWrapper/HeaderWrapper';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';

function Main() {
	return (
		<div className="main">
			<HeaderWrapper />
			<AboutUs></AboutUs>
			<OurBest></OurBest>
		</div>
	);
};

export default Main;