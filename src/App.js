/** @format */

import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../src/Components/Layout/Navbar/Navbar";
import UserItem from "../src/Components/User/UserItem";
import Users from "../src/Components/User/Users";
import Search from "../src/Components/Search/Search";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import User from "./Components/User/User";
import Axios from "axios";
class App extends Component {
	state = {
		search: "",
		user: {}
	};
	OnSearch = (text) => {
		this.setState({
			search: text
		});
	};

	getIndividualUser = async (username) => {
		const res = await Axios.get(`https://api.github.com/users/${username}`);

		this.setState({
			user: res.data
		});
	};

	render() {
		const num = "Swapnil";
		return (
			<Router>
				<div className='App'>
					<Navbar title={num} icon='fa fa-github' />

					<br />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<Fragment>
									<Search onSearchhandler={this.OnSearch} />
									<Users searchtext={this.state.search} />
								</Fragment>
							)}></Route>

						<Route
							path='/user/:login'
							render={(props) => (
								<User
									{...props}
									getuser={this.getIndividualUser}
									user={this.state.user}
								/>
							)}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
