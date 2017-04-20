import React from "react";
import Head from "./components/Head";

export default class extends React.Component{
  render(){
    return(
      <div>
        <Head></Head>
        <header>
          <h1>This is the header</h1>
        </header>
        <div className='container'>
          <h1>This is the container</h1>
        </div>
        <footer>
          <h1>This is the footer</h1>
        </footer>
      </div>
    )
  }
}
