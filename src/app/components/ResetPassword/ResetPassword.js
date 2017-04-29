/**
 * Created by YuAng on 2017-03-16.
 */
import React from 'react'
import 'bootstrap/less/bootstrap.less';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import utils from '../Utils'

export default class ResetPassword  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          question: '',
          answer: '',
          mas:'',
          hide: true,
          second: false
        };

    }

    render(){
      var varify = (data) => {
        if(data.correct == true){
          this.setState({hide: false});
        }
        this.setState({mas: data.msg});
      }
      var reset = (data) =>{
        if(data.correct == true){
          this.setState({second: true});
        }
        this.setState({mas: data.msg});
      }
      var fire = () => utils.sendJSON('/api/checkanswer',{
          username: this.refs.username.value,
          question: this.refs.question.value,
          answer: this.refs.answer.value
      },varify);

      var resetpass = () => utils.sendJSON('/api/resetpassword',{
          username: this.refs.username.value,
          password1: this.refs.newpassword.value,
          password2: this.refs.reenternewpassword.value
      },reset);

      let mas = this.state.mas;
      console.log(mas);


      return(
            <Form horizontal>
            <FormGroup controlId="checkMessage">
                    <Col xsOffset={2} sm={8}>
                        {mas}
                    </Col>
                </FormGroup>
            <div className={(this.state.hide)?'':'hidden'}>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Username
                    </Col>
                    <Col sm={10}>
                        <input  ref="username" type="email" placeholder="Username" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <Col componentClass={ControlLabel} sm={2}>
                        Secuirty Question
                    </Col>
                    <label>
                        <select ref="question">
                            <option value="What is your first pet's name">"What is your first pet's name?"</option>
                            <option value="When did you graguate from high school">When did you graguate from high school?</option>
                        </select>
                    </label>

                </FormGroup>

                <FormGroup controlId="formHorizontalAnswer">
                    <Col componentClass={ControlLabel} sm={2}>
                        Answer
                    </Col>
                    <Col sm={10}>
                        <input  ref="answer" type="text" placeholder="Your Answer" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button  onClick = {fire}>
                           Check me!
                        </Button>
                    </Col>
                </FormGroup>
                </div>
                <div className={(this.state.hide|this.state.second)?'hidden':''}>
                <FormGroup controlId="formHorizontalNewPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        New Password
                    </Col>
                    <Col sm={10}>
                        <input  ref="newpassword" type="password" placeholder="New Password" />
                    </Col>

                </FormGroup>

                <FormGroup controlId="formHorizontalReenterNewPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Re-enter Password
                    </Col>
                    <Col sm={10}>
                        <input  ref="reenternewpassword" type="password" placeholder="Re-enter Password" />
                    </Col>

                </FormGroup>


                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <Button onClick = {resetpass}>
                           Reset
                        </Button>
                    </Col>
                </FormGroup>
                </div>

            </Form>

        );
    }
}
