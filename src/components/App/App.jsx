import './App.css';
import Main from '../Main/Main';
import OurCoffee from '../OurCoffee/OurCoffee';
import CardPage from '../CardPage/CardPage';
import Footer from '../Footer/Footer';
import PageNotFound from '../PageNotFound/PageNotFound';

import { Route, Routes } from 'react-router-dom';


function App() {
	return (
		<div className="app">

			<Routes>

				<Route
					path='/coffee-shop'
					element={<Main />}
				/>

				<Route
					path='/our-coffee'
					element={<OurCoffee />}
				/>

				<Route
					path='/card-page'
					element={<CardPage />}
				/>

				<Route
					path="*"
					element={<PageNotFound />}
				/>


			</Routes>

			<Footer />
		</div>
	);
};

export default App;
