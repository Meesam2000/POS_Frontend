import React, { useState } from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
    },
})(TextField);

export default function SearchBox(props) {
    function searchedTextHandler(event) {
        if(event.key === 'Enter' && event.target.value !== '')
            props.onClick(event.target.value)
    }
    return (
        <div>
            <CssTextField  id="custom-css-standard-input" label="Search" onKeyDown = {searchedTextHandler}/>
        </div>

    );
}