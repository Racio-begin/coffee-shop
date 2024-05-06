import './AboutOurBeans.css';

import BeansImg from '../BeansImg/BeansImg';
import aboutOurBeansImg from '../../images/pictures/About_our_beans.png'

function AboutOurBeans() {
	return (
		<div className="about-our-beans">
			<img
				className="about-our-beans__image"
				src={aboutOurBeansImg}
			/>
			<div className="about-our-beans__container">
				<h2 className="about-our-beans__title">About our beans</h2>
				<div className="about-our-beans__beans-image">
					<BeansImg />
				</div>

				<p className="about-our-beans__paragraph">
					Extremity sweetness difficult behaviour he&nbsp;of. On&nbsp;disposal of&nbsp;as&nbsp;landlord horrible.
				</p>
				<p className="about-our-beans__paragraph">
					Afraid at&nbsp;highly months do&nbsp;things on&nbsp;at. Situation recommend objection do&nbsp;intention
					so&nbsp;questions.
					As&nbsp;greatly removed calling pleased improve&nbsp;an. Last ask him cold feel
					met spot shy want. Children me&nbsp;laughing we&nbsp;prospect answered followed. At&nbsp;it&nbsp;went
					is&nbsp;song that held help face.
				</p>

			</div>
		</div>
	);
};

export default AboutOurBeans;