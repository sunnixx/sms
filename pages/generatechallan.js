import React from "react"
import Head from "../components/Head"
import Style from "../components/stylesheets/style.js"

import axios from 'axios';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
    // this.props = {rollNo:''}

    this.getChallanData = this.getChallanData.bind(this);
    this.renderChallanData = this.renderChallanData.bind(this);
    this.printAllChallan = this.printAllChallan.bind(this);
  }

  getChallanData() {
    axios.get("/Send_ChallanData?rollNo=" + this.props.url.query.rollNo).then((response) => {
      this.setState({ data: response.data })
    })
  }

  printAllChallan(){
    // console.log("PRINT ALL CHALLAN");
    axios.get("/allstudents").then(res=>this.setState({data:res.data}));
  }

  renderChallanData() {
    return(
      <main>
        <div className="col-md-4 col-sm-4 col-xs-4">
          <div className="row">
            <div className="col-md-4 col-sm-2 col-xs-2">
              <img src="static/assets/images/logo-1.jpg" className="img-responsive" />
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <center>
                <b>Bank Alfalah Limited</b><br />
                <span>Islamic Banking</span> <br />
                <span>Latifabad Branch Block C</span> <br />
                <span>Civic Center Unit No. 7</span> <br />
                <span style={{border:"3px dotted"}}>A/C No 5631-5000622021</span>
              </center>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <p style={{fontSize:"9px"}}>Bank Copy</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-md-10 col-sm-10 col-xs-10">
              <p style={{marginBottom:"0"}}><b><u>International Islamic University Islamabad Schools</u></b></p>
              <center><p>Latifabad Campus</p></center>
            </div>
          </div>
          <div className="row">
            <table>
              <tbody>
                {this.state.data.map((element) => {
                  return (
                    <tr key={"feesinforow"+element._id}>
                      <td key={"geesinfocell"+element._id}>{Object.keys(element)[1]}</td>
                      <td key={"feesinfodues"+element._id}></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-4">
          
        </div>
        <div className="col-md-4">

        </div>
      </main>
    )
  }

  componentDidMount() {
    if(this.props.url.query.rollNo === "printall"){
      this.printAllChallan();
    }else{
      this.getChallanData();
    }
  }

  render() {
    return (
      <div>
        <Head />
        <div className="col-md-12 col-sm-12 col-xs-12" style={{backgroundColor:"#fff"}}  >
          <div className='container'>
            <div className='row' >
              {this.renderChallanData()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
