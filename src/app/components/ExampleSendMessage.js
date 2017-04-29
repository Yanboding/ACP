import React from 'react'


export default class ExampleSendMessage extends React.Component {

	constructor(props) {
		super(props)
		this.testSend = this.testSend.bind(this)
	}
	componentWillMount() {
		this.testSend;
	}

	sendJson(json) {

		fetch('/api/test_send', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(json)
		})
	}

	testSend() {
		console.log("[ExampleSendMessage]: username: %s", this.refs.username.value)
		console.log("[ExampleSendMessage]: password %s", this.refs.password.value)
		var oJsonSend = {
			id: this.refs.id.value,
			username: this.refs.username.value,
			password: this.refs.password.value,
			status: this.refs.status.value
		};

		this.sendJson(oJsonSend)
	}

	render() {
		console.log("[ExampleSendMessage]: rendering testmsg")

		return (
			<div>
				id: <input type="text" ref="id"/>
				status: <input type="text" ref="status"/>
				username: <input type="text" ref="username"/>
				password: <input type="password" ref="password"/>

				<button onClick = {this.testSend}>Send It!</button>
			</div>
		)
	}
}