/** @format */

import { GET_ALLUSERS, GET_USER, GET_LOGIN } from "../types";
import GithubContext from "./githubContext";

const GithubReducer = (state, action) => {
	switch (action.type) {
		case GET_ALLUSERS:
			console.log(action.payload);
			return {
				...state,
				users: action.payload
			};
		case GET_USER:
			console.log(action.payload);
			return {
				...state,
				user: action.payload
			};
		case GET_LOGIN:
			console.log(action.value);
			console.log("swapnil kurjek");
			return {
				...state,
				login: action.value
			};
		default:
			return state;
	}
};

export default GithubReducer;
