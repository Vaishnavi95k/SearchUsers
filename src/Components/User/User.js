/** @format */

import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import Users from "./Users";

class User extends Component {
	componentDidMount() {
		console.log(this.props.match.params.login);
		this.props.getuser(this.props.match.params.login);
		//console.log(this.props.match.params.login);
	}

	componentDidUpdate() {
		this.props.getuser(this.props.match.params.login);
		console.log(this.props.match.params.login);
	}
	render() {
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
		} = this.props.user;
		console.log(this.props.user);
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
					<div class='badge badge-primary'>Followers : {followers}</div>
					<div class='badge badge-success'>Following : {following}</div>
					<div class='badge badge-light'>Public Repos : {public_repos}</div>
					<div class='badge badge-dark'>Public Gits : {public_gists}</div>
				</div>
				<div className='card text-center'>
					<div style={{ display: "flex", flexDirection: "row" }}>
						<Users />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default User;
