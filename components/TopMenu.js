import React from "react";
import Link from "next/link"
import axios from 'axios';

export default class extends React.Component{
	constructor(props){
		super(props);
		this.state = {userProfile:{profile:{} },time:'' }
		
		//Bind Methods
		this.getProfileInfo = this.getProfileInfo.bind(this);
		this.getGreeting = this.getGreeting.bind(this);
	}

	getProfileInfo(){
		axios.get('/getprofile').then((response) => {
			this.setState({userProfile: response.data})
		}).catch((err) => {
			console.error("The error: ",err);
		});
	}

	getGreeting(){
		var today = new Date();
		var curHr = today.getHours()
		if (curHr < 12) {
			this.setState({time: 'Morning'})
		} else if (curHr < 18) {
			this.setState({time: 'Afternoon'})
		} else {
			this.setState({time: 'Evening'})
		}
	}
	
	componentDidMount(){
		this.getProfileInfo();
		this.getGreeting();
	}

  render(){
    return(
    	<div className="navbar navbar-inverse bg-indigo">
    		<div className="navbar-header">
    			<Link href="/"><a className="navbar-brand"><img src="static/assets/images/logo.png" alt="" /></a></Link>

    			<ul className="nav navbar-nav visible-xs-block">
    				<li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"></i></a></li>
    				<li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"></i></a></li>
    			</ul>
    		</div>

    		<div className="navbar-collapse collapse" id="navbarx-mobile">
    			<ul className="nav navbar-nav">
    				<li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"></i></a></li>
    			</ul>

    			<div className="navbar-right">
    				<p className="navbar-text">{this.state.time}, {this.state.userProfile.username}!</p>
    				<p className="navbar-text"><span className="label bg-success-400">Online</span></p>
    			</div>
    		</div>
    	</div>
    )
  }
}
