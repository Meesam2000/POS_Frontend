import * as React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/navbar/Navbar";
import { Footer } from '../../components/Footer';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import Products from '../../components/ProductGrid';
import DialogPopup from '../../components/DialogPopup';
import Row from 'react-bootstrap/Row';
import SearchBar from '../../components/searchBar/SearchBar'
function AddProduct() {
  const [modalOpen1, setModalOpen1] = React.useState(false);
  const [searcheditem, setSeracheditem] = React.useState("");
   

const handleCallbackname = (childData) => {
    this.state.searched_item = childData;
}
   return (
    <div style={{backgroundColor: "white"}}>
    <Topbar/>
      <div style={{backgroundColor: "white",height:"100%"}} className="container-fluid">      
          <div  ><Sidebar text="addProduct" /> </div>
          <Row></Row>
          <div className="container-fluid" style={{backgroundColor:"white", marginTop:"4%",height:"100vh",minWidth:"70vw" }} >
            <Products ></Products>
          </div>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <div style={{marginTop:'0.5%',boxShadow: "5px 5px 4px 5px #9E9E9E",marginLeft:'-30%',backgroundColor: "white",height: '4%', width: '70%'}}>
          <SearchBar></SearchBar>
          </div>
          
          <Button
            variant="contained"
            startssIcon={<AddCircleOutlineOutlinedIcon />}
            style={{marginTop:'0.5%', backgroundColor: "rgba(13,21,96,255)", color: "white", border: "1px solid blue", height: '6%', width: '11%',marginLeft:'2%'}}
            onClick={() => {   
              setModalOpen1(true)
            }}
          >
            +Add
          </Button>
         
      </div>
    
   
      {modalOpen1 && (
      <DialogPopup
          title1="Product"
          formType="3"
          name=""
          price=""
          purprice=""
          qty=""
          desc=""
          ctg=""
          subctg=""
          img='https://pixabay.com/illustrations/download-download-now-download-icon-1915750/'
          action="Add"
          setOpenModal={setModalOpen1}
      ></DialogPopup>)}
        <Footer/>
     </div>  
      );    
}
export default AddProduct;