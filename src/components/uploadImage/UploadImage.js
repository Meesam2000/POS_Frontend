import React, { Component } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './UploadImage.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default class UploadImages extends Component {
  state={
    profileImg:'https://pixabay.com/illustrations/download-download-now-download-icon-1915750/'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result})
      }
    }
    const file = reader.readAsDataURL(e.target.files[0])
    console.log(file)
    this.props.parentCallbackimg(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
    <div className="Container page" style={{ boxShadow: "1px 1px 2px 2px #9E9E9E",backgroundColor:"#CED0DB"}}>
      <div className="container" >
        <label><b>Add Product Image:</b></label>
        <div className="img-holder" style={{ width:"100px",height:"100px",boxShadow: "5px 5px 4px 5px #9E9E9E"}}>
          <img style={{ width:"100px",height:"100px"}} src={profileImg} id="img" className="img" />
        </div>
        
    </div>
    <div className="label" style={{display:"flex"}}>
          <label className="image-upload" htmlFor="input">
						Choose Product Photo
					</label>        
    </div>
    <div className="imageholder">  
    <input type="file" accept="image/*" name="image" id="input" onChange={this.imageHandler} />
    </div> 
  
   
			
			</div>
		);
	}

}