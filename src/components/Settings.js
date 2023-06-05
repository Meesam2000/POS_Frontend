import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Edittt from '../components/Edit'
import axios from 'axios'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(0),
        minWidth: 150,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(0.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

export default function CustomizedMenus(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteItem = () => {
        var txt;
        if (window.confirm("Are you sure you want to delete " + props.n + "?")) {
            const obj = {
                objname: props.n,
                objdesc: props.d
            };

            axios.post("http://localhost:5000/category/deleteCat",
            {   ctgname:obj.objname,
            })
            .then(res=> {
                if(res.status === 200){
                    console.log("item deleted");
                    // getCategories();
                    localStorage.setItem("isDelete",true)
                }
                else{
                    alert("error occured");
                }
            })
            .catch(err=> console.log("error Occured", err))

            
            // alert("ID OF CATEGORY DELETED " + obj.objname);
            setAnchorEl(null);

        } else {
            setAnchorEl(null);
        }
    };

    return (
        <div>
            <Button
                style={{ outline: "none", color: "rgba(13,21,96,255)" }}
                startIcon={<MoreVertIcon />}
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableElevation
                onClick={handleClick}

            >
            </Button>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem disableRipple>
                    <Edittt icontitle="Edit" nam={props.n} des={props.d} title="Category" subctg="1"
                    ></Edittt>
                </MenuItem>
                <br></br>


                <MenuItem onClick={deleteItem}
                    disableRipple>

                    &nbsp; &nbsp; <DeleteIcon />
                    &nbsp; Delete
                </MenuItem>


            </StyledMenu>
        </div>
    );
}