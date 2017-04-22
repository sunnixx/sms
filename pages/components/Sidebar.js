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
								<li><a href="#" className="legitRipple"><i className="icon-switch2"></i> <span>Logout</span></a></li>
							</ul>
						</div>
					</div>

					<div className="sidebar-category sidebar-category-visible">
						<div className="category-content no-padding">
							<ul className="navigation navigation-main navigation-accordion">


								<li className="navigation-header"><span>Main</span> <i className="icon-menu" title="" data-original-title="Main pages"></i></li>
								<li className="active"><a href="index.html" className="legitRipple"><i className="icon-home4"></i> <span>Dashboard</span></a></li>
								<li className="">
									<a href="#" className="has-ul legitRipple"><i className="icon-stack"></i> <span>Challans</span></a>
									<ul className="hidden-ul" style={{display: "none"}}>
										<li><a href="starters/horizontal_nav.html" className="legitRipple">Horizontal navigation</a></li>
										<li><a href="starters/1_col.html" className="legitRipple">1 column</a></li>
										<li><a href="starters/2_col.html" className="legitRipple">2 columns</a></li>
										<li>
											<a href="#" className="has-ul legitRipple">3 columns</a>
											<ul className="hidden-ul">
												<li><a href="starters/3_col_dual.html" className="legitRipple">Dual sidebars</a></li>
												<li><a href="starters/3_col_double.html" className="legitRipple">Double sidebars</a></li>
											</ul>
										</li>
										<li><a href="starters/4_col.html" className="legitRipple">4 columns</a></li>
										<li>
											<a href="#" className="has-ul legitRipple">Detached layout</a>
											<ul className="hidden-ul">
												<li><a href="starters/detached_left.html" className="legitRipple">Left sidebar</a></li>
												<li><a href="starters/detached_right.html" className="legitRipple">Right sidebar</a></li>
												<li><a href="starters/detached_sticky.html" className="legitRipple">Sticky sidebar</a></li>
											</ul>
										</li>
										<li><a href="starters/layout_boxed.html" className="legitRipple">Boxed layout</a></li>
										<li className="navigation-divider"></li>
										<li><a href="starters/layout_navbar_fixed_main.html" className="legitRipple">Fixed main navbar</a></li>
										<li><a href="starters/layout_navbar_fixed_secondary.html" className="legitRipple">Fixed secondary navbar</a></li>
										<li><a href="starters/layout_navbar_fixed_both.html" className="legitRipple">Both navbars fixed</a></li>
										<li><a href="starters/layout_fixed.html" className="legitRipple">Fixed layout</a></li>
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
