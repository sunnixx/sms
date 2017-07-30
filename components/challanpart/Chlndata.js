import React from "react"
import Head from "../Head"
import Style from "../stylesheets/style"
import Jquery from "jquery"

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state ={data :[]}
  }
  componentDidMount(){
    Jquery.get('/Send_ChallanData',(response)=>{
      this.setState({data:response})
    })
  }
  render(){
    return(
      <div>
        {this.state.data.map((element)=>{
          return(
            <div key={element.id}>
                {/* Challan info start here */}
              <div className='col-xs-12'>
                <table>
                  <tbody>
                    <tr >
                      <td style={{width:'140'}}>Issue Date</td>
                      <td key= {"Issue"+element.id}>{element.issueDate}</td>
                    </tr>
                    <tr>
                      <td>Fee for Month Of</td>
                      <td key={"FeeMonth"+element.id}>{element.feeMonth}</td>
                    </tr>
                    <tr>
                      <td>DueDate *</td>
                      <td key={"Duedate"+element.id}>{element.dueDate}</td>
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
                        <td style={{width:'140'}}>Name</td>
                        <td key={'fstname'+element.id}>{element.fname}</td>
                      </tr>
                      <tr>
                        <td>Father Name</td>
                        <td key={'guard'+element.id}>{element.guardian}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Name Section ends here */}
                <div className='col-xs-12'>
                  <table >
                    <tbody>
                      <tr style={{height:'20'}} >
                        <td  style={{width:'140'}}>Grade</td>
                        <td key={'grd'+element.id}>{element.grade}</td>
                      </tr>
                      <tr>
                        <td>Roll #</td>
                        <td  style={{width:'40'}} key={'roll'+element.id}>{element.rollNo}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="col-xs-12" style={{marginTop:'3px'}}>
                    <p style={{textAlign:'center'}}>Challan details</p>
                  </div>
                  <table >
                    <tbody>
                      <tr style={{height: '10'}}>
                        <td   style={{width:'300'}}>Description</td>
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
                        <td key={'fee'+element.id}>{element.amount}</td>
                      </tr>
                      <tr>
                        <td>Reminder</td>
                        <td>0</td>
                      </tr>
                      <tr>
                        <td>Photocopies</td>
                        <td>0</td>
                      </tr>
                      <tr style={{height: '20'}}>
                        <td>Others</td>
                        <td>0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                  {/*  challan detail starts here*/}
            </div>
          )
        })
      }
        {/* Total section*/}
        <div className="col-xs-12" style={{borderTop:'thin double #000000'}}>
          <table>
            <tbody>
              <tr style={{height: '40'}} >
                <td  style={{width: '275'}}>Totals</td>
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
      </div>
    )
  }
}
