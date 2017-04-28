import React from "react";
import Head from "./components/Head"
import Sidebar from "./components/Sidebar";
import TopMenu from "./components/TopMenu";

export default class extends React.Component{
  render(){
    return(
      <div>
        <Head></Head>
        <TopMenu></TopMenu>
        <div className="page-container">
          <div className="page-content">
            <Sidebar financeActive="active" challanShow="block" addStudentActive="active"></Sidebar>
            <div className="content-wrapper">
              <div className="content">
                <div className="panel panel-flat">
                  <div className="panel-heading">
                    <h5 className="panel-title">Add Student Challan</h5>
                  </div>
                  {/* PANEL BODY STARTS */}
                  <div className="panel-body">

                    {/* FORM STARTS */}
                    <form className="form-horizontal" method="post" action="/addchallan">
                      <fieldset className="content-group">
                        <legend className="text-bold">Basic Information</legend>
                        <div className="form-group">
                          <label className="control-label col-lg-2">First Name <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" name="fname" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Last Name <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" name="lname" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Grade <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" name="grade" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Guardian's Name <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" name="guardian" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Amount <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="number" className="form-control" name="amount" required />
                          </div>
                        </div>
                      </fieldset>
                      <div className="text-right">
                        <button type="submit" className="btn btn-primary legitRipple">Submit <i className='icon-arrow-right14 position-right'></i></button>
                      </div>
                    </form>
                    {/* FORM ENDS */}
                  </div>
                  {/* PANEL BODY ENDS */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
