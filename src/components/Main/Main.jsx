import './Main.css';
import MainPageWrapper from '../MainPageWrapper/MainPageWrapper';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';

function Main() {
	return (
		<>
		<main className="main">
			<MainPageWrapper />
			<AboutUs />
			<OurBest />
		</main>
		<Footer />
		</>
	);
};

export default Main;