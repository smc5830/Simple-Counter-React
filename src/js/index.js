//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
	return (
		<div className="AllCounter">
			<div className="Clock">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="sixDigit">{props.sixDigit % 10}</div>
			<div className="fiveDigit">{props.fiveDigit % 10}</div>
			<div className="fourDigit">{props.fourDigit % 10}</div>
			<div className="threeDigit">{props.threeDigit % 10}</div>
			<div className="twoDigit">{props.twoDigit % 10}</div>
			<div className="oneDigit">{props.oneDigit % 10}</div>
		</div>
	);
}

let counter = 0;
setInterval(() => {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			oneDigit={one}
			twoDigit={two}
			threeDigit={three}
			fourDigit={four}
			fiveDigit={five}
			sixDigit={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
