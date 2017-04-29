import React from 'react'

export default class TogglingMessage extends React.Component {

	constructor(props) {
		console.log("[TogglingMessage]: in constructor")
		super(props)
		this.state = {
			toggle_flag: false
		}
		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		console.log("[TogglingMessage]: toggling")
		this.setState({ toggle_flag: !this.state.toggle_flag })
	}
	
	render() {
		let msg = this.state.toggle_flag ? 'foo' : 'bar'
		console.log("[TogglingMessage]: rendering with " + msg)
		return (
			<div>
				<button onClick={this.toggle}>Click here !</button>
				{msg}
			</div>
		)
	}
}