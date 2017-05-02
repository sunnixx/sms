import React from "react";
import Head from "./components/Head";
import Link from "next/link";
import $ from "jquery";

import Sidebar from "./components/Sidebar";
import TopMenu from "./components/TopMenu";
import MonthlyChallanChart from "./components/charts/monthlyChart";
import MonthlyAmountChart from "./components/charts/monthlyAmount";

export default class extends React.Component{

  getAllStudents(){
    $.get('/allstudents', (response) => {
      this.setState({data: response});
    })
  }

  componentDidMount(){
    this.getAllStudents();
  }

  render(){
    return(
      <div>
        <Head></Head>
        <TopMenu></TopMenu>
        <div className="page-container">
          <div className="page-content">
            <Sidebar financeActive="active" challanShow="block" challanActive="active"></Sidebar>

            {/* CONTENT WRAPPER START */}
            <div className="content-wrapper">

              {/* CONTENT STARTS */}
              <div className="content">

                {/* ROW STARTS */}
                <div className="row">
                  <div className="col-md-6">

      							{/* <!-- Basic pie chart --> */}
      						<div className="panel panel-flat">

                      <div className="panel-body">
                        <MonthlyChallanChart></MonthlyChallanChart>
      								</div>
                    </div>
      							</div>
      							{/* <!-- /bacis pie chart --> */}

                    <div className="col-md-6">

        							{/* <!-- Basic pie chart --> */}
        						<div className="panel panel-flat">

                        <div className="panel-body">
                          <MonthlyAmountChart></MonthlyAmountChart>
        								</div>
                      </div>
        							</div>
        							{/* <!-- /bacis pie chart --> */}

                </div>
                {/* ROW ENDS */}
              </div>
                {/* <!-- Basic datatable --> */}
                <div className="col-md-12">
                  <div className="panel panel-flat">
                    <div className="panel-heading">
                      <h5 className="panel-title">Students information regarding Challan</h5>
                    </div>

                    <table className="table datatable-basic">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Fathers Name</th>
                          <th>Issue Date</th>
                          <th>Fee Month</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr>
                          <td>Zahid</td>
                          <td>Enright</td>
                          <td>Mr. Asad Channa</td>
                          <td>04 Apr, 2017</td>
                          <td>April</td>
                          <td>04 May, 2017</td>
                          <td><span className="label label-success">Paid</span></td>
                          <td className="text-center">
                            <ul className="icons-list">
                              <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-menu9"></i>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><i className="icon-file-pdf"></i> Generate Challan</a></li>
                                </ul>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Jackelyn</td>
                          <td>Weible</td>
                          <td><a href="#">Mr. Norullah Baloch</a></td>
                          <td>04 Apr, 2017</td>
                          <td>April</td>
                          <td>04 May, 2017</td>
                          <td><span className="label label-danger">Not Paid</span></td>
                          <td className="text-center">
                            <ul className="icons-list">
                              <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  <i className="icon-menu9"></i>
                                </a>

                                <ul className="dropdown-menu dropdown-menu-right">
                                  <li><a href="#"><i className="icon-file-pdf"></i> Generate Challan</a></li>
                                </ul>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- /basic datatable --> */}

              {/* CONTENT ENDS */}
            </div>
            {/* CONTENT WRAPPER ENDS */}
          </div>
        </div>
      </div>
    )
  }
}
