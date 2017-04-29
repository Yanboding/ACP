import React from 'react'

export default class ExampleAPICall extends React.Component {

	constructor(props) {
		console.log("[ExampleAPICall]: in constructor")
		super(props)
		this.state = {
			curr_number: 0,
			curr_message: 'none'
		}
	}

	fetchJSON(callback) {
		console.log("[ExampleAPICall]: fetching json from api")
		fetch(
			"/api/test_api"
		).then( (res) => {
			console.log('[ExampleAPICall]: returned from api')
			if (res.ok) {
				res.json().then( (data) => {
					callback(data)
				})
			} else {
				console.log('[ExampleAPICall]: error, cannot get')
			}
		}, (err) => {
			console.log('[ExampleAPICall]: error, fetch failed')
		})
	}
	
	render() {
		console.log("[ExampleAPICall]: rendering with ")
		
		var putData = (data) => {
			this.setState({
				curr_number: data.number,
				curr_message: data.message
			})
		};

		var getData = () => this.fetchJSON(putData);

		let num = this.state.curr_number;
		let msg = this.state.curr_message;

		return (
			<div>
				<button onClick = {getData}>Test API!</button>
				JSON from backend... number: {num} and message: {msg}
			</div>
		)
	}
}