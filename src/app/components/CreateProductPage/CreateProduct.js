/**
 * Created by YuAng on 2017-03-21.
 */



import React from 'react'
import 'bootstrap/less/bootstrap.less';
import Dropzone from 'react-dropzone';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import {IndexLink, browserHistory} from 'react-router';
const request = require('superagent');

import utils from '../Utils'

export default class RegisterPage  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            parent:'',
            date: '',
            file:'',
            path:'',
            fileName:'',
            artist:'',
            description:'',
            options:null

        };
    }

    componentWillMount() {
        console.log("[CREATE PRODUCT]: MOUNTING")
    }
    uploadFile(file) {
        this.setState({
            file: file
        });
        var req = request.post('/api/test_upload');
        this.setState({
            fileName: file[0].name
        });
        console.log(file[0].name);
        console.log(file[0]);
        req.field('file', file[0]);
        req.end();

    }


    _onFire(user) {
        console.log("[CREATE PRODUCT]: FIRE");
        utils.sendJSON(
            '/api/product',
            user,
            (data) => {
                console.log(data);
            }
        )
    }

    render() {
      //var id = window.sessionStorage.getItem('uID');
      var id = window.sessionStorage.getItem('uID');
      var callback = (data) =>{

        var option = [];
        option.push(<option value='root'>Create your own project</option>)
        data.nodes.map(function(row){
          option.push(<option value= {row.pID}>{row.name}---{row.artist}</option>)
        });
          this.setState({
              options: option
          });

      }

      if (!window.sessionStorage.getItem('username')) {
            // alert("you are not log in yet");
            // msg = 'you are not loggin yet';
            utils.sleeping(100);
            browserHistory.push('/login');
      }

      if(this.state.options == null){
        utils.fetchJSON(
            '/api/contribution_check/'+id,
            callback
        );
      }

        var fire = () => this._onFire({
            name: this.refs.name.value,
            parent:this.refs.parent.value,
            path: 'https://s3.amazonaws.com/ACPimages/'+ this.state.fileName,
            artist: window.sessionStorage.getItem('username'),
            // nickname: this.refs.artist.value,
            description: this.refs.description.value

        });

        var redirect = () =>{
          if(this.refs.parent.value != 'root'){
            var path = '/product?pID='+this.refs.parent.value;
            browserHistory.push(path);
          }
        }

        return (

            <Form horizontal>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Name
                    </Col>
                    <Col sm={10}>
                        <input ref="name" type="text" placeholder="Name of your product"/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Choose where you download
                    </Col>
                    <Col sm={10}>
                      <select ref="parent">
                          {this.state.options}
                      </select>

                          <Button onClick={redirect} bsStyle="info">Check me if you forget</Button>

                    </Col>
                    <Col sm={10}>

                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                    </Col>
                    <Col sm={10}>

                        <input ref="description"  placeholder="Description" />

                    </Col>
                </FormGroup>
                <FormGroup controlId="formControlsFile">
                    <Col componentClass={ControlLabel} sm={2}>
                        File
                    </Col>
                    <Col sm={10}>
                    <Dropzone onDrop={this.uploadFile.bind(this)}></Dropzone>
                        <HelpBlock>The picture of your format must be in .png format</HelpBlock>
                    </Col>

                    {this.state.file.length > 0 ? <div>
                        <h2>Uploading {this.state.file.length} files...</h2>
                        <div>{this.state.file.map((file) => <img src={file.preview} /> )}</div>
                    </div> : null}
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={10}>
                        <ButtonToolbar>
                            <Button type="submit" onClick={fire} bsStyle="success">Create</Button>

                        </ButtonToolbar>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}
