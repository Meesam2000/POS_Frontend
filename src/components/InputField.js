import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField } from "@material-ui/core";
class InputField extends React.Component {
  // state = {
  // name: "",
  //};

  onTrigger = (e) => {
    this.props.parentCallbackname(e.target.value);
    e.preventDefault();
  };

  //handleChange = (e) => {
  // this.setState({ name: e.target.value });
  //};

  render() {
    return (
      <TextField
        name="name1"
        width="200px"
        onChange={this.onTrigger}
        fullWidth
      ></TextField>
    );
  }
}

export default InputField;