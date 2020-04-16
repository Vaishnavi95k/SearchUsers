/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";

const UserItem = (props, { id }) => {
	const { login, avatar_url, html_url } = props.user;
	return (
		<div key={id} className='card text-center' style={boxcontainer}>
			<img
				src={avatar_url}
				alt=''
				className='round-img'
				style={{ width: "60px" }}
			/>
			<h3>{login}</h3>
			<Link
				name=''
				id=''
				className='btn btn-dark btn-sm my-1'
				to={`/user/${login}`}
				role='button'>
				More
			</Link>
		</div>
	);
};

const boxcontainer = {
	width: "150px",
	padding: "20px",
	margin: "10px"
};

export default UserItem;
