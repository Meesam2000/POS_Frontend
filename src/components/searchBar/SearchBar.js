import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  //borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  height:'80%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(1,1,1,1),
  height: '80%',
  position: 'absolute',
  pointerEvents: 'all',
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '10ch',
      '&:focus': {
        width: '35ch',
      },
    },
  },
}));

export default function SearchAppBar() {


  const [Key,setKey]=React.useState("");

  let setmyValue=(e)=>{
   if(e.key==='Enter')
   {
     alert(e.target.value)
   }
  }
  return (
    <Box >
    
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              
            onKeyDown={(newValue) => {
              setmyValue(newValue)
              //this.props.parentCallbackname(newValue);
            }
            }
      
              //onRequestSearch={() => doSomethingWith(this.state.value)}
              placeholder="Search Products…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Box>
  );
}