import React from 'react';
import Head from "../components/Head";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";

import axios from 'axios';

export default class extends React.Component{
    constructor(props){
		super(props);
		this.state = { userProfile:{profile:{} } }
		
		//Bind Methods
		this.getProfileInfo = this.getProfileInfo.bind(this);
	}

	getProfileInfo(){
		axios.get('/getprofile').then((response) => {
			this.setState({userProfile: response.data})
		}).catch((err) => {
			console.error("The error: " + err);
		});
	}
	
	componentDidMount(){
		this.getProfileInfo();
    }
    
    render(){
        return(
            <main>
                <Head />
                <TopMenu />
                <div className='page-container'>
                    <div className='page-content'>
                        <Sidebar dashboardActive="active" />

                        {/* CONTENT WRAPPER STARTS  */}
                        <div className='content-wrapper'>
                            {/*CONTENT STARTS*/}
                            <div className='content'>
                                {/*ROW START  */}
                                <div className='row'>
                                    <div className='content'>
                                        <div className='panel-heading'>
                                            <h5 className='panel-title'>User Profile</h5>
                                        </div>
                                        <div className='panel-body'>
                                            <form method='post' action='/profile' encType='multipart/form-data'>
                                                <label>Full Name</label><input type='text' name='name' className='form-control' value={this.state.userProfile.profile.name} />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}