import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CategorySelect(props) {

    const [ctg,setCtg] = React.useState('All')
    const categories = props.categories
    const handleChange = (event) => {
        setCtg(event.target.value)
        props.onSelectCtg(event.target.value)
    };

    return (
        <div>
            <FormControl variant="standard" sx={{minWidth: 150,marginTop:'0px',marginBottom:'5px' }}>
                <InputLabel id="demo-simple-select-standard-label">Select Category</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={ctg}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="All">
                        <em>All</em>
                    </MenuItem>
                    {
                        categories.map(ctg => (
                            <MenuItem value={ctg.name}>{ctg.name}</MenuItem>

                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
}
