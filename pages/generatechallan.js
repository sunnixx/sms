import React from "react"
import Head from "../components/Head"
import Style from "../components/stylesheets/style.js"

import axios from 'axios';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state ={data :[]}
    // this.props = {rollNo:''}

    this.getChallanData = this.getChallanData.bind(this);
    this.renderChallanData = this.renderChallanData.bind(this);
  }

  getChallanData(){
    axios.get("/Send_ChallanData?rollNo="+this.props.url.query.rollNo).then((response) =>{
      this.setState({data: response.data})
      console.log(this.props.url.query.rollNo);
    })
  }

  renderChallanData(){
    return this.state.data.map((element) => {
        return(
          <main>
            <div key={element._id}>
                {/* Challan info start here */}
              <div key={element._id + 'col-xs-12'} className='col-xs-12'>
                <table>
                  <tbody>
                    <tr >
                      <td style={{width:'140px'}}>Issue Date</td>
                      <td key= {"Issue"+element._id}>{element.issueDate}</td>
                    </tr>
                    <tr>
                      <td>Fee for Month Of</td>
                      <td key={"FeeMonth"+element._id}>{element.feeMonth}</td>
                    </tr>
                    <tr>
                      <td>DueDate *</td>
                      <td key={"Duedate"+element._id}>{element.dueDate}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
                {/* Challan Info ends here */}
                {/* Name Section starts here */}
                <div className='col-xs-12'>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{width:'140px'}}>Name</td>
                        <td key={'fstname'+element._id}>{element.fname}</td>
                      </tr>
                      <tr>
                        <td>Father Name</td>
                        <td key={'guard'+element._id}>{element.guardian}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Name Section ends here */}
                <div className='col-xs-12'>
                  <table >
                    <tbody>
                      <tr style={{height:'20px'}} >
                        <td  style={{width:'140px'}}>Grade</td>
                        <td key={'grd'+element._id}>{element.grade}</td>
                      </tr>
                      <tr>
                        <td>Roll #</td>
                        <td  style={{width:'40px'}} key={'roll'+element._id}>{element.rollNo}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="col-xs-12" style={{marginTop:'3px'}}>
                    <p style={{textAlign:'center'}}>Challan details</p>
                  </div>
                  <table >
                    <tbody>
                      <tr style={{height: '10px'}}>
                        <td   style={{width:'300px'}}>Description</td>
                        <td>Amount</td>
                      </tr>
                      <tr style={{borderTop:'thin double #000000'}} >
                        <td>Admission Fee</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Annual Fee</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Course</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Tution Fee</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Arreas</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Duplicate</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Challan</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Fee</td>
                        <td key={'fee'+element._id}>{element.amount}</td>
                      </tr>
                      <tr>
                        <td>Reminder</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Photocopies</td>
                        <td>0</td>
                      </tr>
                      <tr style={{height: '20px'}}>
                        <td>Others</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  {/*  challan detail starts here*/}
            </div>
             {/* Total section*/}
        <div className="col-xs-12" style={{borderTop:'thin double #000000'}}>
          <table>
            <tbody>
              <tr style={{height: '40px'}} >
                <td  style={{width: '275px'}}>Totals</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Total Section Ends here */}
        {/* Signature and Stamp Section starts here */}
        <div className="col-xs-12">
          <div className="col-xs-5" style={Style.stampbox}>
            <p style={Style.stamp}>Stamp</p>
          </div>
          <div className="col-xs-offset-1 col-xs-5" style={Style.signatureBox} >
            <p>Signature</p>
          </div>
        </div>
        {/* Signature And Stamp section ends here */}
      </main>
      )
    })
  }

  componentDidMount(){
    this.getChallanData();
  }

  render(){
    return(
      <div>
        <Head />
        <div className="col-md-12 col-sm-12 col-xs-12"  >
          <div className='container'>
            <div className='row' >
              {/* Bank Challan section start here */}
              <div className='col-xs-4 col-sm-4 col-md-4' >
                <div className="col-xs-12" >
                  <div className="col-xs-3" >
                    <img src="static/assets/img/iiuilogo.png"  style={Style.image}/>
                  </div>
                  <div className="col-xs-6" style={Style.nopadding} >
                    <p style={Style.toCenter} > <b>Bank Alfalah limited </b><br />
                  Islamic Banking <br />
                    Latifabad Branch: Block C, <br /> Civic Center Unit No. 7 <br />
                    <span style= {Style.span2}>A/c no 5631-5000622021</span></p>
                  </div>
                  <div className="col-xs-3" style={Style.font} id='tocenter'>
                    <p>Bank Copy</p>
                  </div>
                </div>
                <div className="col-xs-12">
                  <p style={Style.toCenter}><span style= {Style.span1}>International Islamic University Islamabad Schools</span><br />
                  Latifabad Campus</p>
                </div>
                {this.renderChallanData()}
              </div>
              {/* Bank Challan section ends here */}
              {/* School Challan Section starts here */}
              <div className='col-xs-4 col-sm-4 col-md-4' >
                <div className="col-xs-12" >
                  <div className="col-xs-3" >
                    <img src="static/assets/img/iiuilogo.png"  style={Style.image}/>
                  </div>
                  <div className="col-xs-6" style={Style.nopadding} >
                    <p style={Style.toCenter} > <b>Bank Alfalah limited </b><br />
                  Islamic Banking <br />
                    Latifabad Branch: Block C, <br /> Civic Center Unit No. 7 <br />
                    <span style= {Style.span2}>A/c no 5631-5000622021</span></p>
                  </div>
                  <div className="col-xs-3" style={Style.font} id='tocenter'>
                    <p>School Copy</p>
                  </div>
                </div>
                <div className="col-xs-12">
                  <p style={Style.toCenter}><span style= {Style.span1}>International Islamic University Islamabad Schools</span><br />
                  Latifabad Campus</p>
                </div>
                {this.renderChallanData()}
              </div>
              {/* School Challan Section ends here */}
              {/* Candidate Challan Section starts here */}
              <div className='col-xs-4 col-sm-4 col-md-4' >
                <div className="col-xs-12" >
                  <div className="col-xs-3" >
                    <img src="static/assets/img/iiuilogo.png"  style={Style.image}/>
                  </div>
                  <div className="col-xs-6" style={Style.nopadding} >
                    <p style={Style.toCenter} > <b>Bank Alfalah limited </b><br />
                  Islamic Banking <br />
                    Latifabad Branch: Block C, <br /> Civic Center Unit No. 7 <br />
                    <span style= {Style.span2}>A/c no 5631-5000622021</span></p>
                  </div>
                  <div className="col-xs-3" style={Style.font} id='tocenter'>
                    <p>Student Copy</p>
                  </div>
                </div>
                <div className="col-xs-12">
                  <p style={Style.toCenter}><span style= {Style.span1}>International Islamic University Islamabad Schools</span><br />
                  Latifabad Campus</p>
                </div>
                {this.renderChallanData()}
              </div>
              {/* Candidate Challan Section Ends Here */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
