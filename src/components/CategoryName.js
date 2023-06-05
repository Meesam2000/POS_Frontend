import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Divider } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/Add';
import ViewDescription from './ViewDescription'
import Setting from './Settings'
import DeleteIcon from "@mui/icons-material/Delete";
import DialogPopup from "./DialogPopup";
import Edit from './Edit';
import Item from './Item'
import axios from 'axios'


function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen1, setModalOpen1] = React.useState(false);
    // const [type_ctg, setType_ctg]=React.useState("");
    var type_ctg, form1, typesubctg, type_ctg1, name;
    const [name1, setName1] = React.useState("");
    const [ctg1, setCtg1] = React.useState("");
    var subctg11, subdesc11, subtype11;
    const [Subcategories,setSubCategories]=React.useState([])
    const [isSetSub,setIsSetSub]=React.useState(false)

    let sadaobj=[];
    const openSubctgForm = () => {
        alert("SubcategoryForm");
    };

    const openItemForm = () => {
        alert("ItemForm");
    }

    const getCategories = async () =>{
    setOpen(true);
    await axios.post("http://localhost:5000/subCategory/getAllSub",{ctgname:row.myname})
    .then( res=>{
        if(res.status === 200){
            console.log(res.data.result)
            setSubCategories(res.data.result.map(item=> {
                return  {
                    subname : item.subctgname,
                    subdescription: item.subctgdescription,
                    type: item.ctgname
                }
            }))
        }
        else{
            console.log("subcategories are missing");
        }
    })
    .catch(err=> console.log("Error Occured", err))
    }
    const deleteCategory = async (subname, type) => {
        await axios.post("http://localhost:5000/subCategory/deleteSubCat",
        {   ctgname:type,
            subctgname: subname,
        })
        .then(res=> {
            if(res.status === 200){
                console.log("item deleted");
                getCategories();
            }
            else{
                alert("error occured");
            }
        })
        .catch(err=> console.log("error Occured", err))
    }
    return (
        //Row of Main Category Header
        <React.Fragment>
            <TableRow style={{ color: "#B3B4B9", backgroundColor: "#EEF0F7" }} sx={{ '& > *': { borderBottom: 'set', borderShadow: '2px solid transparent', px: 3 } }}>

                <TableCell style={{ color: "rgba(13,21,96,255)" }} component="th" scope="row" onClick={true}>
                    <h6> <b>{row.myname}</b></h6>
                </TableCell>
                <TableCell align='right'>
                    <ViewDescription color1="rgba(13,21,96,255)" n={row.myname} d={row.mydescription}></ViewDescription>
                </TableCell>
                <TableCell align='right'>
                    <Button
                        style={{ outline: "none", color: "rgba(13,21,96,255)" }}
                        startIcon={<AddCircleOutlineOutlinedIcon />}
                        onClick={() => {
                            setModalOpen(true);
                            form1 = "1"
                            //setType_ctg(historyRow.type);
                            type_ctg = row.myname;
                            name = row.myname;
                            openSubctgForm();
                        }}
                    >
                    </Button>
                </TableCell>
                <TableCell align='right'>
                    
                        {open ?
                            <IconButton
                                style={{ outline: "none", color: "rgba(13,21,96,255)" }}
                                aria-label="expand row"
                                size="small"
                                onClick={()=>setOpen(false)}
                                > 
                                <KeyboardArrowUpIcon />
                                </IconButton>
                        :
                        <IconButton
                        style={{ outline: "none", color: "rgba(13,21,96,255)" }}
                        aria-label="expand row"
                        size="small"
                        onClick={getCategories}
                    >
                        <KeyboardArrowDownIcon />
                    </IconButton> }
                </TableCell>
                <TableCell align='right'>
                    <Setting n={row.myname} d={row.mydescription}></Setting>
                </TableCell>
                {modalOpen && (
                    <DialogPopup
                        title1="SubCategory"
                        formType="1"
                        mainCtg="1"
                        typecategory={row.myname}
                        setOpenModal={setModalOpen}
                    ></DialogPopup>)}
            </TableRow>

            <Divider style={{ Color: '#F2F5FD' }}></Divider>

            <TableRow style={{ backgroundColor: 'white', height: "1px" }}>
                <TableCell style={{ height: "2px", paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>



                        <Box sx={{ margin: -1 }}>

                            <Table size="small" aria-label="purchases">

                                <colgroup>
                                    <col style={{ width: "95%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />

                                </colgroup>

                                { <TableBody>

                                    {Subcategories.map((historyRow) => (

                                        <TableRow key={historyRow.subname}>
                                            <TableCell component="th" scope="row">
                                                <b> {historyRow.subname}</b>
                                            </TableCell>
                                            <TableCell boxSizing="" size="small" align="left">
                                                <ViewDescription n={historyRow.subname} d={historyRow.subdescription} color1="black"></ViewDescription>

                                            </TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    style={{ outline: "none", color: "black" }}
                                                    startIcon={
                                                        <b>
                                                            <AddCircleOutlineOutlinedIcon></AddCircleOutlineOutlinedIcon>
                                                        </b>
                                                    }
                                                    size="small"
                                                    onClick={() => {
                                                        setModalOpen1(true);
                                                        setName1(historyRow.subname);
                                                        setCtg1(historyRow.type);

                                                        //setType_ctg(historyRow.type);
                                                        //typesubctg = historyRow.subname;
                                                        //name1 = historyRow.subname;
                                                        alert(
                                                            "CtegoryName subctg name : " + historyRow.subname + " " + historyRow.type
                                                        );


                                                    }}
                                                ></Button>
                                            </TableCell>

                                            <TableCell align="right">
                                                <Edit nam={historyRow.subname} des={historyRow.subdescription} title="SubCategory" type1={historyRow.type} subctg="1"></Edit>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Item
                                                    main_category={row.myname}
                                                    nam={historyRow.subname}
                                                    items_arr1={historyRow.item_arr}
                                                ></Item>

                                            </TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    style={{ outline: "none", color: "black" }}
                                                    startIcon={<DeleteIcon></DeleteIcon>}
                                                    size="small"
                                                    onClick= {()=> deleteCategory(historyRow.subname, historyRow.type)}
                                                ></Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody> }


                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>

            {modalOpen1 && (
                <DialogPopup
                    title1="Item"
                    formType="2"
                    typeSubctg={name1}
                    typectg={ctg1}
                    setOpenModal={setModalOpen1}
                ></DialogPopup>)}
        </React.Fragment>


    );
}

export default function CollapsibleTable(props) {
    const mylist = props.categories_arr;
    return (

        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <colgroup>
                    <col style={{ width: '89%' }} />
                    <col style={{ width: '2%' }} />
                    <col style={{ width: '2%' }} />
                    <col style={{ width: '2%' }} />
                    <col style={{ width: '5%' }} />
                </colgroup>

                <TableBody>
                    {mylist.map((row) => (
                        <Row key={row.myname} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
}