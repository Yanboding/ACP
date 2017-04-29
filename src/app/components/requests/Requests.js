import React from 'react';
import style from './style.css';
import dummyImage from '../megpoidgumi.png';
import 'bootstrap/less/bootstrap.less';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Grid from 'react-bootstrap/lib/Grid';
import Button from 'react-bootstrap/lib/Button';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Carousel from 'react-bootstrap/lib/Carousel';
import Image from 'react-bootstrap/lib/Image';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import {browserHistory} from 'react-router';

import dummyb2p1 from '../dummyb2p1.jpeg';

export default class Project extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		window.scrollTo(0, 0)
		return (
			<div>
				<Grid>
					<PageHeader>Project Name</PageHeader>
					<Col md={4}>
						<Panel header="Info">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
							</p>
						</Panel>
						<Panel header="Collaborators">
							<p> Cyferouss </p>
							<p> Yanboding </p>
							<p> MXKLZL </p>
						</Panel>
						<Panel header="Statstics">
							<p> Visitors : 135 </p>
							<p> Commits: 4 </p>
							<p> Branches: 2 </p>
							<p> Etc... </p>
						</Panel>
					</Col>

					<Col md={8}>


              <Panel header="Pending Push Requests">

                <Panel header="Branch02-2017-02-27">
                  <Row>
                    <Col md={3}>
                      <Thumbnail src={dummyb2p1}/>
                    </Col>
                    <Col md={2}>
                      <p> Yanboding </p>
                    </Col>
                    <Col md={4}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      </p>
                    </Col>
                    <Col md={3}>
                      <center>
                        <Button bsStyle = 'success' bsSize = 'large' onClick={() => browserHistory.push('/project/dummy_new')}>Push</Button>
                      </center>
                    </Col>
                  </Row>
                </Panel>

              </Panel>
					</Col>
				</Grid>
			</div>
		)
	}
}
