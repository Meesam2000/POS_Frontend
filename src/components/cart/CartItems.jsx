import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';
import { IconButton, ListItemSecondaryAction, ListItemContent } from '@mui/material'
import { Typography } from '@material-ui/core';

export default function CartItems({ id, name, image, price, qty, maxqty, onClick, plusItem, minusItem }) {
    return (
        <div>
            <List sx={{ width: '100%' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt={name} src={image} />
                    </ListItemAvatar>
                    <ListItemText sx={{ width: '30px' }} primary={name} secondary={price} />
                    <div className="flex flex-wrap justify-content-center align-items-center">
                        <div>
                        <IconButton disabled={qty === 1} onClick={() => minusItem(id)}>
                            <RemoveCircleOutlineRoundedIcon />
                        </IconButton>
                        </div>
                        <div>{qty}</div>
                        <div>
                        <IconButton disabled={qty === maxqty} onClick={() => plusItem(id)}>
                            <AddCircleOutlineRoundedIcon />
                        </IconButton>
                        </div>
                    </div>

                    <ListItemSecondaryAction>
                        <IconButton onClick={onClick}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
}
