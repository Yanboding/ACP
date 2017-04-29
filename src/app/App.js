import React from 'react'
import NavigationBar from './components/navigation/NavigationBar'
import style from './App.css'
import FooterBar from './components/footer/FooterBar';

export default class App extends React.Component {

	constructor(props) {
		super(props)
	}


	render() {
		return (
			<div>
				<NavigationBar />
				<div>
					{this.props.children}
				</div>
				<FooterBar />
			</div>
		)
	}
}
