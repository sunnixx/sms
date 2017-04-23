import React from "react";
import Head from "./components/Head";
import TopMenu from "./components/TopMenu";
import Sidebar from "./components/Sidebar";

import Link from "next/link";

export default class extends React.Component{
  render(){
    return(
      <div>
        <Head></Head>
        <TopMenu></TopMenu>
        <div className='page-container'>
          <div className="page-content">
            <Sidebar></Sidebar>

            {/* CONTENT WRAPPER STARTS */}
            <div className="content-wrapper">

              {/* CONTENT STARTS */}
              <div className="content">

                {/* ROW STARTS */}
                <div className="row">

                  {/* COLUMN STARTS */}
                  <div className="col-md-4" >
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h6 className="panel-title">FINANCE</h6>
                      </div>
                      <Link href="#">
                        <a>
                          <div className="panel-body panel-body-dashboard" style={{display: "block"}}>
                            <img src='static/assets/images/icons/finance.png' className="center-block img-responsive" style={{height:"150px"}} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* COLUMN ENDS */}

                  {/* COLUMN STARTS */}
                  <div className="col-md-4" >
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h6 className="panel-title">ADMISSIONS</h6>
                      </div>
                      <Link href="#">
                        <a>
                          <div className="panel-body panel-body-dashboard" style={{display: "block"}}>
                            <img src='static/assets/images/icons/admissions.png' className="center-block img-responsive" style={{height:"150px"}} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* COLUMN ENDS */}

                  {/* COLUMN STARTS */}
                  <div className="col-md-4" >
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h6 className="panel-title">FINANCE</h6>
                      </div>
                      <Link href="#">
                        <a>
                          <div className="panel-body panel-body-dashboard" style={{display: "block"}}>
                            <img src='static/assets/images/icons/finance.png' className="center-block img-responsive" style={{height:"150px"}} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* COLUMN ENDS */}
                </div>
                {/* ROW ENDS */}

                {/* ROW STARTS */}
                <div className="row">

                  {/* COLUMN STARTS */}
                  <div className="col-md-4" >
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h6 className="panel-title">FINANCE</h6>
                      </div>
                      <Link href="#">
                        <a>
                          <div className="panel-body panel-body-dashboard" style={{display: "block"}}>
                            <img src='static/assets/images/icons/finance.png' className="center-block img-responsive" style={{height:"150px"}} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* COLUMN ENDS */}

                  {/* COLUMN STARTS */}
                  <div className="col-md-4" >
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h6 className="panel-title">FINANCE</h6>
                      </div>
                      <Link href="#">
                        <a>
                          <div className="panel-body panel-body-dashboard" style={{display: "block"}}>
                            <img src='static/assets/images/icons/finance.png' className="center-block img-responsive" style={{height:"150px"}} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* COLUMN ENDS */}

                  {/* COLUMN STARTS */}
                  <div className="col-md-4" >
                    <div className="panel panel-info">
                      <div className="panel-heading">
                        <h6 className="panel-title">FINANCE</h6>
                      </div>
                      <Link href="#">
                        <a>
                          <div className="panel-body panel-body-dashboard" style={{display: "block"}}>
                            <img src='static/assets/images/icons/finance.png' className="center-block img-responsive" style={{height:"150px"}} />
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/* COLUMN ENDS */}
                </div>
                {/* ROW ENDS */}
              </div>
              {/* CONTENT ENDS */}
            </div>
            {/* CONTENT WRAPPER ENDS */}
          </div>
        </div>
      </div>

    )
  }
}
