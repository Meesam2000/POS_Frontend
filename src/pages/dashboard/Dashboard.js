import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import Home from '../home/Home';
import {Footer} from '../../components/Footer';

function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
          <div><Sidebar text="home"/> </div>
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
