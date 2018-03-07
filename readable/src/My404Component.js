import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'


class My404Component extends Component {
	
	
render() {
	console.log("404")
	return (
	<div className="container404">
	<div className="title404">PAGE NOT FOUND</div>
	<Link to="/"><button className="home404">return home</button></Link>
	</div>
	)
	
	
	
	
}
	
	
	
	
	
}










export default My404Component;