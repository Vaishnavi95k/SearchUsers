/** @format */

import React, { Component, useEffect, useState, useContext } from "react";
import data from "../User/users.json";

import UserItem from "../User/UserItem";

import Axios from "axios";
import Spinner from "../Layout/Spinner/Spinner";
import GithubContext from "../../context/github/githubContext";
import GithubState from "../../context/github/githubState";
import GithubReducer from "../../context/github/githubReducer";

const Users = (props) => {
	const githubcontext = useContext(GithubContext);

	//const [users, setuser] = useState([]);
	const [loading, setloading] = useState(false);

	useEffect(() => {
		console.log("users");
		githubcontext.getusersDetails();
	}, []);

	// const isSearched = (query) => {
	// 	console.log(query);
	// 	console.log(this.state.users);
	// 	return (item) => {
	// 		//console.log(item);
	// 		return !query || item.login.toLowerCase().includes(query.toLowerCase());
	// 	};
	// };

	if (loading) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					margin: "280px"
				}}>
				{" "}
				<Spinner />
			</div>
		);
	} else {
		//console.log(users);
		return (
			<div style={container}>
				{githubcontext.users
					.filter((item) => {
						return (
							!props.searchtext ||
							item.login.toLowerCase().includes(props.searchtext.toLowerCase())
						);
					})
					.map((user, id) => {
						return <UserItem user={user} id={id} />;
					})}
			</div>
		);
	}
};

const container = {
	display: "flex",
	//justifycontent: "center",
	flexWrap: "wrap"
};
export default Users;
