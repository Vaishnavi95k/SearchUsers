/** @format */

import React, { useContext, useEffect, useState, Fragment } from "react";
import GithubContext from "../../context/github/githubContext";
import Axios from "axios";
import { Link } from "react-router-dom";
import UserItem from "../User/UserItem";

const Followers = (props) => {
	const githubcontext = useContext(GithubContext);

	const [followers, setfollowers] = useState([]);

	useEffect(() => {
		debugger;
		getFollowers();
	}, []);

	const getFollowers = async (getFollowersuser) => {
		const res = await Axios.get(
			`https://api.github.com/users/${githubcontext.login}/followers`
		);

		setfollowers(res.data);
	};
	console.log(props.location);
	//console.log(props.match.params.login);
	return (
		<Fragment>
			<Link to={`/user/${githubcontext.login}`} className='btn btn-light'>
				Back to Search
			</Link>
			<div style={container}>
				{followers.map((followeruser, index) => {
					return <UserItem user={followeruser} id={index} />;
				})}
			</div>
		</Fragment>
	);
};

const container = {
	display: "flex",
	//justifycontent: "center",
	flexWrap: "wrap"
};
export default Followers;
