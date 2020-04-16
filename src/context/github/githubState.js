/** @format */

import React, { useReducer } from "react";
import GithubContext from "./githubContext";

import { GET_ALLUSERS, GET_USER, GET_LOGIN } from "../types";

import GithubReducer from "./githubReducer";

import Axios from "axios";

const GithubState = (props) => {
	const intialState = {
		users: [],
		loading: false,
		user: {},
		login: ""
	};

	const [state, dispatch] = useReducer(GithubReducer, intialState);

	const getusersDetails = async (getuser) => {
		//setloading(true);
		const res = await Axios.get("https://api.github.com/users");

		dispatch({
			type: GET_ALLUSERS,
			payload: res.data
		});
		//setuser(res.data);
		//setloading(false);
	};

	const getIndividualUser = async (username) => {
		console.log(username);
		const res = await Axios.get(`https://api.github.com/users/${username}`);

		dispatch({
			type: GET_USER,
			payload: res.data
		});

		dispatch({
			type: GET_LOGIN,
			value: username
		});
	};

	//const setloading=dispatch({type:loa})

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				loading: state.loading,
				user: state.user,
				login: state.login,
				getusersDetails,
				getIndividualUser
			}}>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubState;
