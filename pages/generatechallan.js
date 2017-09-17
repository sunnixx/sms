import React from "react"
import Head from "../components/Head"
import Style from "../components/stylesheets/style.js"

import axios from 'axios';
import _ from 'lodash';

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
            <div className="col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10">
              <p style={{marginBottom:"0"}}><b><u>International Islamic University Islamabad Schools</u></b></p>
              <center><p>Latifabad Campus</p></center>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2">
              <table>
                {this.state.data.map((item) => {
                  console.log(item);
                  return(
                    <tbody key={"tablebody" + item._id}>
                      <tr key={"rollnorow"+item._id}>
                        <td key={"rollnokey"+item._id}>Roll No</td>
                        <td className="col-md-6 col-sm-6 col-xs-6" key={"rollnovalue"+item._id}>{item.rollNo}</td>
                      </tr>
                      <tr key={"feemonthrow"+item._id}>
                        <td key={"feemonthkey"+item._id}>Fee Month</td>
                        <td key={"feemonthvalue"+item._id}>{item.feeMonth}</td>
                      </tr>
                      <tr key={"issuedaterow"+item._id}>
                        <td key={"issuedatekey"+item._id}>Issue Date</td>
                        <td key={"issuedatevalue"+item._id}>{item.issueDate}</td>
                      </tr>
                      <tr key={"duedaterow"+item._id}>
                        <td key={"duedatekey"+item._id}>Due Date</td>
                        <td key={"duedatevalue"+item._id}>{item.dueDate}</td>
                      </tr>
                      <tr key={"namerow"+item._id}>
                        <td key={"namekey"+item._id}>Name</td>
                        <td key={"namevalue"+item._id}>{item.fname}</td>
                      </tr>
                      <tr key={"fathernamerow"+item._id}>
                        <td key={"fathernamekey"+item._id}>Father Name</td>
                        <td key={"fathernamevalue"+item._id}>{item.guardian}</td>
                      </tr>
                      <tr key={"graderow"+item._id}>
                        <td key={"gradekey"+item._id}>Grade</td>
                        <td key={"gradevalue"+item._id}>{item.grade}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
          <div className="row">
            <br />
            <center><p>Challan Details</p></center>
            <span className="col-md-offset-2">Description</span><span className="pull-right">Amount</span>
            <div className="col-md-offset-2" style={{borderTop:"2px solid #000"}}>
              <table className="col-md-12 col-sm-12 col-xs-12">
                {this.state.data.map((item) => {
                  return(
                    <tbody key={"tablebody"+item._id}>
                      <tr key={"admissionfeesrow"+item._id}>
                        <td key={"admissionfees"+item._id}>Admission Fee</td>
                        <td className="pull-right" key={"admissionfeesvalue"+item._id}>{item.admissionFee | 0}</td>
                      </tr>
                      <tr key={"annualfeesrow"+item._id}>
                        <td key={"annualfees"+item._id}>Annual Fee</td>
                        <td className="pull-right" key={"annualfeesvalue"+item._id}>{item.annualFee | 0}</td>
                      </tr>
                      <tr key={"coursefeesrow"+item._id}>
                        <td key={"coursefees"+item._id}>Course Fee</td>
                        <td className="pull-right" key={"coursefeesvalue"+item._id}>{item.course | 0}</td>
                      </tr>
                      <tr key={"tuitionfeesrow"+item._id}>
                        <td key={"tuitionfees"+item._id}>Tution Fee</td>
                        <td className="pull-right" key={"tuitionfeesvalue"+item._id}>{item.course | 0}</td>
                      </tr>
                      <tr key={"arrrearsrow"+item._id}>
                        <td key={"arrears"+item._id}>Arrears</td>
                        <td className="pull-right" key={"arrearsvalue"+item._id}>{item.arrears | 0}</td>
                      </tr>
                      <tr key={"arrrearsrow"+item._id}>
                        <td key={"arrears"+item._id}>Arrears</td>
                        <td className="pull-right" key={"arrearsvalue"+item._id}>{item.arrears | 0}</td>
                      </tr>
                      <tr key={"duplicaterow"+item._id}>
                        <td key={"duplicate"+item._id}>Duplicate</td>
                        <td className="pull-right" key={"duplicatevalue"+item._id}>{item.bDuplicateChallan | 'No'}</td>
                      </tr>
                      <tr key={"challanfeerow"+item._id}>
                        <td key={"challanfee"+item._id}>Challan</td>
                        <td className="pull-right" key={"challanfeevalue"+item._id}>{item.amount | 0}</td>
                      </tr>
                      <tr key={"reminderrow"+item._id}>
                        <td key={"reminder"+item._id}>Reminder</td>
                        <td className="pull-right" key={"remindervalue"+item._id}>{item.feeReminders | 0}</td>
                      </tr>
                      <tr key={"photocopyrow"+item._id}>
                        <td key={"photocopy"+item._id}>Photocopies</td>
                        <td className="pull-right" key={"photocopyvalue"+item._id}>{item.duplicateChallan | 0}</td>
                      </tr>
                   </tbody>
                  )
                })}
              </table>
            </div>
          </div>
          <div className="row">
            <div style={{borderTop:"2px solid #000"}} className="col-md-offset-2">
              <span>Total</span>
              <span className="pull-right">
                {this.state.data.map((item)=>{
                  return item.amount | 0 + 
                         item.admissionFee | 0 + 
                         item.arrears | 0 + 
                         item.annualFee | 0 + 
                         item.securityDeposite | 0 + 
                         item.course | 0 + 
                         item.duplicateChallan | 0;
                })}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2 col-md-5 col-sm-5 col-xs-5" style={{
                                                                            border:"1px solid #000", 
                                                                            height:"100px",
                                                                            paddingTop:"20%"
                                                                        }}>
              <center><span>Stamp</span></center>
            </div>
            <div className="pull-right col-md-3 col-sm-3 col-xs-3" style={{borderBottom:"1px solid #000", 
                                                                           height:"80px",
                                                                           paddingTop:"20%"}}>
              <center><span>Signature</span></center>
            </div>
          </div>
        </div>
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
                <span style={{ border: "3px dotted" }}>A/C No 5631-5000622021</span>
              </center>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <p style={{ fontSize: "9px" }}>Bank Copy</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10">
              <p style={{ marginBottom: "0" }}><b><u>International Islamic University Islamabad Schools</u></b></p>
              <center><p>Latifabad Campus</p></center>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2">
              <table>
                {this.state.data.map((item) => {
                  console.log(item);
                  return (
                    <tbody key={"tablebody" + item._id}>
                      <tr key={"rollnorow" + item._id}>
                        <td key={"rollnokey" + item._id}>Roll No</td>
                        <td className="col-md-6 col-sm-6 col-xs-6" key={"rollnovalue" + item._id}>{item.rollNo}</td>
                      </tr>
                      <tr key={"feemonthrow" + item._id}>
                        <td key={"feemonthkey" + item._id}>Fee Month</td>
                        <td key={"feemonthvalue" + item._id}>{item.feeMonth}</td>
                      </tr>
                      <tr key={"issuedaterow" + item._id}>
                        <td key={"issuedatekey" + item._id}>Issue Date</td>
                        <td key={"issuedatevalue" + item._id}>{item.issueDate}</td>
                      </tr>
                      <tr key={"duedaterow" + item._id}>
                        <td key={"duedatekey" + item._id}>Due Date</td>
                        <td key={"duedatevalue" + item._id}>{item.dueDate}</td>
                      </tr>
                      <tr key={"namerow" + item._id}>
                        <td key={"namekey" + item._id}>Name</td>
                        <td key={"namevalue" + item._id}>{item.fname}</td>
                      </tr>
                      <tr key={"fathernamerow" + item._id}>
                        <td key={"fathernamekey" + item._id}>Father Name</td>
                        <td key={"fathernamevalue" + item._id}>{item.guardian}</td>
                      </tr>
                      <tr key={"graderow" + item._id}>
                        <td key={"gradekey" + item._id}>Grade</td>
                        <td key={"gradevalue" + item._id}>{item.grade}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
          <div className="row">
            <br />
            <center><p>Challan Details</p></center>
            <span className="col-md-offset-2">Description</span><span className="pull-right">Amount</span>
            <div className="col-md-offset-2" style={{ borderTop: "2px solid #000" }}>
              <table className="col-md-12 col-sm-12 col-xs-12">
                {this.state.data.map((item) => {
                  return (
                    <tbody key={"tablebody" + item._id}>
                      <tr key={"admissionfeesrow" + item._id}>
                        <td key={"admissionfees" + item._id}>Admission Fee</td>
                        <td className="pull-right" key={"admissionfeesvalue" + item._id}>{item.admissionFee | 0}</td>
                      </tr>
                      <tr key={"annualfeesrow" + item._id}>
                        <td key={"annualfees" + item._id}>Annual Fee</td>
                        <td className="pull-right" key={"annualfeesvalue" + item._id}>{item.annualFee | 0}</td>
                      </tr>
                      <tr key={"coursefeesrow" + item._id}>
                        <td key={"coursefees" + item._id}>Course Fee</td>
                        <td className="pull-right" key={"coursefeesvalue" + item._id}>{item.course | 0}</td>
                      </tr>
                      <tr key={"tuitionfeesrow" + item._id}>
                        <td key={"tuitionfees" + item._id}>Tution Fee</td>
                        <td className="pull-right" key={"tuitionfeesvalue" + item._id}>{item.course | 0}</td>
                      </tr>
                      <tr key={"arrrearsrow" + item._id}>
                        <td key={"arrears" + item._id}>Arrears</td>
                        <td className="pull-right" key={"arrearsvalue" + item._id}>{item.arrears | 0}</td>
                      </tr>
                      <tr key={"arrrearsrow" + item._id}>
                        <td key={"arrears" + item._id}>Arrears</td>
                        <td className="pull-right" key={"arrearsvalue" + item._id}>{item.arrears | 0}</td>
                      </tr>
                      <tr key={"duplicaterow" + item._id}>
                        <td key={"duplicate" + item._id}>Duplicate</td>
                        <td className="pull-right" key={"duplicatevalue" + item._id}>{item.bDuplicateChallan | 'No'}</td>
                      </tr>
                      <tr key={"challanfeerow" + item._id}>
                        <td key={"challanfee" + item._id}>Challan</td>
                        <td className="pull-right" key={"challanfeevalue" + item._id}>{item.amount | 0}</td>
                      </tr>
                      <tr key={"reminderrow" + item._id}>
                        <td key={"reminder" + item._id}>Reminder</td>
                        <td className="pull-right" key={"remindervalue" + item._id}>{item.feeReminders | 0}</td>
                      </tr>
                      <tr key={"photocopyrow" + item._id}>
                        <td key={"photocopy" + item._id}>Photocopies</td>
                        <td className="pull-right" key={"photocopyvalue" + item._id}>{item.duplicateChallan | 0}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
          <div className="row">
            <div style={{ borderTop: "2px solid #000" }} className="col-md-offset-2">
              <span>Total</span>
              <span className="pull-right">
                {this.state.data.map((item) => {
                  return item.amount | 0 +
                    item.admissionFee | 0 +
                    item.arrears | 0 +
                    item.annualFee | 0 +
                    item.securityDeposite | 0 +
                    item.course | 0 +
                    item.duplicateChallan | 0;
                })}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2 col-md-5 col-sm-5 col-xs-5" style={{
              border: "1px solid #000",
              height: "100px",
              paddingTop: "20%"
            }}>
              <center><span>Stamp</span></center>
            </div>
            <div className="pull-right col-md-3 col-sm-3 col-xs-3" style={{
              borderBottom: "1px solid #000",
              height: "80px",
              paddingTop: "20%"
            }}>
              <center><span>Signature</span></center>
            </div>
          </div>
        </div>
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
                <span style={{ border: "3px dotted" }}>A/C No 5631-5000622021</span>
              </center>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <p style={{ fontSize: "9px" }}>Bank Copy</p>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-offset-2 col-sm-offset-2 col-md-10 col-sm-10 col-xs-10">
              <p style={{ marginBottom: "0" }}><b><u>International Islamic University Islamabad Schools</u></b></p>
              <center><p>Latifabad Campus</p></center>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2">
              <table>
                {this.state.data.map((item) => {
                  console.log(item);
                  return (
                    <tbody key={"tablebody" + item._id}>
                      <tr key={"rollnorow" + item._id}>
                        <td key={"rollnokey" + item._id}>Roll No</td>
                        <td className="col-md-6 col-sm-6 col-xs-6" key={"rollnovalue" + item._id}>{item.rollNo}</td>
                      </tr>
                      <tr key={"feemonthrow" + item._id}>
                        <td key={"feemonthkey" + item._id}>Fee Month</td>
                        <td key={"feemonthvalue" + item._id}>{item.feeMonth}</td>
                      </tr>
                      <tr key={"issuedaterow" + item._id}>
                        <td key={"issuedatekey" + item._id}>Issue Date</td>
                        <td key={"issuedatevalue" + item._id}>{item.issueDate}</td>
                      </tr>
                      <tr key={"duedaterow" + item._id}>
                        <td key={"duedatekey" + item._id}>Due Date</td>
                        <td key={"duedatevalue" + item._id}>{item.dueDate}</td>
                      </tr>
                      <tr key={"namerow" + item._id}>
                        <td key={"namekey" + item._id}>Name</td>
                        <td key={"namevalue" + item._id}>{item.fname}</td>
                      </tr>
                      <tr key={"fathernamerow" + item._id}>
                        <td key={"fathernamekey" + item._id}>Father Name</td>
                        <td key={"fathernamevalue" + item._id}>{item.guardian}</td>
                      </tr>
                      <tr key={"graderow" + item._id}>
                        <td key={"gradekey" + item._id}>Grade</td>
                        <td key={"gradevalue" + item._id}>{item.grade}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
          <div className="row">
            <br />
            <center><p>Challan Details</p></center>
            <span className="col-md-offset-2">Description</span><span className="pull-right">Amount</span>
            <div className="col-md-offset-2" style={{ borderTop: "2px solid #000" }}>
              <table className="col-md-12 col-sm-12 col-xs-12">
                {this.state.data.map((item) => {
                  return (
                    <tbody key={"tablebody" + item._id}>
                      <tr key={"admissionfeesrow" + item._id}>
                        <td key={"admissionfees" + item._id}>Admission Fee</td>
                        <td className="pull-right" key={"admissionfeesvalue" + item._id}>{item.admissionFee | 0}</td>
                      </tr>
                      <tr key={"annualfeesrow" + item._id}>
                        <td key={"annualfees" + item._id}>Annual Fee</td>
                        <td className="pull-right" key={"annualfeesvalue" + item._id}>{item.annualFee | 0}</td>
                      </tr>
                      <tr key={"coursefeesrow" + item._id}>
                        <td key={"coursefees" + item._id}>Course Fee</td>
                        <td className="pull-right" key={"coursefeesvalue" + item._id}>{item.course | 0}</td>
                      </tr>
                      <tr key={"tuitionfeesrow" + item._id}>
                        <td key={"tuitionfees" + item._id}>Tution Fee</td>
                        <td className="pull-right" key={"tuitionfeesvalue" + item._id}>{item.course | 0}</td>
                      </tr>
                      <tr key={"arrrearsrow" + item._id}>
                        <td key={"arrears" + item._id}>Arrears</td>
                        <td className="pull-right" key={"arrearsvalue" + item._id}>{item.arrears | 0}</td>
                      </tr>
                      <tr key={"arrrearsrow" + item._id}>
                        <td key={"arrears" + item._id}>Arrears</td>
                        <td className="pull-right" key={"arrearsvalue" + item._id}>{item.arrears | 0}</td>
                      </tr>
                      <tr key={"duplicaterow" + item._id}>
                        <td key={"duplicate" + item._id}>Duplicate</td>
                        <td className="pull-right" key={"duplicatevalue" + item._id}>{item.bDuplicateChallan | 'No'}</td>
                      </tr>
                      <tr key={"challanfeerow" + item._id}>
                        <td key={"challanfee" + item._id}>Challan</td>
                        <td className="pull-right" key={"challanfeevalue" + item._id}>{item.amount | 0}</td>
                      </tr>
                      <tr key={"reminderrow" + item._id}>
                        <td key={"reminder" + item._id}>Reminder</td>
                        <td className="pull-right" key={"remindervalue" + item._id}>{item.feeReminders | 0}</td>
                      </tr>
                      <tr key={"photocopyrow" + item._id}>
                        <td key={"photocopy" + item._id}>Photocopies</td>
                        <td className="pull-right" key={"photocopyvalue" + item._id}>{item.duplicateChallan | 0}</td>
                      </tr>
                    </tbody>
                  )
                })}
              </table>
            </div>
          </div>
          <div className="row">
            <div style={{ borderTop: "2px solid #000" }} className="col-md-offset-2">
              <span>Total</span>
              <span className="pull-right">
                {this.state.data.map((item) => {
                  return item.amount | 0 +
                    item.admissionFee | 0 +
                    item.arrears | 0 +
                    item.annualFee | 0 +
                    item.securityDeposite | 0 +
                    item.course | 0 +
                    item.duplicateChallan | 0;
                })}
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2 col-md-5 col-sm-5 col-xs-5" style={{
              border: "1px solid #000",
              height: "100px",
              paddingTop: "20%"
            }}>
              <center><span>Stamp</span></center>
            </div>
            <div className="pull-right col-md-3 col-sm-3 col-xs-3" style={{
              borderBottom: "1px solid #000",
              height: "80px",
              paddingTop: "20%"
            }}>
              <center><span>Signature</span></center>
            </div>
          </div>
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

