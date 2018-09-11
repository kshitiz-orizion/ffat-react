import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/header.css';

export default class Header extends Component{
	render(){
		return(
			<div className="sidenav">
				  <Link to="/dashboard">Dashboard</Link>
				  <Link to="#">Services</Link>
				  <Link to="#">Clients</Link>
				  <Link to="#">Contact</Link>
				</div>

			) 
	}
}