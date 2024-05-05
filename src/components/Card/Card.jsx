import './Card.css';

function Card({ ...props }) {
	return (
		<div className="card">
			<img
				className="card__image"
				src={props.cardPhoto}
				alt="Фотография товара"
			/>
			<h3 className="card__title">{props.cardTitle}</h3>

			{props.country && <p className="card__country">{props.country}</p>}

			<div className="card__price-wrapper">
				<p className="card__price">{props.price}$</p>
			</div>
		</div>
	);
};

export default Card;