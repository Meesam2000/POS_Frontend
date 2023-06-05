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

    const openSubctgForm = () => {
        alert("SubcategoryForm");
    };

    const openItemForm = () => {
        alert("ItemForm");
    }
    const deleteSubctg = () => {
        if (window.confirm("Are you sure you want to delete " + subctg11 + "?")) {
            const subctgObj = {
                //SubCategory Object to be deleted!
                nameS: subctg11,
                descS: subdesc11,
                typeS: subtype11,
            };
            alert(
                "Details of Subcategory Object to be deleted : " +
                subctgObj.nameS +
                " " +
                subctgObj.descS +
                " " +
                subctgObj.typeS
            );
        } else {
        }
    }
    return (
        //Row of Main Category Header
        <React.Fragment>
          

            <Divider style={{ Color: '#F2F5FD' }}></Divider>
          
            <TableRow style={{ backgroundColor: 'white', height: "1px" }}>
                <TableCell style={{ height: "2px", paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse  in={open} timeout="auto" unmountOnExit>
             
                    

                        <Box sx={{ margin: -1 }}>
                        
                            <Table size="small" aria-label="purchases">
                            {alert(row.myname)}
                                <colgroup>
                                    <col style={{ width: "95%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />
                                    <col style={{ width: "1%" }} />

                                </colgroup>
                                <TableBody>
                               
                                    {row.subcategories.map((historyRow) => (

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
                                                    nam={historyRow.subname}
                                                    items_arr1={historyRow.item_arr}
                                                ></Item>

                                            </TableCell>
                                            <TableCell align="right">
                                                <Button
                                                    style={{ outline: "none", color: "black" }}
                                                    startIcon={<DeleteIcon></DeleteIcon>}
                                                    size="small"
                                                    onClick={() => {
                                                        subctg11 = historyRow.subname;
                                                        subdesc11 = historyRow.subdescription;
                                                        subtype11 = historyRow.type;
                                                        deleteSubctg();
                                                    }}
                                                ></Button>
                                            </TableCell>





                                        </TableRow>
                                    ))}
                                </TableBody>
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