import React from "react";
import Link from "next/link"

export default class extends React.Component{
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
    				<p className="navbar-text">Morning, Usama!</p>
    				<p className="navbar-text"><span className="label bg-success-400">Online</span></p>
    			</div>
    		</div>
    	</div>
    )
  }
}
