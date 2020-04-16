/** @format */

import React, { Component, useState } from "react";

import "../Search/Search.css";
const Search = (props) => {
	const [text, settext] = useState("");

	const onchangeHandler = (e) => {
		settext(e.target.value);
	};

	const onsubmithandler = (e) => {
		e.preventDefault();
		props.onSearchhandler(text);
	};

	return (
		<form>
			<form className='form' onSubmit={onsubmithandler}>
				<input
					type='text'
					name='text'
					value={text}
					onChange={onchangeHandler}
				/>
				<br />
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
					onSubmit={onsubmithandler}
				/>
			</form>
		</form>
	);
};

export default Search;
