/**
 * Created by VickieO on 2017-03-23.
 */



import React from 'react'
import 'bootstrap/less/bootstrap.less';

import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {IndexLink, browserHistory} from 'react-router'

import ReactDOM from 'react-dom'

import utils from '../Utils'

export default class CreateComment extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.params);
        this.state = {
            content:'',
            type: 'positive',
            id: props.params.pID,
            name: props.params.name
        };
        console.log('getting');
        console.log(props.params.pID);
        console.log(props.params.name);
        this.handleChange = this.handleChange.bind(this);

    }

    componentWillMount() {
        console.log("[CREATE COMMENT]: MOUNTING");
        window.scrollTo(0, 0)

    }

    handleChange(event) {
        this.setState({type: event.target.type});
    }
    getSelectValue = () => {
        /* Here's the key solution */
        console.log(ReactDOM.findDOMNode(this.select).value);
    }

    render(){
        var name = this.state.name;
        var id = this.state.id;
        var create_comment = function(data){
            console.log(id);
            console.log(data);
          if(data.correct == true){
            browserHistory.push('/commentsPage/'+id+'/'+name);
          }
        }

        // check if the user have login, if not, redirect him to the login page
        if (window.sessionStorage.getItem('username') == null) {
            browserHistory.push('/login');
        }

        console.log(window.sessionStorage.getItem('uID'));
        var fire = () => utils.sendJSON('/api/add_comment/'+id+'/'+name,{
            uID : window.sessionStorage.getItem('uID'),
            type: this.select.value,
             content: this.content.value,
            pID: this.state.id

        },create_comment);

        return(

            <Form horizontal>

            <FormGroup controlId="contentInput">

                <Col xsOffset={2} componentClass={ControlLabel} sm={6} >
                    <ControlLabel >
                        Content
                    </ControlLabel>
                    <FormControl componentClass="textarea" style={{ height: 200 }} placeholder="content" inputRef={(ref) => {this.content = ref}} >
                    </FormControl>
                </Col>
             </FormGroup>

            <FormGroup controlId="formControlsSelect">
                <Col xsOffset={2} componentClass={ControlLabel} sm={6} >
                    <ControlLabel>Type of this comment</ControlLabel>
                        <FormControl componentClass="select" placeholder="Type of this comment" inputRef={(ref) => {this.select = ref}}>
                        <option value="positive">positive</option>
                        <option value="negative">negative</option>
                    </FormControl>
                </Col>
            </FormGroup>

                <FormGroup>
                    <Col smOffset={7} sm={10}>
                        <Button bsStyle="primary" bsSize="large" onClick={fire} >
                            submit
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
