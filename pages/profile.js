import React from 'react';
import Head from "../components/Head";
import TopMenu from "../components/TopMenu";
import Sidebar from "../components/Sidebar";

export default class extends React.Component{
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
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}