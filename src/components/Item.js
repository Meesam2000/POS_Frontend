import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ViewListIcon from "@mui/icons-material/ViewList";
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [mylist,setmylist]=React.useState([]);

  const getList = async () =>{
    await axios.post("http://localhost:5000/subCategory/getAllItems",
    { ctgname:props.main_category,
      subctgname: props.nam
    })
    .then(res=>{
      if(res.status === 200){
        setmylist(res.data.result.map(item=>{
          return {
            i_name: item.itemname,
            i_description: item.itemdescription,
            i_price: item.itemprice,
            i_qnt: item.itemqnt,
            i_typectg: item.ctgname,
            i_subctg: item.subctgname
        }
        }));
      }
      else{
        console.log("items are missing");
      }
    })
    .catch(err=> console.log("Error occured", err))

  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div>
      <div onClick={handleClickOpen}>
      <Button
        style={{color:"black",outline:"none"}}
        startIcon={<ViewListIcon />}
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        onClick={getList}
      
      >
      </Button>
       
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar style={{ backgroundColor: "rgba(13,21,96,255)" }}>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <h5>View All Products Of "{props.nam}"</h5>
            </Typography>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="inherit" onClick={handleClose}>
              CLOSE &nbsp;&nbsp;&nbsp;
            </Button>
          </Toolbar>
          <Divider></Divider>
          <Divider></Divider>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>ITEM NAME</StyledTableCell>
                  <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
                  <StyledTableCell align="right">
                    PRICE&nbsp;(Rs)
                  </StyledTableCell>
                  <StyledTableCell align="right">QUANTITY</StyledTableCell>
                  <StyledTableCell align="right">CATEGORY</StyledTableCell>
                  <StyledTableCell align="right">SUBCATEGORY</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mylist.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.i_name}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      {row.i_description}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.i_price}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.i_qnt}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.i_typectg}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.i_subctg}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AppBar>
      </Dialog>
    </div>
  );
}