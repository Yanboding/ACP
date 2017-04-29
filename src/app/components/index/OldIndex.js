import React from 'react';
import style from './style.css';
import dummyImage from '../megpoidgumi.png';
import 'bootstrap/less/bootstrap.less';

export default class Index extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div className={style.Title}>
					<center>ART COLLABORATION PLATFORM</center>
				</div>
				<Jumbotron>
					<img src={dummyImage} alt={'This is just an dummy image.'} />
					<p id={style.SlideShowDescription}>
						Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				<Jumbotron>
				<div id={style.SlideShowController}>
					{'\< ○●○○○ \>'}
				</div>
				<div id={style.Content}>
					<section>
						<h1>
							Prompted
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</section>
					<section>
						<h1>
							Featured
						</h1>
						<p>
							Artists are respected and their work will be nominated to be displayed on the homepage.
						</p>
						<h3>
							Catagory 1
						</h3>
						<p>
							Nulla nunc, ipsum hendrerit massa mollis porta felis consectetuer, sed nunc egestas elementum hymenaeos. Condimentum ac suspendisse, quisque blandit luctus ligula duis risus lacus. Neque ante et cras amet, enim aliquam nunc tristique turpis, ornare magnis. Neque vulputate, nibh sollicitudin aenean aliquam, primis nunc ornare odio lectus, vestibulum erat, vitae ante platea est morbi. Ipsum sit voluptatem. Velit fermentum congue vestibulum. A turpis. Faucibus non neque accumsan in et nisl, odio ipsum, elit laoreet vel cras mi sollicitudin volutpat, arcu posuere ligula. Aut libero ante adipiscing consectetuer vivamus.
						</p>
						<h3>
							Catagory 2
						</h3>
						<p>
							Amet orci vel hymenaeos pellentesque necessitatibus, morbi enim purus, atque duis, tincidunt unde lacus, sem metus fusce elit lobortis ipsum. Augue adipiscing est commodo volutpat et, vitae ullamcorper donec mauris mi pulvinar. Congue aliquam, in tortor et erat justo, interdum per, fringilla pharetra. Volutpat aenean consequat lacus dolor sit faucibus, lacus interdum lectus nunc, justo tortor accusantium orci, ac phasellus elit lorem pulvinar. Aliquam odio duis mauris et lacus metus, fusce ipsum, consectetuer leo a, est luctus dolor suspendisse, etiam diam veniam malesuada. Sapien urna in magna metus faucibus, dolor euismod metus vestibulum, iaculis nulla faucibus aliquet pharetra ullamcorper at, at mauris. Nec non placerat ut massa, tristique condimentum ac massa faucibus sit imperdiet. Libero wisi amet dui dui ultrices euismod. Aliquam pellentesque lectus odio sagittis platea, integer tortor. Nec id lacus phasellus litora. Lectus viverra id varius odio, fringilla erat tortor. Praesent duis amet tristique minim suscipit minim, cum lectus proin eros faucibus mauris quis, lobortis cras risus nunc enim purus viverra, diam arcu a, montes suscipit quis ipsum ipsum.
						</p>
						<h3>
							Catagory n
						</h3>
						<p>
							Ac dolor suspendisse id lacus eu ullamcorper, vulputate ut quam interdum, sem mattis pulvinar sit vivamus ac, mi sit tellus gravida non, habitasse sit sit numquam. In magna arcu aliquet amet eleifend velit, a magna, duis quam risus fermentum non massa donec, non vel quisque nunc in, facilis porttitor non a ipsum auctor mauris. Nulla voluptate mi tortor quis, mauris sit ligula. Enim aut, proin tempus, auctor ut ipsum, rhoncus urna interdum non, massa lorem at eros cursus arcu sed. Semper ut neque felis ornare ligula luctus, libero quis risus ante, duis pede turpis leo mus ac, fermentum pharetra sit ultrices praesent sit.
						</p>
					</section>
				</div>
			</div>
		)
	}
}
