import './Main.css';
import MainPageWrapper from '../MainPageWrapper/MainPageWrapper';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';

function Main() {
	return (
		<>
				<MainPageWrapper />

			<main className="main">
				<AboutUs />
				<OurBest />
			</main>

			<Footer />
		</>
	);
};

export default Main;