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

import utils from '../Utils'

export default class SearchResultPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Grid>
        <Row>
          <PageHeader> Search Results </PageHeader>
          <h4><b> Displaying ___ results for ____. </b></h4>
          <Panel>
            <p> Display Results Here... </p>
          </Panel>
        </Row>
      </Grid>
    )
  }
}
