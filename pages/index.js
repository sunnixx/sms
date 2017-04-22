import React from "react";
import Head from "./components/Head";
import TopMenu from "./components/TopMenu";
import Sidebar from "./components/Sidebar";

export default class extends React.Component{
  render(){
    return(
      <div>
        <Head></Head>
        <TopMenu></TopMenu>
        <div className='page-container'>
          <div className="page-content">
            <Sidebar></Sidebar>
            <h1>THIS AREA IS FOR THE MAIN CONTENT OF THE PAGE</h1>
          </div>
        </div>
      </div>

    )
  }
}
