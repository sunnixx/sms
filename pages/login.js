import React from "react";
import Head from "./components/Head"

export default class extends React.Component{
  render(){
    return(
      <div>
        <Head></Head>
        <div className='container'>
          <h1>Login Information</h1>
        </div>
      </div>
    )
  }
}
