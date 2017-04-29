/**
 * Created by Cyferouss on 2017-03-23.
 */

 import React from 'react'
 import 'bootstrap/less/bootstrap.less';
 import style from './style.css';
import Good from  'react-icons/lib/fa/thumbs-o-up';
import Bad from  'react-icons/lib/fa/thumbs-o-down';
 import Grid from 'react-bootstrap/lib/Grid';
 import PageHeader from 'react-bootstrap/lib/PageHeader';
 import Panel from 'react-bootstrap/lib/Panel';
 import Col from 'react-bootstrap/lib/Col';
 import Row from 'react-bootstrap/lib/Row';
 import Button from 'react-bootstrap/lib/Button';
 import ControlLabel from 'react-bootstrap/lib/ControlLabel';
 import {IndexLink, browserHistory} from 'react-router'


 import utils from '../Utils'

 const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"

 export default class CommentsPage extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
           list_comments:[],
           name: props.params.name,
           id:props.params.pID
       };
       if (!props.params.pID) {  /* Assign default image megpoid gumi */

       } else {
           /* Bind this as the call back function for image requesting... */
           this.Callback = this.Callback.bind(this);

           utils.fetchJSON(
               '/api/comment/'+props.params.pID,
               (json) => {
                   this.Callback(json)
               }
           )
       }

   }

     componentDidMount() {
         console.log("[Product]: DID MOUNT")
         window.scrollTo(0, 0)
     }


     Callback(results) {
         let resultPool = [];
         let clock = 0;
         if (!results || results.length == 0) {
             console.log("[SearchPage] No result!");
             resultPool.push(
                 <ControlLabel> No comments for this project </ControlLabel>
             )
         } else {
             console.log(results);
             results.map( (item) => {
                     console.log(item);
                     resultPool.push(
                         <Panel header={item.username} id={style.Margined}>
                             <p>
                                  {item.content}
                             </p>
                             <p>
                                 {(item.type =='positive')?<Good size={30}/>:<Bad size={30}/>}
                             </p>
                             <p>
                                 Commented at {new Date(item.commentIssued).toISOString().replace(/T/, ' ').replace(/\..+/, '')}
                             </p>


                         </Panel>
                     )
             })
             this.setState({
                 list_comments: resultPool
             })

         }


     }


     render() {

    let name = this.state.name;
     let title = this.state.name

         let header = 'Displaying All Comments for ' +name;

     return (
       <Grid>
          <PageHeader> {title} </PageHeader>
          <Row>
            <Col md={4}>

            </Col>
            <Col md={8}>
              <Panel header= {header} id={style.Margined}>

                  {this.state.list_comments}

              </Panel>
            </Col>
          </Row>

          <Col>
            <Col md={4}>
              <Button bsStyle='info' bsSize='large' onClick={(fire) => browserHistory.push('/product?pID='+this.state.id)}>
                Back to Product
              </Button>
            </Col>
          </Col>

          <Col>
            <Col sm={4}>
              <Button bsStyle='info' bsSize='large' onClick={(fire) => browserHistory.push('/create_comment/'+this.state.id+'/'+this.state.name)}>
                Create Comment
              </Button>
            </Col>
          </Col>
       </Grid>
     )
   }
 }
