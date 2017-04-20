import React from "react";
import Head from "./components/Head"

export default class extends React.Component{
  render(){
    return(
      <div className='login-container'>
        <Head></Head>
	<div className="page-container">

		<div className="page-content">

			<div className="content-wrapper">


				<div className="content">

					<form action="index.html">
						<div className="panel panel-body login-form">
							<div className="text-center">
								<div className="icon-object border-slate-300 text-slate-300"><img width='100' height='80' src='static/assets/images/logo-1.jpg'/></div>
								<h5 className="content-group">Login to your account <small className="display-block">Enter your mobile number below</small></h5>
							</div>

							<div className="form-group has-feedback has-feedback-left">
								<input type="text" className="form-control" placeholder="Mobile Number" />
								<div className="form-control-feedback">
									<i className="icon-user text-muted"></i>
								</div>
							</div>

							<div className="form-group has-feedback has-feedback-left">
								<input type="password" className="form-control" placeholder="Passcode" />
								<div className="form-control-feedback">
									<i className="icon-lock2 text-muted"></i>
								</div>
							</div>

							<div className="form-group">
								<button type="submit" className="btn bg-pink-400 btn-block">Sign in <i className="icon-circle-right2 position-right"></i></button>
							</div>

							<div className="text-center">
								<a href="login_password_recover.html">Forgot password?</a>
							</div>
						</div>
					</form>


					<div className="footer text-muted text-center">
						&copy; 2017. <a href="#">School Management Portal</a> by <a href="http://www.cichub.org" target="_blank">CIC HUB</a>
					</div>

				</div>
			</div>
		</div>
	</div>
</div>
    )
  }
}
