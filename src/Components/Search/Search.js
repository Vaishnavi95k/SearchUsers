/** @format */

import React, { Component } from "react";

import "../Search/Search.css";
export default class Search extends Component {
	state = {
		text: ""
	};

	onchangeHandler = (e) => {
		this.setState({
			text: e.target.value
		});
	};

	onsubmithandler = (e) => {
		e.preventDefault();
		this.props.onSearchhandler(this.state.text);
	};

	render() {
		return (
			<div>
				<form className='form' onSubmit={this.onsubmithandler}>
					<input
						type='text'
						name='text'
						value={this.state.text}
						onChange={this.onchangeHandler}
					/>
					<br />
					<input
						type='submit'
						value='Search'
						className='btn btn-dark btn-block'
						onSubmit={this.onsubmithandler}
					/>
				</form>
			</div>
		);
	}
}
