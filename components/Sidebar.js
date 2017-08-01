import React from "react";
import Link from "next/link";
import axios from 'axios';

export default class extends React.Component{

	constructor(props){
		super(props);
		this.state = { userProfile:{profile:{} } }
		
		//Bind Methods
		this.getProfileInfo = this.getProfileInfo.bind(this);
	}

	getProfileInfo(){
		axios.get('/getprofile').then((response) => {
			this.setState({userProfile: response.data})
		}).catch((err) => {
			console.error("The error: " + err);
		});
	}
	
	componentDidMount(){
		this.getProfileInfo();
	}

  render(){
    return(
      <div className="sidebar sidebar-main sidebar-default">
				<div className="sidebar-content">
					<div className="sidebar-user-material">
						<div className="category-content">
							<div className="sidebar-user-material-content">
								     <a href="#" className="legitRipple"><img src={this.state.userProfile.profile.picture} className="img-circle img-responsive" alt="" /></a>      
								     <h6>{this.state.userProfile.profile.name}</h6>     
								  <span className="text-size-small">{this.state.userProfile.role}</span>  
							</div>

							<div className="sidebar-user-material-menu">
								<a href="#user-nav" data-toggle="collapse" className="legitRipple"><span>My account</span> <i className="caret"></i></a>
							</div>
						</div>

						<div className="navigation-wrapper collapse" id="user-nav">
							<ul className="navigation">
								<li><Link href='/profile'><a href="#" className="legitRipple"><i className="icon-user-plus"></i> <span>My profile</span></a></Link></li>
								<li><a href="#" className="legitRipple"><i className="icon-cog5"></i> <span>Account settings</span></a></li>
								<li><Link href="/logout"><a className="legitRipple"><i className="icon-switch2"></i> <span>Logout</span></a></Link></li>
							</ul>
						</div>
					</div>

					<div className="sidebar-category sidebar-category-visible">
						<div className="category-content no-padding">
							<ul className="navigation navigation-main navigation-accordion">

								<li className="navigation-header"><span>Main</span> <i className="icon-menu" title="" data-original-title="Main pages"></i></li>
								<li className={this.props.dashboardActive}><Link href='/'><a className="legitRipple"><i className="icon-home4"></i> <span>Dashboard</span></a></Link></li>
								<li className={this.props.financeActive}>
									<Link href='/finance'><a className="has-ul legitRipple"><i className="icon-stats-growth"></i> <span>Finance</span></a></Link>
									<ul className="hidden-ul" style={{display: this.props.challanShow}}>
										<li className={this.props.challanActive}><Link href='/finance'><a className="legitRipple"><i className="icon-stack"></i>Challans</a></Link></li>
                    <li className={this.props.addStudentActive}><Link href='/addchallan'><a className="legitRipple"><i className="icon-plus"></i>Add Challan</a></Link></li>
									</ul>
								</li>
                <li className={this.props.admissionsActive}>
									<a href="#" className="has-ul legitRipple"><i className="icon-reading"></i> <span>Admissions</span></a>
									<ul className="hidden-ul" style={{display: "none"}}>
										{/* <li><Link href='/finance_challan'><a className="legitRipple"><i className="icon-stack"></i>Challans</a></Link></li> */}
									</ul>
								</li>
                <li className={this.props.academicsActive}>
									<a href="#" className="has-ul legitRipple"><i className="icon-graduation"></i> <span>Academics</span></a>
									<ul className="hidden-ul" style={{display: "none"}}>
										{/* <li><Link href='/finance_challan'><a className="legitRipple"><i className="icon-stack"></i>Challans</a></Link></li> */}
									</ul>
								</li>
                <li className={this.props.healthActive}>
									<a href="#" className="has-ul legitRipple"><i className="icon-heart5"></i> <span>Health</span></a>
									<ul className="hidden-ul" style={{display: "none"}}>
										{/* <li><Link href='/finance_challan'><a className="legitRipple"><i className="icon-stack"></i>Challans</a></Link></li> */}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
    )
  }
}
