import './Main.css';
import MainPageWrapper from '../MainPageWrapper/MainPageWrapper';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';

function Main() {
	return (
		<main className="main">
			<MainPageWrapper />
			<AboutUs />
			<OurBest />
		</main>
	);
};

export default Main;