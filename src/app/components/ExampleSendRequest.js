import React from 'react'

export default class ExampleSendRequest extends React.Component {
	constructor(props) {
		super(props)
	}

	testSend() {
		console.log("[ExampleSendRequest]: sending 666 999")
		fetch('/api/test_send', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				key: 666,
				value: '999'
			})
		})
	}

	render() {
		console.log("[ExampleSendRequest]: rendering button")

		return (
			<div>
				<button onClick = {this.testSend}>Send It!</button>
				send key=666 value='999'
			</div>
		)
	}
}