import './Title.css';

import MoreButton from '../MoreButton/MoreButton';

import BeansLogo from '../../images/logo/Beans-logo.svg';

function Title() {
	return (
		<div className="title">
			<h1 className="title__main-heading">Everything You Love About Coffee</h1>

			<img
				className="title__logo"
				src={BeansLogo}
				alt="Логотип кофейного магазина" />

			<ul className="title__list ul">
				<li className="title__list-element">We makes every day full of energy and taste</li>
				<li className="title__list-element">Want to try our beans?</li>
			</ul>


			<MoreButton
				buttonText={"More"} >
			</MoreButton>
		</div>
	);
};

export default Title;