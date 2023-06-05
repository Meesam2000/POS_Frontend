import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/navbar/Navbar";
import {Profile} from '../../components/profile/Profile'
import {Footer} from '../../components/Footer';

function profile() {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
          <div><Sidebar text="profile"/> </div>
        <Profile />
      </div>
      <Footer />
    </>
  );
}

export default profile;
