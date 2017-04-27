import React from "react";
import Head from "./components/Head";
import Link from "next/link";
import ReactEcharts from "echarts-for-react";

import Sidebar from "./components/Sidebar";
import TopMenu from "./components/TopMenu";

export default class extends React.Component{
  getOptions() {
    const basic_pie_options = {

        // Add title
        title: {
            text: 'Challan Overview',
            subtext: 'Shows number of challans collected vs remaining',
            x: 'center'
        },

        // Add tooltip
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },

        // Add legend
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['Issued', 'Not Issued','Pending']
        },

        // Display toolbox
        toolbox: {
            show: true,
            orient: 'vertical',
            feature: {
                mark: {
                    show: true,
                    title: {
                        mark: 'Markline switch',
                        markUndo: 'Undo markline',
                        markClear: 'Clear markline'
                    }
                },
                magicType: {
                    show: true,
                    title: {
                        pie: 'Switch to pies',
                        funnel: 'Switch to funnel',
                    },
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            y: '20%',
                            width: '50%',
                            height: '70%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: true,
                    title: 'Restore'
                },
                saveAsImage: {
                    show: true,
                    title: 'Same as image',
                    lang: ['Save']
                }
            }
        },

        // Enable drag recalculate
        calculable: true,

        // Add series
        series: [{
            name: 'Challans',
            type: 'pie',
            radius: '70%',
            center: ['50%', '57.5%'],
            data: [
                {value: 20, name: 'Not Issued'},
                {value: 130, name: 'Issued'},
                {value: 40, name: 'Pending'}

            ]
        }]
    };
    return basic_pie_options;
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
                  <div className="col-md-12">

      							{/* <!-- Basic pie chart --> */}
      						<div className="panel panel-flat">

                      <div className="panel-body">
                        <ReactEcharts
                        option={this.getOptions()}
                        style={{height: '350px', width: '100%'}}
                        className='react_for_echarts' />
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
