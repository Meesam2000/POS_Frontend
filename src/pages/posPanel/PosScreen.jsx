import React from 'react';
import Topbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import PosePanel from './PosePanel';

function PosScreen(props) {
    return (
        <div>
            <Topbar />
            <div className="container-fluid">
                <div><Sidebar text="Transactions" /> </div>
                <div style={{display: 'block', width: '100%', flexGrow:1 }}>
                    <PosePanel></PosePanel>
                </div>
            </div>
        </div>
    );
}

export default PosScreen;