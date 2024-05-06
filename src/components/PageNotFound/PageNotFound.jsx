import './PageNotFound.css';
import { useNavigate } from "react-router-dom";

import BeansImg from '../BeansImg/BeansImg';

function PageNotFound() {

	const navigate = useNavigate();

	return (
		<main className="page-not-found">
			<section className="page-not-found__container">
				<h1 className="page-not-found__title">404</h1>
				<BeansImg />
				<p className="page-not-found__subtitle">Coffee not found</p>
			</section>
			<button
				className="page-not-found__back-button button"
				onClick={() => navigate(-1)}
				type="button">
				Back
			</button>
		</main>
	);
};

export default PageNotFound;