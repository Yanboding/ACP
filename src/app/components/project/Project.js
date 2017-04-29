import React from 'react'
import style from './style.css'

import 'bootstrap/less/bootstrap.less'
import {
    Jumbotron,
    Grid,
    Button,
    ButtonGroup,
    DropdownButton,
    Tooltip,
    OverlayTrigger,
    MenuItem,
    Row,
    Col,
    Thumbnail,
    PageHeader,
    Panel,
    Image
} from 'react-bootstrap'

import {browserHistory} from 'react-router'
import megpoidgumi from '../megpoidgumi.png'
import utils from '../Utils'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'



export default class Project extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            project_id: props.params.pID,
            panel_view: 'tree',
            ready: false,
            ok: false,
            panel_list_view: [],
            panel_tree_view: [],
            description: '',
            collaborators: '',
            contributions:0
        };
        console.log(props.params.pID);

        if (props.params.pID == null) {  /* Set default to megpoid gumi*/
            console.log("DUMMY ONE")
            this.state.ready = true
            this.state.ok = true
            this.state.project_id = 'megpoidgumi'
            this.state.panel_list_view = (
                <Grid>
                    <Row className="show-grid">
                        <Col md={2}><Thumbnail src={megpoidgumi} onClick={ () => browserHistory.push('/product')}/></Col>
                        <Col md={2}><Thumbnail src={megpoidgumi} onClick={ () => browserHistory.push('/product')}/></Col>
                        <Col md={2}><Thumbnail src={megpoidgumi} onClick={ () => browserHistory.push('/product')}/></Col>
                        <Col md={2}><Thumbnail src={megpoidgumi} onClick={ () => browserHistory.push('/product')}/></Col>
                    </Row>
                </Grid>
            )
            this.state.panel_tree_view = (
                <Grid>
                    <Row>
                        <Image width={128} height={72} src={megpoidgumi} alt="Result"  onClick={ () => browserHistory.push('/product')} />
                    </Row>
                    <Row>
                        <Image width={128} height={72} src={megpoidgumi} alt="Result"  onClick={ () => browserHistory.push('/product')} />
                        <Image width={128} height={72} src={megpoidgumi} alt="Result"  onClick={ () => browserHistory.push('/product')} />
                        <Image width={128} height={72} src={megpoidgumi} alt="Result"  onClick={ () => browserHistory.push('/product')} />
                    </Row>
                    <Row>
                        <Image width={128} height={72} src={megpoidgumi} alt="Result"  onClick={ () => browserHistory.push('/product')} />
                        <Image width={128} height={72} src={megpoidgumi} alt="Result"  onClick={ () => browserHistory.push('/product')} />
                    </Row>
                </Grid>
            )
        } else {
            console.log("SEMIDUMMY")
            this._fill_the_panel = this._fill_the_panel.bind(this)
            utils.fetchJSON(
                '/api/histree/'+props.params.pID,
                this._fill_the_panel
            )
        }
    }

    /**
     * Fill stuff...
     */
    _fill_the_panel(resultJson) {
        console.log(resultJson);
        if (!resultJson || resultJson.error) {
            this.setState({
                ready: true,
                ok: false
            })
        }

        let panel_list_view_body = []

        /* Put everything into the list... */
        let all_product = resultJson.nodes
        console.log(all_product)
        this.setState({
            description: resultJson.root.description,
            collaborators: resultJson.artists,
            contributions:resultJson.contribution
        });
        let url_prefix = '/product?pID=';
        for (var i = all_product.length - 1; i >= 0; i--) {
            if (i >= 3) {
                panel_list_view_body.push(
                    <Row className="show-grid" key={i}>
                        <Col md={2}><Thumbnail src={all_product[i].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product.pID)}/></Col>
                        <Col md={2}><Thumbnail src={all_product[i-1].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i-1].pID)}/></Col>
                        <Col md={2}><Thumbnail src={all_product[i-2].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i-2].pID)}/></Col>
                        <Col md={2}><Thumbnail src={all_product[i-3].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i-3].pID)}/></Col>
                    </Row>
                )
                i = i-4
            } else if (i == 2) {
                panel_list_view_body.push(
                    <Row className="show-grid" key={i}>
                        <Col md={2}><Thumbnail src={all_product[i].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i].pID)}/></Col>
                        <Col md={2}><Thumbnail src={all_product[i-1].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i-1].pID)}/></Col>
                        <Col md={2}><Thumbnail src={all_product[i-2].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i-2].pID)}/></Col>
                    </Row>
                )
                i = -1
            } else if (i == 1) {
                panel_list_view_body.push(
                    <Row className="show-grid" key={i}>
                        <Col md={2}><Thumbnail src={all_product[i].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i].pID)}/></Col>
                        <Col md={2}><Thumbnail src={all_product[i-1].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i-1].pID)}/></Col>
                    </Row>
                )
                i = -1
            } else {
                panel_list_view_body.push(
                    <Row className="show-grid">
                        <Col md={2}><Thumbnail src={all_product[i].imageURL} onClick={ () => browserHistory.push(url_prefix + all_product[i].pID)}/></Col>
                    </Row>
                )
                i = -1
            }
        }

        let panel_list_view = (
            <Grid>
                {panel_list_view_body}
            </Grid>
        )

        let all_nodes = resultJson.nodes
        let root_node = resultJson.root


        /* Remove the root node. */
        for (var i = all_nodes.length - 1; i >= 0; i--) {
            console.log(all_nodes[i].pID)
            if (all_nodes[i].pID == root_node.pID) {
                all_nodes.splice(i, 1)
                break
            }
        }


        let panel_tree_view_body = []

        // EVERYTHING WORKS FINE ABOVE THIS POINT
        // JS seems not supporting recursion
        let this_level = [root_node]
        let clock = 0

        // While this level is not empty we add stuff...
        while (this_level.length != 0) {
            let next_level = []
            let this_level_body = []

            /* Put every image of this level into a row. */
            this_level.map( (product) => {
                this_level_body.push(
                    <Image width={150} height={200} src={product.imageURL} alt="Result"  onClick={ () => browserHistory.push(url_prefix + product.pID)} key={clock++}/>
                )
            })

            panel_tree_view_body.push(
                <Row key={clock++}>
                    {this_level_body}
                </Row>
            )

            /* Add the children of this level; add them to next level*/
            for (var i = this_level.length - 1; i >= 0; i--) {
                let node_pID = this_level[i].pID

                for (var i = all_nodes.length - 1; i >= 0; i--) {
                    if (all_nodes[i].parent && all_nodes[i].parent == node_pID) {
                        next_level.push(all_nodes[i])
                    }
                }
            }

            /* Then, let "this_level" become the next level... if there's no next level then the loop terminates */
            this_level = next_level
        }

        let panel_tree_view = (
            <Grid>
                {panel_tree_view_body}
            </Grid>
        )

        this.setState({
            ready: true,
            ok: true,
            panel_list_view: panel_list_view,
            panel_tree_view: panel_tree_view,

        })
    }

    componentDidMount() {
        console.log("[Project] DID MOUNT");
        window.scrollTo(0,0)
    }

    render() {

        const tooltip = (
            <Tooltip id="tooltip">
                {this.state.description}.
            </Tooltip>
        )

        let panel_view;
        if (this.state.panel_view == 'list') {
            panel_view = this.state.panel_list_view
        } else {
            panel_view = this.state.panel_tree_view
        }

        let layout = (
            <div>
                <Grid>
                    <PageHeader>Project Name</PageHeader>
                    <Col md={3}>
                        <Panel header="Description (from the original artwork)">
                            <p>
                                {this.state.description}
                            </p>
                        </Panel>
                        <Panel header="Collaborators">
                            <i>
                                {this.state.collaborators}
                            </i>
                        </Panel>
                        <Panel header="Statstics">
                            <i>
                                Total commits : {this.state.contributions}
                            </i>
                        </Panel>
                    </Col>

                    <Col md={9}>
                        <ButtonGroup justified>
                            <ButtonGroup justified>
                                <Button bsStyle = 'success' onClick={() => this.setState({panel_view: 'tree'})} >Tree View</Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button bsStyle = 'info' onClick={() => this.setState({panel_view: 'list'})} >List View</Button>
                            </ButtonGroup>
                        </ButtonGroup>
                        <Panel>
                            {panel_view}
                        </Panel>
                    </Col>
                </Grid>
            </div>
        )

        let view
        if (this.state.ready && this.state.ok) {
            view = layout
        } else if (this.state.ready) {
            view = (
                <div>
                    Error.
                </div>
            )
        } else {
            view = (
                <div>
                    Loading...
                </div>
            )
        }

        return view
    }
}
