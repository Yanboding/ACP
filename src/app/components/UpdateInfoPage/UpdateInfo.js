/**
 * Created by YuAng on 2017-03-22.
 */

import React from 'react'
import 'bootstrap/less/bootstrap.less';

import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';



import utils from '../Utils'

export default class UpdateInfo  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
            status: '',
            name:'',

        };
    }

    componentWillMount() {
        console.log("[Update]: MOUNTING")
    }

    _onFire(user) {
        console.log("[Update]: FIRE");
        utils.UpdateJSON(
            '/api/update',
            user,
            (json) => {
                console.log("[Register]: CALLBACK FROM BACK");
                console.log(json)
            }
        )
    }

    render(){

        var fire = () => this._onFire({
            username: this.refs.username.value,
            password: this.refs.password.value,
            status: this.refs.status.value,
            name: this.refs.name.value,

        });

        return(

            <Form horizontal>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                      username
                    </Col>
                    <Col sm={10}>
                        <input  ref="username" type="email" placeholder="Your username" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        password
                    </Col>
                    <Col sm={10}>
                        <input  ref="password" type="password" placeholder="Your password" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={10}>
                        <input  ref="name" type="text" placeholder="Your NickName" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <Col componentClass={ControlLabel} sm={2}>
                        Career Status
                    </Col>
                    <label>
                        <select  ref="status" onChange={this.handleChange}>
                            <option value="Student">Student</option>
                            <option value="Graphic Designer">Graphic Designer</option>
                            <option value="Fashion Designer">Fashion Designer</option>
                            <option value="Animator">Animator</option>
                            <option value="UI Designer">UI Designer</option>
                            <option value="General Artist">General Artist</option>
                        </select>
                    </label>

                </FormGroup>
                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <ButtonToolbar>
                            <Button type="submit" onClick={fire} bsStyle="success">Update</Button>

                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        );
    }

}
