/**
* Created by Cyferouss on 2017-03-22.
*/

import React from 'react'
import 'bootstrap/less/bootstrap.less';
import style from './style.css';

import Grid from 'react-bootstrap/lib/Grid';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {IndexLink, browserHistory} from 'react-router';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

import utils from '../Utils'
import dummyb2p1 from '../dummyb2p1.jpeg';


export default class SearchPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid>
        <Panel header="Example container from search results">
          <Panel header="Megpoid Gumi (Actual result object)">
            <Row>
              <Col md={3}>
                <Thumbnail src={dummyb2p1}/>
              </Col>
              <Col md={3}>
                <p> Yanboding </p>
              </Col>
              <Col md={6}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </Col>
            </Row>
          </Panel>
        </Panel>
      </Grid>
    )
  }
}
