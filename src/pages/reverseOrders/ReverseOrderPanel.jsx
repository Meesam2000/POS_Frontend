import React from 'react';
import Topbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ReverseOrders from './ReverseOrders';


function ReverseOrderPanel(props) {
    return (
        <div>
            <Topbar />
            <div className="container-fluid">
                <div><Sidebar text="reverseOrders" /></div>
                <div style={{display: 'block', width: '100%', flexGrow:1 }}>
                    <ReverseOrders></ReverseOrders>
                </div>
            </div>
        </div>
    );
}

export default ReverseOrderPanel;