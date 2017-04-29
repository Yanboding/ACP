/**
 * Created by YuAng on 2017-03-16.
 */
import React from 'react'
import 'bootstrap/less/bootstrap.less';
import {IndexLink, browserHistory} from 'react-router'
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/fa/facebook-official';

import {
    FormGroup,
    Form,
    Col,
    Row,
    Button,
    ControlLabel
} from 'react-bootstrap';

import utils from '../Utils'

export default class RegisterPage  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
            status: '',
            name:'',
            question: '',
            answer:'',
            mas:'',
            check:'',
        };
    }

    componentWillMount() {
        console.log("[Register]: MOUNTING")
    }

    render() {


        var verify = (data) => {
            console.log(data.message);

            this.setState({
                mas: data.message,
            });
        };

        var verify2 = (data) => {

            if (data.exist==true) {
                this.setState({
                    check: data.message
                });
            }
        }

        var fire = () => utils.sendJSON(
            '/api/register',{
            username: this.refs.username.value,
            password: this.refs.password.value,
            status: this.refs.status.value,
            name: this.refs.name.value,
            question: this.refs.question.value,
            answer: this.refs.answer.value
        }, verify);
        var FB_fire = function(response){
            utils.sendJSON(
                '/api/register',{
                    username: response.email,
                    password: response.id,
                    status: 'student',
                    name: response.name,
                    question: 'What is your facebook email',
                    answer: response.email
                }, verify);
        };
        var check = () => utils.sendJSON(
            '/api/checkUserName',{
            username: this.refs.username.value,
        }, verify2);

        let msg = 'Please click the button to check if the user name already existed';
        if (this.state.check) {
            msg = this.state.check;
        }

        let sucessMsg = '';
        if (this.state.mas) {
            sucessMsg = this.state.mas;
        }
        return(
            <Form horizontal>
                <FormGroup>
                    <Col xsOffset={4} componentClass={ControlLabel} sm={2}>
                        <FacebookLogin
                            appId="1734208480228199"
                            size="medium"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={FB_fire}
                            textButton="Facebook Register"
                            cssClass="my-facebook-button-class"
                            icon={<TiSocialFacebookCircular size={20}/>}
                            background-color="#3385FF"
                        />
                    </Col>

                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">
                    <Col xsOffset={2} componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={1}>
                        <input  ref="username" type="email" placeholder="Email" />
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Col xsOffset={2} smOffset={3} sm={3}>
                                <Button bsStyle="primary" onClick = {check} bsSize="xsmall">
                                    Verify Username
                                </Button>
                            </Col>
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup controlId="checkMessage">
                    <Col xsOffset={4} sm={8}>
                        {msg}
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col xsOffset={2} componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={8}>
                        <input  ref="password" type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col xsOffset={2} componentClass={ControlLabel} sm={2}>
                        Nickname
                    </Col>
                    <Col sm={8}>
                        <input  ref="name" type="text" placeholder="Your Nickname" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <Col xsOffset={2} componentClass={ControlLabel} sm={2}>
                        Career Status
                    </Col>
                    <Col sm={1}>
                        <select ref="status">
                            <option value="Student">Student</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Fashion Designer">Fashion Designer</option>
                            <option value="Animator">Animator</option>
                            <option value="UI Designer">UI Designer</option>
                            <option value="General Artist">General Artist</option>
                        </select>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <Col xsOffset={2} componentClass={ControlLabel} sm={2}>
                        Question
                    </Col>
                    <Col sm={1}>
                        <select ref="question" >
                            <option value="What is your first pet's name">What is your first pets name</option>
                            <option value="When did you graduate from high school">When did you graduate from high school</option>
                        </select>
                    </Col>

                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                    <Col xsOffset={2} componentClass={ControlLabel} sm={2}>
                        Answer
                    </Col>
                    <Col sm={8}>
                        <input  ref="answer" type="text" placeholder="Your Answer" />
                    </Col>
                </FormGroup>


                <FormGroup>
                    <Col xsOffset={3} smOffset={4} sm={8}>
                        <Button bsStyle="primary" onClick = {fire}>
                            Create Account
                        </Button>
                    </Col>
                </FormGroup>

                <FormGroup controlId="redirect">
                    <Col xsOffset={4} sm={8}>
                        {sucessMsg}
                    </Col>
                </FormGroup>

            </Form>

        )
    }
}
