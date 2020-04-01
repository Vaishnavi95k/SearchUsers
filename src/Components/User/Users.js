/** @format */

import React, { Component } from "react";
import data from "../User/users.json";

import UserItem from "../User/UserItem";

import Axios from "axios";
import Spinner from "../Layout/Spinner/Spinner";

class Users extends Component {
	state = {
		users: [],
		loading: false
	};
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await Axios.get("https://api.github.com/users");

		this.setState({
			users: res.data,
			loading: false
		});
	}

	render() {
		// const isSearched = (query) => {
		// 	console.log(query);
		// 	console.log(this.state.users);
		// 	return (item) => {
		// 		//console.log(item);
		// 		return !query || item.login.toLowerCase().includes(query.toLowerCase());
		// 	};
		// };
		if (this.state.loading) {
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
			return (
				<div style={container}>
					{this.state.users
						.filter((item) => {
							return (
								!this.props.searchtext ||
								item.login
									.toLowerCase()
									.includes(this.props.searchtext.toLowerCase())
							);
						})
						.map((user, id) => {
							return <UserItem user={user} id={id} />;
						})}
				</div>
			);
		}
	}
}

const container = {
	display: "flex",
	//justifycontent: "center",
	flexWrap: "wrap"
};
export default Users;
