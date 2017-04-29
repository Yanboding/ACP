
import React from 'react'
import 'bootstrap/less/bootstrap.less';
import style from './style.css';

import {
    Grid,
    PageHeader,
    Panel,
    FormControl,
    FormGroup,
    Form,
    Col,
    Row,
    Button,
    ControlLabel,

    Checkbox,
    Image,
    Media,
    Well} from 'react-bootstrap';
import {IndexLink, browserHistory} from 'react-router';

import utils from '../Utils'

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      query:'name'
    };
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    console.log("SEARCHPAGE: DID MOUNT");
    window.scrollTo(0,0)
  }
  /**
   * In this function, all results will be rendered to the searchResults array
   * defined in states.
   *
   * Convention:
   * Odd Product - tile
   * Even Product - Pink
   * Project - default color scheme (grey-ish)
   */
  handleChange(event) {
    this.setState({query: event.target.value});
  }
  Callback(results) {
    console.log(results);
    let resultPool = [];
    let clock = 0;
    if (results.length == 0) {
      console.log("[SearchPage] No result!");
      resultPool.push(
          <ControlLabel> No result... </ControlLabel>
      );
      this.setState({
        searchResults: resultPool
      })

    } else {
      console.log(results);
      results.map( (element) => {
        clock++;
        let currElementUrl =  '/product?pID=' + element.pID;
        console.log(currElementUrl);
        if (clock % 2) {
          resultPool.push(
              <Well id={style.EvenResults} key={clock}>
                <Media>
                  <Media.Left>
                    <Image width={128} height={72} src={element.imageURL} alt="Result" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>{element.name}</Media.Heading>
                    <p>Description: {element.description}</p>
                    <br />
                    <br />
                    <i>Author:{element.artist}</i>
                  </Media.Body>
                  <Media.Right>
                    <Button onClick={() => browserHistory.push(currElementUrl)}>View</Button>
                    <br />
                    <br />
                    <i>id.<u>{element.pID}</u></i>
                  </Media.Right>
                </Media>
              </Well>
          )
        }

        else {
          resultPool.push(
              <Well id={style.OddResults} key={clock}>
                <Media>
                  <Media.Left>
                    <Image width={128} height={72} src={element.imageURL} alt="Result" />
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>{element.name}</Media.Heading>
                    <p>Description:{element.description}</p>
                    <br />
                    <br />
                    <i>Author:{element.artist}</i>
                  </Media.Body>
                  <Media.Right>
                    <Button onClick={() => browserHistory.push(currElementUrl)}>View</Button>
                    <br />
                    <br />
                    <i>id.<u>{element.pID}</u></i>
                  </Media.Right>
                </Media>
              </Well>
          )
        }
      })
    }

    this.setState({
      searchResults: resultPool
    })
  }

  render() {
    let input = undefined;
    var query = this.state.query;

    let searchCall = () => {

      console.log(this.state.query);
      console.log("QUERY STRING: " + input.value);
      this.setState({
        searchResults: []
      });
      console.log(query);
      var url = '/api/product?'+query+'='+input.value;
      console.log(url);
      utils.fetchJSON(
          url,
          (json) => {
            this.Callback(json)
          }
      )
    };

    return(
        <Grid>
          <Row>
            <PageHeader> Search for Products </PageHeader>
          </Row>

          <Row>
            <Form inline>
              <FormGroup>
                <ControlLabel>Search For</ControlLabel>
                {' '}
                <FormControl type="text" id={style.Expanded} placeholder="Name of project or artwork..." inputRef={(ref) => {input = ref;}} />
              </FormGroup>
              {' '}
              <Button onClick={searchCall}> Search </Button>
            </Form>
          </Row>
          <hr/>
          <Row id={style.Margined}>
            <Panel header='Additional Options'>
              <FormGroup>
                <ControlLabel> Match To:</ControlLabel> {' '}
                <select ref="status" value={this.state.query} onChange={this.handleChange}>
                  <option value="name" >Product's name</option>
                  <option value="artist">Artist's name</option>
                  <option value="date">Date</option>
                </select>
                <br />
                <i>Note: Choose the query you want to search for. You can search for Product's name, Artist's name or the date when product is uploaded</i>
              </FormGroup>
            </Panel>
          </Row>
          {this.state.searchResults}

        </Grid>
    )
  }
}
