import React from "react";
import Link from "next/link";

export default class extends React.Component{
  render(){
    return(
      <div className="sidebar sidebar-main sidebar-default">
				<div className="sidebar-content">


					<div className="sidebar-user-material">
						<div className="category-content">
							<div className="sidebar-user-material-content">
								<a href="#" className="legitRipple"><img src="static/assets/images/profile.jpg" className="img-circle img-responsive" alt="" /></a>
								<h6>Mr. Usama Abbasi</h6>
								<span className="text-size-small">Vice Principal, IIUISL</span>
							</div>

							<div className="sidebar-user-material-menu">
								<a href="#user-nav" data-toggle="collapse" className="legitRipple"><span>My account</span> <i className="caret"></i></a>
							</div>
						</div>

						<div className="navigation-wrapper collapse" id="user-nav">
							<ul className="navigation">
								<li><a href="#" className="legitRipple"><i className="icon-user-plus"></i> <span>My profile</span></a></li>
								<li><a href="#" className="legitRipple"><i className="icon-cog5"></i> <span>Account settings</span></a></li>
								<li><Link href="/logout"><a className="legitRipple"><i className="icon-switch2"></i> <span>Logout</span></a></Link></li>
							</ul>
						</div>
					</div>

					<div className="sidebar-category sidebar-category-visible">
						<div className="category-content no-padding">
							<ul className="navigation navigation-main navigation-accordion">


								<li className="navigation-header"><span>Main</span> <i className="icon-menu" title="" data-original-title="Main pages"></i></li>
								<li className="active"><a href="index.html" className="legitRipple"><i className="icon-home4"></i> <span>Dashboard</span></a></li>
								<li className="">
									<a href="#" className="has-ul legitRipple"><i className="icon-stats-growth"></i> <span>Finance</span></a>
									<ul className="hidden-ul" style={{display: "none"}}>
										<li><Link href='/finance_challan'><a className="legitRipple"><i className="icon-stack"></i>Challans</a></Link></li>
									</ul>
								</li>
                <li className="">
									<a href="#" className="has-ul legitRipple"><i className="icon-reading"></i> <span>Admissions</span></a>
									<ul className="hidden-ul" style={{display: "none"}}>
										{/* <li><Link href='/finance_challan'><a className="legitRipple"><i className="icon-stack"></i>Challans</a></Link></li> */}
									</ul>
								</li>
                <li className="">
									<a href="#" className="has-ul legitRipple"><i className="icon-graduation"></i> <span>Academics</span></a>
									<ul className="hidden-ul" style={{display: "none"}}>
										{/* <li><Link href='/finance_challan'><a className="legitRipple"><i className="icon-stack"></i>Challans</a></Link></li> */}
									</ul>
								</li>
                <li className="">
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
