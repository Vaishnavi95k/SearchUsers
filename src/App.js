/** @format */

import React, { Component, Fragment, useState, useContext } from "react";
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
import GithubState from "./context/github/githubState";

import GithubContext from "./context/github/githubContext";
const App = (props) => {
	const githubcontext = useContext(GithubContext);

	const [search, setsearch] = useState("");

	const OnSearch = (text) => {
		setsearch(text);
	};

	// const getIndividualUser = (props) => {
	// 	githubcontext.getIndividualUser();
	// };
	// getIndividualUser = async (username) => {
	// 	const res = await Axios.get(`https://api.github.com/users/${username}`);

	// 	this.setState({
	// 		user: res.data
	// 	});
	// };

	const num = "Swapnil";
	return (
		<GithubState>
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
									<Search onSearchhandler={OnSearch} />
									<Users searchtext={search} />
								</Fragment>
							)}></Route>

						<Route
							path='/user/:login'
							render={(props) => (
								<User {...props} />
							)}></Route>
					</Switch>
				</div>
			</Router>
		</GithubState>
	);
};

export default App;
