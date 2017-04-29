import React from 'react'
import style from './style.css'
import {IndexLink, browserHistory} from 'react-router'
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Button from 'react-bootstrap/lib/Button';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import 'bootstrap/less/bootstrap.less';


export default class NavigationBar extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		let username = window.sessionStorage.getItem('username');
		let currElementUrl =  '/profile?username=' + username;
		console.log(currElementUrl);
		var logout = () => {
			console.log("logging out!");
			window.sessionStorage.clear();
            window.location.reload();

		};
		if (!window.sessionStorage.getItem('username')) {
			return(
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<IndexLink to="/">ACP</IndexLink>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} onClick={() => browserHistory.push('/')}>Home</NavItem>
							<NavDropdown eventKey="4" title="Features" id="nav-dropdown">
								<MenuItem eventKey="4.1">Art work</MenuItem>
								<MenuItem eventKey="4.2"> 3D models</MenuItem>
								<MenuItem eventKey="4.3">Fashion Designs</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey="4.4">Signature artworks</MenuItem>
							</NavDropdown>
							<NavItem eventKey={2} onClick={() => browserHistory.push('/searchpage')}> Search </NavItem>
							<NavItem eventKey={3} href="#">About</NavItem>
						</Nav>
						<Nav pullRight>
							<NavItem eventKey={1} onClick={() => browserHistory.push('/login')}>Login</NavItem>
							<NavItem eventKey={1} onClick={() => browserHistory.push('/register')}>Register</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
		} else {
			return(
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<IndexLink to="/">ACP</IndexLink>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} onClick={() => browserHistory.push('/')}>Home</NavItem>
							<NavDropdown eventKey="4" title="Features" id="nav-dropdown">
								<MenuItem eventKey="4.1">Art work</MenuItem>
								<MenuItem eventKey="4.2"> 3D models</MenuItem>
								<MenuItem eventKey="4.3">Fashion Designs</MenuItem>
								<MenuItem divider />
								<MenuItem eventKey="4.4">Signature artworks</MenuItem>
							</NavDropdown>
							<NavItem eventKey={2} onClick={() => browserHistory.push('/searchpage')}> Search </NavItem>
							<NavItem eventKey={3} href="#">About</NavItem>
						</Nav>
						<Nav pullRight>
							<NavItem eventKey={1} onClick={() => {browserHistory.push(currElementUrl)}}>{window.sessionStorage.getItem('username')}</NavItem>
							<NavItem eventKey={1} onClick={() => {browserHistory.push('/create_product')}}>Upload</NavItem>
							<NavItem eventKey={1} onClick={logout}>Logout</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
		}
	}

}
