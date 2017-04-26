import React from "react";
import Head from "./components/Head";
import Link from "next/link";

import Sidebar from "./components/Sidebar";
import TopMenu from "./components/TopMenu";

export default class extends React.Component{

  render(){
    return(
      <div>
        <Head echartsSrc="static/assets/js/plugins/visualization/echarts/echarts.js" pieChartSrc="static/assets/js/charts/echarts/pies_donuts.js"></Head>
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
                  <div className="col-md-12">

      							{/* <!-- Basic pie chart --> */}
      							<div className="panel panel-flat">

                      <div className="panel-body">
      									<div className="chart-container has-scroll">
      										<div className="chart has-fixed-height has-minimum-width" id="basic_pie"  style={{WebkitTapHighlightColor: "transparent", userSelect: "none", backgroundColor: "rgba(0, 0, 0, 0)", cursor: "default"}}>
                            <div style={{position: "relative", overflow: "hidden", width: "600px", height: "400px"}}>
                              <div data-zr-dom-id="bg" className="zr-element" style={{position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none"}}></div>
                              <canvas width="600" height="400" data-zr-dom-id="0" className="zr-element" style={{position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}></canvas>
                              <canvas width="600" height="400" data-zr-dom-id="1" className="zr-element" style={{position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}></canvas>
                              <canvas width="600" height="400" data-zr-dom-id="_zrender_hover_" className="zr-element" style={{position: "absolute", left: "0px", top: "0px", width: "600px", height: "400px", userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"}}></canvas>
                              <div className="echarts-dataview" style={{position: "absolute", display: "block", overflow: "hidden", transition: "height 0.8s, background-color 1s", zIndex: "1", left: "0px", top: "0px", width: "600px", height: "0px", backgroundColor: "rgb(240, 255, 255)"}}></div>
                              <div className="echarts-tooltip zr-element" style={{position: "absolute", display: "none", borderStyle: "solid", whiteSpace: "nowrap", transition: "left 0.4s, top 0.4s", backgroundColor: "rgba(0, 0, 0, 0.8)", borderWidth: "0px", borderColor: "rgb(51, 51, 51)", borderRadius: "4px", color: "rgb(255, 255, 255)", fontFamily: "Roboto, sans-serif", padding: "8px 12px", left: "204px", top: "91px"}}>
                                Browsers <br />Chrome: 1,548 (60.42%)
                              </div>
                            </div>
                          </div>
      									</div>
      								</div>
      							</div>
      							{/* <!-- /bacis pie chart --> */}
      						</div>
                </div>
                {/* ROW ENDS */}
              </div>
              {/* ROW STARTS */}
              {/* <div className="row"> */}
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
                          <th>Guardian's Name</th>
                          <th>DOB</th>
                          <th>Status</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Marth</td>
                          <td>Enright</td>
                          <td>Mr. Asad Channa</td>
                          <td>22 Jun 1972</td>
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
                          <td>3 Oct 1981</td>
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
                          <td>Aura</td>
                          <td>Hard</td>
                          <td>Dr. Zahid Shaikh</td>
                          <td>19 Apr 1969</td>
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
                        <tr>
                          <td>Nathalie</td>
                          <td><a href="#">Pretty</a></td>
                          <td>Mr. Sunny Kumar</td>
                          <td>13 Dec 1977</td>
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
