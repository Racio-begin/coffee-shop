import './AboutUs.css';

import BeansImg from '../BeansImg/BeansImg';
// import logo from '../../images/logo/Beans-logo.svg'

function AboutUs() {
	return (
		<div className="about-us">
			<h2 className="about-us__title">About Us</h2>
			{/* <img
				className="about-us__beans-img"
				src={logo}
				alt="Кофейные бобы" /> */}
			<div className="about-us__beans-img">
				<BeansImg />
			</div>
			
			<div className="about-us__container">
				<p className="about-us__paragraph">
					Extremity sweetness difficult behaviour he&nbsp;of. On&nbsp;disposal of&nbsp;as&nbsp;landlord horrible.
					Afraid at&nbsp;highly months do&nbsp;things on&nbsp;at. Situation recommend objection do&nbsp;intention
					so&nbsp;questions. As&nbsp;greatly removed calling pleased improve&nbsp;an. Last ask him cold feel
					met spot shy want. Children me&nbsp;laughing we&nbsp;prospect answered followed. At&nbsp;it&nbsp;went
					is&nbsp;song that held help face.
				</p>
				<p className="about-us__paragraph">
					Now residence dashwoods she excellent you. Shade being under his bed her, Much
					read on&nbsp;as&nbsp;draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
					horrible but confined day end marriage. Eagerness furniture set preserved far
					recommend. Did even but nor are most gave hope. Secure active living depend son
					repair day ladies now.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;