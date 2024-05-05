import './Main.css';
import MainPageWrapper from '../MainPageWrapper/MainPageWrapper';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';

function Main() {
	return (
		<div className="main">
			<MainPageWrapper />
			<AboutUs />
			<OurBest />
		</div>
	);
};

export default Main;