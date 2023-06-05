import React from 'react';
import Topbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Orders from './Orders';

function OrderPanel(props) {
    return (
        <div>
            <Topbar />
            <div className="container-fluid">
                <div><Sidebar text="Orders" /></div>
                <div style={{display: 'block', width: '100%', flexGrow:1 }}>
                    <Orders></Orders>
                </div>
            </div>
        </div>
    );
}

export default OrderPanel;