import { Link } from 'react-router-dom';
import './Card.css';

function Card({ ...props }) {
	return (
		<Link
			to="/card-page"
			className={`card link ${props.isBoxShadow ? "card__box-shadow" : ""}`}
		>

			<img
				className="card__image"
				src={props.cardPhoto}
				alt="Фотография товара"
			/>
			
			<h3 className="card__title">{props.cardTitle}</h3>
			<div className="card__price-wrapper">
				{props.country && <p className="card__country">{props.country}</p>}
				<p className="card__price">{props.price}$</p>
			</div>

		</Link>
	);
};

export default Card;