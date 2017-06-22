import React from "react"
import Head from "./components/Head"
import Style from "./components/stylesheet/style.js"
import ChallanData from "./components/challanpart/Chlndata"

export default class extends React.Component{
  render(){
    return(
      <div  >
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
                <ChallanData />
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
                <ChallanData />
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
                <ChallanData/>
              </div>
              {/* Candidate Challan Section Ends Here */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
