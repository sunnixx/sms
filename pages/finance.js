import React from "react";
import Head from "./components/Head";
import Link from "next/link";
import $ from "jquery";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import TopMenu from "./components/TopMenu";
import MonthlyChallanChart from "./components/charts/monthlyChart";
import MonthlyAmountChart from "./components/charts/monthlyAmount";

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: []}
  }
  componentDidMount(){
    $.get('/allstudents',(response)=>{
      this.setState({data:response})
    })
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
                        {this.state.data.map((element)=>{
                          return(
                            <tr key={element.id}>
                              <td key={'firstname' + element.id}>{element.fname}</td>
                              <td key={'lastname' + element.id}>{element.lname}</td>
                              <td key={'guard' + element.id}>{element.guardian}</td>
                              <td key={'Issue' + element.id}>{element.issueDate}</td>
                              <td key={'MonthFee' + element.id}>{element.feeMonth}</td>
                              <td key={'Date' + element.id}>{element.dueDate}</td>
                              <td><span className="label label-success">Paid</span></td>
                              <td className="text-center">
                                <ul className="icons-list">
                                  <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                      <i className="icon-menu9"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                      <Link href={{pathname :'/generatechallan', query :{rollNo : element.rollNo}}}><li><a><i className='icon-file-pdf'></i>Generate Challan</a></li></Link>
                                    </ul>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          )
                        })
                      }
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
