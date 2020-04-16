/** @format */

import React, { Component, Fragment } from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
	return (
		<Fragment>
			<img
				src={spinner}
				alt='Loading....'
				style={{
					height: "100px",
					width: "100px",
					margin: ""
				}}
			/>
		</Fragment>
	);
};

export default Spinner;
