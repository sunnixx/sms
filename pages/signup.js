import React from "react";
import Head from "./components/Head"
import Link from "next/link"

export default class extends React.Component{
  render(){
    return(
      <div className='login-container'>
        <Head></Head>
	      <div className="page-container">

      		<div className="page-content">

      			<div className="content-wrapper">

      				<div className="content">

      					<form action="/signup" method="post">
      						<div className="panel panel-body login-form">
      							<div className="text-center">
      								<div className="icon-object border-slate-300 text-slate-300"><img width='100' height='80' src='static/assets/images/logo-1.jpg'/></div>
      								<h5 className="content-group">Signup for a new account <small className="display-block">Enter your Email and Password below</small></h5>
      							</div>

      							<div className="form-group has-feedback has-feedback-left">
      								<input type="text" className="form-control" name="email" placeholder="Email" />
      								<div className="form-control-feedback">
      									<i className="icon-user text-muted"></i>
      								</div>
      							</div>

                    <div className="form-group has-feedback has-feedback-left">
      								<input type="text" className="form-control" name="username" placeholder="Username" />
      								<div className="form-control-feedback">
      									<i className="icon-user text-muted"></i>
      								</div>
      							</div>

      							<div className="form-group has-feedback has-feedback-left">
      								<input type="password" className="form-control" name="password" placeholder="Password" />
      								<div className="form-control-feedback">
      									<i className="icon-lock2 text-muted"></i>
      								</div>
      							</div>

      							<div className="form-group">
      								<button type="submit" className="btn bg-pink-400 btn-block">Sign Up <i className="icon-circle-right2 position-right"></i></button>
      							</div>

      						</div>
      					</form>


      					<div className="footer text-muted text-center">
      						&copy; 2017. <Link href='#'><a>School Management Portal</a></Link> by <Link href="http://www.cichub.org"><a target="_blank">CIC HUB</a></Link>
      					</div>

      				</div>
      			</div>
      		</div>
      	</div>
      </div>
    )
  }
}
