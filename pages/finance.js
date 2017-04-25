import React from "react";
import Head from "./components/Head";
import Link from "next/link";

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
            <Sidebar financeActive="active" challanShow="block" challanActive="active"></Sidebar>

            {/* CONTENT WRAPPER START */}
            <div className="content-wrapper">

              {/* CONTENT STARTS */}
              <div className="content">

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
