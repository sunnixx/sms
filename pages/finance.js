import React from "react";
import Head from "../components/Head";
import Link from "next/link";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import TopMenu from "../components/TopMenu";
import MonthlyChallanChart from "../components/charts/monthlyChart";
import MonthlyAmountChart from "../components/charts/monthlyAmount";

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: []}

    this.getAllStudents = this.getAllStudents.bind(this);
  }

  getAllStudents(){
    axios.get('/allstudents').then((response) => {
      this.setState({data:response.data})
    })
  }

  componentDidMount(){
    this.getAllStudents();
  }
  render(){
    return(
      <div>
        <Head />
        <TopMenu />
        <div className="page-container">
          <div className="page-content">
            <Sidebar financeActive="active" challanShow="block" challanActive="active" />

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
                        <MonthlyChallanChart />
      								</div>
                    </div>
      							</div>
      							{/* <!-- /bacis pie chart --> */}

                    <div className="col-md-6">

        							{/* <!-- Basic pie chart --> */}
        						<div className="panel panel-flat">

                        <div className="panel-body">
                          <MonthlyAmountChart />
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
                      <h5 className="panel-title">Students Challan Info</h5>
                    </div>

                    <table className="table datatable-basic">
                      <thead>
                        <tr>
                          <th>Roll No</th>
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
                              <td key={'rollno' + element.id}>{element.rollNo}</td>
                              <td key={'firstname' + element.id}>{element.fname}</td>
                              <td key={'lastname' + element.id}>{element.lname}</td>
                              <td key={'guard' + element.id}>{element.guardian}</td>
                              <td key={'Issue' + element.id}>{element.issueDate}</td>
                              <td key={'MonthFee' + element.id}>{element.feeMonth}</td>
                              <td key={'Date' + element.id}>{element.dueDate}</td>
                              <td key={'status' + element.id}><span className="label label-success">Paid</span></td>
                              <td key={'text' + element.id} className="text-center">
                                <ul key={'iconlist' + element.id} className="icons-list">
                                  <li key={'dropdown' + element.id} className="dropdown">
                                    <a key={'dropdowntoggle' + element.id} href="#" className="dropdown-toggle" data-toggle="dropdown">
                                      <i key={'iconmenu9' + element.id} className="icon-menu9"></i>
                                    </a>
                                    <ul key={'dropdownmenu' + element.id} className="dropdown-menu dropdown-menu-right">
                                      <li><i className='icon-file-pdf'></i><Link href={{pathname :'/generatechallan', query :{rollNo:element.rollNo}}}><a>Generate Challan</a></Link></li>
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
