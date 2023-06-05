import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/navbar/Navbar";
import Category from '../../views/Category'
import {Footer} from '../../components/Footer';

function AddCategory() {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
          <div><Sidebar text="addCategory"/> </div>
          <Category />
      </div>
      <Footer />
    </>
  );
}

export default AddCategory;
