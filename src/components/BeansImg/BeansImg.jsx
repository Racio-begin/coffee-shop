import './BeansImg.css';

import coffeeBeans from '../../images/logo/Beans-logo.svg'

function BeansImg() {
	return (
		<img
			className="beans-img"
			src={coffeeBeans}
			alt="Изображение кофейных бобов" />
	);
};

export default BeansImg;
