import React from 'react'
import style from './style.css'

import 'bootstrap/less/bootstrap.less'

import {
    Grid,
    PageHeader,
    Panel,

    Col,
    Row,
    Button,
    ControlLabel,
    Image,
    Media,
    Well} from 'react-bootstrap';
import {browserHistory} from 'react-router'
import megpoidgumi from '../megpoidgumi.png'
import utils from '../Utils'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uID: '',
      username:'',
      status: '',
      error:'',
      project_list:[],
      contribution_list:[],
      ready:'',
    };
    console.log('inside');

      /* Bind this as the call back function for image requesting... */
      this._handleProfile = this._handleProfile.bind(this);
      utils.fetchJSON(
          '/api/profile?username='+props.location.query.username,
          this._handleProfile
      )
    }


  componentDidMount() {
    console.log("[Profile] DID MOUNT");
    window.scrollTo(0, 0)
  }
  _handleProfile(user) {
    console.log(user);
    if (user.err) {
      this.setState({
        err: true
      })
    } else {
      this.setState({
        uID:user[0].id,
        username:user[0].name,
        status: user[0].status,
        project_list:[],
        contribution_list:[],
        ready:true

      })
    }
  }
  display_projects(results,condition){
    console.log(results);
    let resultPool = [];

    var clock = 0;
    if (results.length == 0) {


      if (condition == 'projects') {
        resultPool.push(
            <ControlLabel> You've never started a project.. Time to start!!! </ControlLabel>
        );
        this.setState({
          project_list: resultPool
        });

      } else {
        resultPool.push(
            <ControlLabel> No Contributions yet... </ControlLabel>
        );
        this.setState({
          contribution_list: resultPool
        })

      }
    } else {
      results.map((element) => {
        clock++;
        let currElementUrl = '/product?pID=' + element.pID;
        console.log(currElementUrl);

        if (clock % 2) {
          resultPool.push(
              <Well id={style.EvenResults} key={clock}>
                <Media>
                  <Media.Left>
                    <Image width={128} height={72} src={element.imageURL} alt="Result"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>{element.name}</Media.Heading>
                    <p>{element.description}</p>
                  </Media.Body>
                  <Media.Right>
                    <Button onClick={() => browserHistory.push(currElementUrl)}>View</Button>
                    <br />
                    <br />
                    <i>id.<u>{element.pID}</u></i>
                  </Media.Right>
                </Media>
              </Well>
          )
        }

        else {
          resultPool.push(
              <Well id={style.OddResults} key={clock}>
                <Media>
                  <Media.Left>
                    <Image width={128} height={72} src={element.imageURL} alt="Result"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>{element.name}</Media.Heading>
                    <p>{element.description}</p>
                  </Media.Body>
                  <Media.Right>
                    <Button onClick={() => browserHistory.push(currElementUrl)}>View</Button>
                    <br />
                    <br />
                    <i>id.<u>{element.pID}</u></i>
                  </Media.Right>
                </Media>
              </Well>
          )
        }
      });
      if (condition == 'projects') {
        this.setState({
          project_list: resultPool
        });

      } else {
        this.setState({
          contribution_list: resultPool
        })

      }

    }
  }


  render() {
    console.log('render');
    let username_session = window.sessionStorage.getItem('username');
    var project_display = () => {
      console.log('display');

      this.setState({
        searchResults: []
      });
      utils.fetchJSON(
          '/api/getProjects/'+ username_session,
          (json) => {
            this.display_projects(json,'projects')
          }
      )
    };
    var contribution_display = () => {
      console.log('display');

      this.setState({
        searchResults: []
      });
      utils.fetchJSON(
          '/api/getContributedProducts/' + username_session,
          (json) => {
            this.display_projects(json,'contribution')
          }
      )
    };
    var username = this.state.username;
    var status = this.state.status;
    var contribution = this.state.contribution_list;
    var projects = this.state.project_list;
    console.log(username);
    console.log(status);
    var template = (

        <div>
          <Grid>
            <Row>
              <PageHeader> User Profile </PageHeader>
            </Row>
            <Col md={3} id={style.Margined}>
              <Row>
                <div id={style.Constrained}>
                  <Image src={megpoidgumi} rounded responsive/>
                </div>
              </Row>
              <hr/>
              <Row>
                <Panel header="Biography">
                  <h4><b>Username: </b>{ username} </h4>
                  <h4><b>Status: </b> {status }</h4>
                </Panel>
                <Button bsStyle="warning"> Edit </Button>
              </Row>
            </Col>

            <Col md={8}>
              <Panel header="Projects">
                <Button onClick={project_display}> Display </Button>

                {projects}
              </Panel>
              <hr/>
              <Panel header="Contributions">
                <Button onClick={contribution_display}> Display </Button>
                {contribution}

              </Panel>

            </Col>
          </Grid>
        </div>
    );


    let actualLayout = <div>loading...</div>;

    if (this.state.err) {
      actualLayout = <div>error</div>
    } else if (this.state.ready) {
      actualLayout = template
    }

    return actualLayout
  }
}
