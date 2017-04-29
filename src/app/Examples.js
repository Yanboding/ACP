import React from 'react'
import TogglingMessage from './components/TogglingMessage'
import ExampleAPICall from './components/ExampleAPICall'
import ExampleSendRequest from './components/ExampleSendRequest'
import ExampleSendMessage from './components/ExampleSendMessage'

export default class Examples extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: 'foo'
    }
  }

  render() {
    return (
      <div>
        <span> 404: Page not found. REDIRECT TO EXAMPLES PAGE...</span>
        <TogglingMessage />
        <ExampleAPICall />
        <ExampleSendMessage />
      </div>
    )
  }

}