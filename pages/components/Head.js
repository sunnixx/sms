import React from "react";
import Head from "next/head";

export default class extends React.Component{
  render(){
    return(
      <Head>
          <meta charset="utf-8"  />
        	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
        	<meta name="viewport" content="width=device-width, initial-scale=1" />
        	<title>International Islamic University Islamabad - Latifabad Campus</title>

        	<link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css" />
        	<link href="static/assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css" />
        	<link href="static/assets/css/bootstrap.css" rel="stylesheet" type="text/css" />
        	<link href="static/assets/css/core.css" rel="stylesheet" type="text/css" />
        	<link href="static/assets/css/components.css" rel="stylesheet" type="text/css" />
        	<link href="static/assets/css/colors.css" rel="stylesheet" type="text/css" />

        	<script type="text/javascript" src="static/assets/js/plugins/loaders/pace.min.js"></script>
        	<script type="text/javascript" src="static/assets/js/core/libraries/jquery.min.js"></script>
        	<script type="text/javascript" src="static/assets/js/core/libraries/bootstrap.min.js"></script>
        	<script type="text/javascript" src="static/assets/js/plugins/loaders/blockui.min.js"></script>

        	<script type="text/javascript" src="static/assets/js/core/app.js"></script>

        	<script type="text/javascript" src="static/assets/js/plugins/ui/ripple.min.js"></script>
          <script src="https://sdk.accountkit.com/en_US/sdk.js"></script>
      </Head>
    )
  }
}
