import React from 'react';
import style from './style.css';
import 'bootstrap/less/bootstrap.less';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Carousel from 'react-bootstrap/lib/Carousel';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import {browserHistory} from 'react-router'
import utils from '../Utils'

import megpoidgumi from '../megpoidgumi.png';
import dummyb1p1 from '../dummyb1p1.jpeg';
import dummyb1p2 from '../dummyb1p2.jpeg';
import dummyb1p3 from '../dummyb1p3.jpeg';
import dummyb1p4 from '../dummyb1p4.jpeg';
import dummyb2p1 from '../dummyb2p1.jpeg';
import dummy_graph_old from '../dummy_graph_old.jpg';
import dummy_graph_new from '../dummy_graph_new.jpg';

export default class Index extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			p1name: '',
			p2name: '',
			p3name: '',
			p1src: '',
			p2src: '',
			p3src: '',
			p1desc: '',
			p2desc: '',
			p3desc: '',
		};

		console.log('loading products');

		this._fetchRecentProducts = this._fetchRecentProducts.bind(this);
		utils.fetchJSON('api/getRecentProducts', this._fetchRecentProducts)
	}

	componentDidMount() {
		console.log("[Index]: DID MOUNT")
		window.scrollTo(0, 0)
	}

	_fetchRecentProducts(products) {
		console.log(products);
		if(products.err) {
			this.setState({
				err: true
			})
		}
		else {
			this.setState({
				p1name: products[0].name,
				p1src: products[0].imageURL,
				p1desc: products[0].description,
				p2name: products[1].name,
				p2src: products[1].imageURL,
				p2desc: products[1].description,
				p3name: products[2].name,
				p3src: products[2].imageURL,
				p3desc: products[2].description
			})
		}
	}

	render() {

		/**
		 * NOTE: We must fix the image display inside Carousel, maybe
		 * use ResponsiveEmbed.
		 *
		 * Or we constraint the image inside Carousel to be all 1336x768
		 * and we don't need to handle this stuff... it is valid since
		 * a slideshow should look nice.
		 *
		 * Upon automation, all imgsrc, number of slides (this can be generated)
		 * using loop, featured stuff should be returned and fetched from the
		 * backend.
		 */

		return (
			<div>
				<Jumbotron>
					<Grid>
						<Row>
							<Col md={12}>
								<h1>Art Collaboration Platform</h1>
							</Col>
						</Row>

						<Row>
							<Col md={4}>
								<h2>About ACP</h2>
								<p>Art Collaboration Platform is a collaboration platform for artists to track changes in a product and coordinate work on these projects among mutiple artists.</p>
								<p><Button onClick={() => browserHistory.push('/login')}>Learn More »</Button></p>
							</Col>
							<Col md={8}>
								<Carousel>
									<Carousel.Item>
										<Image id={style.SlideShowImage} alt="900x500" src={this.state.p1src} responsive/>
										<Carousel.Caption>
											<h3>{this.state.p1name}</h3>
											<p>{this.state.p1desc}</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<Image id={style.SlideShowImage} alt="900x500" src={this.state.p2src} responsive/>
										<Carousel.Caption>
											<h3>{this.state.p2name}</h3>
											<p>{this.state.p2desc}</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<Image id={style.SlideShowImage} alt="900x500" src={this.state.p3src} responsive/>
										<Carousel.Caption>
											<h3>{this.state.p3name}</h3>
											<p>{this.state.p3desc}</p>
										</Carousel.Caption>
									</Carousel.Item>
								</Carousel>
							</Col>
						</Row>
					</Grid>
				</Jumbotron>
				<Grid>
					<Row>
						<Col md={4}>
							<h3>Track Changes in a Project</h3>
							<p>
								Every time a user uploads a product for an existing project, the new uploaded product will be shown in a tree view.
							</p>
						</Col>
						<Col md={4}>
							<h3>Tree View</h3>
							<p>
								A tree view is a graph that contains all the products uploaded for this project. The first uploaded product is the root of the tree in this graph and the branches are the products developed from the first product.
							</p>
						</Col>
						<Col md={4}>
							<h3>Relationships Between Products in a Tree View</h3>
							<p>
								In a tree view, if there is a product B developed from product A, product B will be placed in the next level of product A in the graph.
							</p>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
