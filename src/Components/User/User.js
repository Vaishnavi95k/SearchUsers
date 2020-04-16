/** @format */

import React, {
	Fragment,
	Component,
	useEffect,
	useContext,
	useState
} from "react";
import { Link } from "react-router-dom";
import Users from "./Users";

import GithubContext from "../../context/github/githubContext";
import Followers from "../Users/followers";

const User = ({ user, match, getuser }) => {
	const githubdonctext = useContext(GithubContext);
	const [show, setshow] = useState(false);
	useEffect(() => {
		console.log("swapnil");
		//console.log(this.props.match.params.login);
		githubdonctext.getIndividualUser(match.params.login);
		//console.log(this.props.match.params.login);
	}, []);

	// shouldComponentUpdate(nextprop, nextstate) {
	// 	console.log(nextprop, nextstate);
	// 	//	return false;
	// }
	// componentDidUpdate(prevprop, prevstate) {
	// 	//console.log(prevprop, prevstate);

	// 	console.log(prevprop, prevstate);
	// 	prevprop = this.props.match.params.login;
	// 	if (this.props.match.params.login !== prevprop) {
	// 		this.props.getuser(this.props.match.params.login);
	// 	}

	// 	//this.props.getuser(this.props.match.params.login);
	// }

	const {
		hireable,
		avatar_url,
		name,
		location,
		bio,
		html_url,
		login,
		company,
		blog,
		followers,
		following,
		public_repos,
		public_gists
	} = githubdonctext.user;

	const On_fetchFollowers = () => {
		setshow(true);
	};
	//console.log(this.props.user);
	if (show) {
		return <Followers  />;
	} else {
		return (
			<Fragment>
				<Link to={"/"} className='btn btn-light'>
					Back to Search
				</Link>
				Hireable:{""}
				{hireable ? (
					<i className='fa fa-check text-success'></i>
				) : (
					<i className='fa fa-times-circle text-danger'></i>
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							className='round-img'
							alt=''
							style={{ width: "150px" }}
						/>
						<h3>{name}</h3>
						<p>Location :{location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>Bio</h3>
								<p>{bio}</p>
							</Fragment>
						)}

						<a href={html_url} className='btn btn-dark my-1'>
							{" "}
							Visit Git Hub
						</a>
						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Name : </strong>
										{login}
									</Fragment>
								)}
							</li>
							<li>
								{company && (
									<Fragment>
										<strong>Company : </strong>
										{company}
									</Fragment>
								)}
							</li>
							<li>
								{blog && (
									<Fragment>
										<strong>Website : </strong>
										{blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<button
						className='badge badge-primary'
						style={{ cursor: "pointer" }}
						onClick={On_fetchFollowers}>
						Followers : {followers}
					</button>
					<div className='badge badge-success'>Following : {following}</div>
					<div className='badge badge-light'>Public Repos : {public_repos}</div>
					<div className='badge badge-dark'>Public Gits : {public_gists}</div>
				</div>
				<div className='card text-center'>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<Users />
					</div>
				</div>
			</Fragment>
		);
	}
};

export default User;
