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
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
