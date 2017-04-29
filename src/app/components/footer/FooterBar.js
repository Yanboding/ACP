import Grid from 'react-bootstrap/lib/Grid';
import React from 'react';
import 'bootstrap/less/bootstrap.less';

export default class Footer extends React.Component {
  render() {
    return(
      <Grid>
        <hr/>
        <footer>
          <p> ACP Project for CSC301 Team 06, Built with React-Bootstrap </p>
        </footer>
      </Grid>
    )
  }
}
