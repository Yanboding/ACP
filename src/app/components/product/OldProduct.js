import React from 'react'
import style from './style.css'
import dummyImage from '../megpoidgumi.png'

export default class Product extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1>
					Gumi Megpoid, Illustrated by someone.
				</h1>
				<div id={style.ImageBox}>
					<img src={dummyImage} alt="dummy image display page" />
				</div>
				<div id={style.InfoBox}>
					some stats...
				</div>
			</div>
		)
	}
}
