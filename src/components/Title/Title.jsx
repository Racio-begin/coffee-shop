import './Title.css';

import MoreButton from '../MoreButton/MoreButton';

// import BeansLogo from '../../images/logo/Beans-logo.svg';
import BeansImg from '../BeansImg/BeansImg';

function Title() {
	return (
		<div className="title">
			<h1 className="title__main-heading">Everything You Love About Coffee</h1>

			<div className="title__beans-img">
				<BeansImg />
			</div>

			<ul className="title__list ul">
				<li className="title__list-element">We makes every day full of energy and taste</li>
				<li className="title__list-element">Want to try our beans?</li>
			</ul>

			<MoreButton
				buttonText={"More"}
			/>
		</div>
	);
};

export default Title;