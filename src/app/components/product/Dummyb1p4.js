import React from 'react';
import style from './style.css';
import dummyImage from '../dummyb1p4.jpeg';
import gumi from '../megpoidgumi.png';
import 'bootstrap/less/bootstrap.less';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Carousel from 'react-bootstrap/lib/Carousel';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import {browserHistory} from 'react-router'

export default class Dummyb1p4 extends React.Component {

	constructor(props) {
		super(props)
		console.log(props.params.id)
		console.log(props.params.name)
	}

	render() {
		return (
			<Grid>
				<Row>
					<div>
						<PageHeader> Hands</PageHeader>
						<Image src={dummyImage} id={style.Constrained} rounded></Image>
					</div>
				</Row>

				<Col md={8}>
					<Panel header="Author" id={style.Margined}>
						<h2> Cyferouss </h2>
					</Panel>
					<Panel header="Description" id={style.Margined}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
					</Panel>
					<Panel header="Placeholder" id={style.Margined}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
						</p>
					</Panel>
				</Col>
				<Col md={4}>
					<div id={style.Margined}>
						<center>
							<ButtonGroup vertical block id={style.VerticalCentering}>
								<Button bsStyle='info' bsSize='large' onClick={() => browserHistory.push('/project')}>View Project</Button>
								<Button bsStyle='info' bsSize='large'>Placeholder</Button>
								<Button bsStyle='info' bsSize='large'>Placeholder</Button>
								<Button bsStyle='info' bsSize='large'>Placeholder</Button>
							</ButtonGroup>
						</center>
					</div>
				</Col>
			</Grid>
		)
	}
}
