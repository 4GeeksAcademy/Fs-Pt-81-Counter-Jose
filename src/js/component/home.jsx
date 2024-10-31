import React from "react";
import Digit from "./digit"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({time}) => {
	return (
		<>
		<div className="d-flex gap-1">
		<Digit digit= {<i className="fa-solid fa-clock"></i>}/>
		<Digit digit= {Math.floor(time / 10000) % 10000}/>
		<Digit digit= {Math.floor(time / 1000) % 1000}/>
		<Digit digit= {Math.floor(time / 100) % 100}/>
		<Digit digit= {Math.floor(time / 10) % 10}/>
		<Digit digit= {Math.floor(time % 10)}/>
		</div>
	</>
	);
};

export default Home;
