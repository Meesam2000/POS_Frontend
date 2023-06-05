import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
const dropdown = (props) => {
  const state = {
    type: "",
  };
  const handleChange = (event) => {
    if (props.type1 == "Category") {
      props.parentCallbacktype(event.target.value);
    } else if (props.type1 == "Subcategory") {
      props.parentCallbacksubctg(event.target.value);
    }
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid>
      <Item>
        <div>
          <InputLabel id="demo-simple-select-filled-label">
            Select {props.type1}
          </InputLabel>
          <FormControl variant="filled" sm={{ m: 4, minWidth: 120 }}>
            <Select
              fullWidth
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value="hello"
              onChange={handleChange}
            >
              {props.array1.map((row) => (
                <MenuItem
                  style={{
                    display: "flex",
                    marginLeft: "8px",
                    paddingRight: "9px",
                  }}
                  value={row.name}
                 
                >
                  <em>{row.name}</em>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Item>
    </Grid>
  );
};

export default dropdown