import React from "react";
import Head from "../components/Head"
import Sidebar from "../components/Sidebar";
import TopMenu from "../components/TopMenu";

export default class extends React.Component{
  render(){
    return(
      <div>
        <Head
          formUniform="static/assets/js/plugins/forms/styling/uniform.min.js"
          formSwitchery="static/assets/js/plugins/forms/styling/switchery.min.js"
          formSwitch="static/assets/js/plugins/forms/styling/switch.min.js"
          formCheckbox="static/assets/js/pages/form_checkboxes_radios.js"></Head>
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
                          <label className="control-label col-lg-2">Fathers Name <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="text" className="form-control" name="guardian" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-12">Gender <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <label className="radio-inline">
                              <input type='radio' name='genderRadio' value='Boy' defaultChecked />
                              Boy
                            </label>
                          </div>
                          <div className="col-lg-10">
                            <label className="radio-inline">
                              <input type='radio' name='genderRadio' value='Boy' />
                              Girl
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Grade <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <select name="grade" className="form-control">
                              <option name="reception">Reception</option>
                              <option name="reception01">Reception 01</option>
                              <option name="reception02">Reception 02</option>
                              <option name="grade01">Grade 01</option>
                              <option name="grade02">Grade 02</option>
                              <option name="grade03">Grade 03</option>
                              <option name="grade04">Grade 04</option>
                              <option name="grade05">Grade 05</option>
                              <option name="grade06">Grade 06</option>
                              <option name="grade07">Grade 07</option>
                              <option name="grade08">Grade 08</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Issue Date <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="date" className="form-control" name="issueDate" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Due Date <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="date" className="form-control" name="dueDate" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Fee Month <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <select className="form-control" name="feeMonth">
                              <option name="January">January</option>
                              <option name="February">February</option>
                              <option name="March">March</option>
                              <option name="April">April</option>
                              <option name="May">May</option>
                              <option name="June">June</option>
                              <option name="July">July</option>
                              <option name="August">August</option>
                              <option name="September">September</option>
                              <option name="October">October</option>
                              <option name="November">November</option>
                              <option name="December">December</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Admission Fee <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="number" className="form-control" name="admissionFee" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Security Deposit <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="number" className="form-control" name="securityDeposit" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Annual Fees <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="number" className="form-control" name="annualFee" required />
                          </div>
                        </div>
                        
                        <div className="form-group">
                          <label className="control-label col-lg-2">Course Fees <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="number" className="form-control" name="course" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Arrears <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <input type="number" className="form-control" name="arrears" required />
                          </div>
                        </div>

                        <div className="form-group">
                          <label className="control-label col-lg-2">Duplicate Challan <span style={{color:"red"}}>*</span></label>
                          <div className="col-lg-10">
                            <label className="radio-inline">
                              <input type='radio' name='bDuplicateChallan' value='true' defaultChecked />
                              Yes
                            </label>
                          </div>
                          <div className="col-lg-10">
                            <label className="radio-inline">
                              <input type='radio' name='bDuplicateChallan' value='false' />
                              No
                            </label>
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
