import React from "react";
import Head from "next/head";

export default class extends React.Component{
  render(){
    return(
      <Head>
        <link href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet' />
        <script src="https://code.jquery.com/jquery-3.2.1.min.js" type='text/javascript'></script>
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' type='text/javascript'></script>
      </Head>
    )
  }
}
