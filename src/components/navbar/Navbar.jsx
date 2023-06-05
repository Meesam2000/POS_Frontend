import React from "react";
import "./Navbar.css";
import logo2 from '../../images/logo_gpos.png';
import { Button, styled, alpha, InputBase } from '@material-ui/core';
import UserImage from '../UserImage'

export default function Topbar() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '18ch',
        '&:focus': {
          width: '25ch',
        },
      },
    },
  }));
  const logoutHandler = () => {
    localStorage.clear()
    window.location.href = '/register'
  }
  
  
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"> <div><img src={logo2} alt="GPOS" width={140} height={40} /></div></span>
        </div>
        <div className="topRight">
        <Search style={{ marginRight: '5%',color:'white' }}>
       
       <StyledInputBase
         placeholder="  Search…"
         inputProps={{ 'aria-label': 'search' }}
       />
     </Search>
     <div style={{width: '200px'}}></div>
     <Button href="#" style={{ color: 'white', marginRight:'5%' }} onClick={logoutHandler}>Logout</Button>
     <div style={{width: '10px'}}></div>
        
        <UserImage ></UserImage>
        </div>
      </div>
    </div>
  );
}
