import React from 'react'
import {Image} from 'react-bootstrap'
import loading from './loading.jpg'
import style from './style.css'

export default class LoadingPage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("[LoadingPage]: DID MOUNT")
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <center>
                <Image src={loading} id={style.All}/>
            </center>
        )
    }
}
