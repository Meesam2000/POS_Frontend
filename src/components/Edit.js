import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from "@material-ui/core";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [editName, setEditName] = React.useState()
    const [editDes, setEditDes] = React.useState()
    let ctgObj, subctgObj;
    let textInput1 = React.createRef();
    let textInput2 = React.createRef();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const onTrigger = (e) => {
        setEditName(props.nam.bind(e.target.value));
    };


    return (
        <div>


            <div onClick={handleClickOpen}>
                &nbsp;&nbsp;&nbsp;&nbsp;<EditIcon />
                &nbsp;{props.icontitle}
            </div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar style={{ backgroundColor: 'rgba(13,21,96,255)' }}>

                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            <h5>Edit "{props.nam}" {props.title}</h5>
                        </Typography>
                        <Button autoFocus color="inherit"
                            onClick={() => {
                                if (textInput1.current.value != "" && textInput2.current.value != "") {

                                    if (props.subctg == "1") {
                                        const prevCtgObj =    //Category object to be edited in DB      
                                        {
                                            nameCtg: props.nam,
                                            descCtg: props.des,
                                        }
                                        alert("Edit: " + prevCtgObj.nameCtg + " " + prevCtgObj.descCtg);

                                        const newCtgObj =    //Category object to be edited in DB      
                                        {
                                            nameCtg: textInput1.current.value,
                                            descCtg: textInput2.current.value,
                                        }
                                        alert("Edit New : " + newCtgObj.nameCtg + " " + newCtgObj.descCtg);
                                    }

                                    else if (props.subctg == "2") {
                                        const prevSubctgObj =    //SubCategory object to be edited in DB      
                                        {
                                            nameSubctg: props.nam,
                                            descSubctg: props.des,
                                            typeSubctg: props.type1,
                                        }
                                        alert("Edit: " + prevSubctgObj.nameSubctg + " " + prevSubctgObj.descSubctg + " " + prevSubctgObj.typeSubctg);

                                        const newSubctgObj =    //Category object to be edited in DB      
                                        {
                                            nameSubctg: textInput1.current.value,
                                            descSubctg: textInput2.current.value,
                                            typeSubctg: props.type1,
                                        }
                                        alert("Edit New SubCategory Obj: " + newSubctgObj.nameSubctg + " " + newSubctgObj.descSubctg + " " + newSubctgObj.typeSubctg);
                                    }
                                }
                                else {
                                    alert("Please Enter New Info to Save!");
                                }
                            }}
                        >
                            Save Changes
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button
                            //edge="start"
                            color="inherit"
                            onClick={handleClose}
                        //aria-label="close"
                        >
                            CLOSE
                            &nbsp;&nbsp;&nbsp;

                        </Button>
                    </Toolbar>
                </AppBar>

                <List>
                    <br></br>

                    <ListItem fullWidth>
                        <h6> &nbsp;&nbsp;&nbsp;Previous Name: </h6>&nbsp;&nbsp;
                        <TextField value={props.nam}></TextField>
                    </ListItem>
                    <ListItem fullWidth>
                        <h6> &nbsp;&nbsp; Previous Description: </h6>&nbsp;&nbsp;
                        <textarea value={props.des} cols={75} fullWidth></textarea>
                    </ListItem>
                </List>
                <h5 align="left" style={{ color: "blue" }}> &nbsp;&nbsp;&nbsp;&nbsp; Edit Information here...</h5>
                <List>
                    <br></br>
                    <h6> &nbsp;&nbsp;&nbsp;&nbsp; Edit Name: </h6>
                    <ListItem fullWidth>

                        <input name="field1" ref={textInput1} style={{ width: "200px" }} fullWidth></input>
                    </ListItem>
                    <h6 > &nbsp;&nbsp;&nbsp;&nbsp; Edit Description: </h6>
                    <ListItem fullWidth>

                        <textarea name="field2" ref={textInput2} cols={150} rows={3} fullWidth></textarea>
                    </ListItem>
                </List>


            </Dialog>
        </div>
    );
}