/*
* Craeted by Cyferouss on 03-27-2017
*/
import React from 'react';
import style from './style.css';

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
import utils from '../Utils';

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"


export default class HistreePage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      nodes:null,
      massage:'',
      images: [],
      list:null,
    }
  }

  componentDidMount() {
    console.log("[Product]: DID MOUNT")
    window.scrollTo(0, 0)
  }

  successor(name){
    var successor = [];
    for (i = 0; i < this.state.list.length; i++) {
      if(this.state.list[i].parent === name){
        var removed = this.state.list.splice(i,1);
        successor.push(removed);
      }
    }
    return successor;
  }

  bfs(root){
    var fifo = [root];
    while(fifo.length < 1){
      var current = fifo.splice(0,1);
      if(current.name === this.state.product){
        this.state.image.push(current.imageURL);
        return;
      }else{
        fifo.push(this.successor(current));

        this.state.image.push(current.imageURL);
      }
    }
  }

  render() {
    let title = 'Gumi Megpoid'
    let author = 'Cyferouss And Yanbo'
    let description = lorem
    let callback = (data) =>{
      this.setState({massage: data.massage});
      if(data.error == true){
        return;
      }
      else if(data.isroot){
        this.setState({images: [data.root.imageURL]});
      }
      else{
        this.setState({list: data.nodes});
        this.bfs(data.root);
        this.state.images.push(data.root.imageURL);
      }
    }

    return (
      <Grid>
        <PageHeader> {title} </PageHeader>

        <Row>
          <Col md={12}>

            <ButtonGroup justified>
							<ButtonGroup justified>
								<DropdownButton bsStyle = 'success' title="View" id="bg-justified-dropdown">
									<MenuItem eventKey="1" onClick={() => this.setState({panel_view: 'tree'})} >Tree View</MenuItem>
									<MenuItem eventKey="2" onClick={() => this.setState({panel_view: 'list'})} >List View</MenuItem>
								</DropdownButton>
							</ButtonGroup>
							<ButtonGroup>
								<Button bsStyle = 'warning' onClick={() => browserHistory.push('/requests')}>Pending Requests</Button>
							</ButtonGroup>
							<ButtonGroup>
								<Button bsStyle = 'info'> History </Button>
							</ButtonGroup>
						</ButtonGroup>

            <Panel header="Tree View" id={style.Margined}>
              <div>
                <p>
                  Tree renders in here... panel should be a div, but theres a div component as well to use if you need it.
                </p>
              </div>
            </Panel>
          </Col>
        </Row>

        <hr/>

        <Row>
          <Col md={4}>
            <Panel header="Description" id={style.Margined}>
              <h2> {author} </h2>
              <hr/>
              <p> {description} </p>
            </Panel>
          </Col>

          <Col md={8}>
            <Panel header="Comments" id={style.Margined}>
              <p> Render comment components in here... </p>
            </Panel>
          </Col>
        </Row>
        {}
      </Grid>
    )
  }
}
