import './BeansImg.css';

import coffeeBeans from '../../images/logo/Beans-logo.svg'

function BeansImg() {
	return (
		<img
			className="beans-img"
			src={coffeeBeans}
			alt="Изображение Кофейных бобов" />
	);
};

export default BeansImg;
