import React from 'react'
import axios from 'axios'
import InputField from './InputField'
import TextArea from './TextArea'
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/Add";
import Button from "@mui/material/Button";


class PopupForm extends React.Component {
    state = {
        name1: "",
        description: "",
    }
    handleCallbackname = (childData) => {
        this.state.name1 = childData;
    }
    handleCallbackdesc = (childData) => {
        this.state.description = childData;
    }
    onTrigger = (e) => {

        var error1 = document.getElementById("errorMsg1")
        var error2 = document.getElementById("errorMsg2")
        if (this.state.name1 == "" && this.state.description == "") {

            error1.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
            error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
        else if (this.state.name1 == "") {
            error1.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
            error2.innerHTML = ""
        }
        else if (this.state.description == "") {
            error1.innerHTML = ""
            error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
        else {
            this.props.parentCallbackname1(this.state.name1);
            this.props.parentCallbackdesc1(this.state.description);
            this.props.parentCallBackClose();
            // alert("this.props.type_category : "+this.props.typeCtg);
            if (this.props.mainctg === "1") {
                const subCtgObj =
                //Sobcategory object to be added in DB
                {
                    subCatName: this.state.name1,
                    subCatDescription: this.state.description,
                    subCatCategory: this.props.typeCtg,
                };


                axios.post("http://localhost:5000/subCategory/addSubCat", {
                    subCtgObj
                }).then((response) => {
                    if (response.data.status === 200) {

                        console.log(response.data );
                        // console.log("Category Add ho gai ha" + response.data);

                    }
                    else {
                        console.log(response.data);
                        console.log("Sub Category Add nai hoi ha");
                    }
                })
                // alert(
                //     subctgObj.nameSubctg +
                //     " " +
                //     subctgObj.descSubctg +
                //     " " +
                //     subctgObj.typeSubctg
                // );
            } else {
                const ctgObj =    //Category object to be added in DB      
                {
                    ctgName: this.state.name1,
                    ctgDescription: this.state.description,
                };



                axios.post("http://localhost:5000/category/addCat", {
                    ctgObj
                }).then((response) => {
                    if (response.data.status === 200) {

                        console.log(response.data);
                        this.props.getAllCategories();
                        // console.log("Category Add ho gai ha" + response.data);
                    }
                    else {
                        console.log(response.data);
                        console.log("Category Add nai hoi ha");
                    }
                })






                // alert("khush" + ctgObj.nameSubctg + " " + ctgObj.descSubctg);
            }

            e.preventDefault();
        }

    };
    render() {

        // const {name1} = this.state;
        // const {description} = this.state;
        return (
            <>
                <form>
                    <label ><b> Name: </b></label>
                    <br></br>
                    <InputField parentCallbackname={this.handleCallbackname}></InputField>
                    <span id="errorMsg1"></span>
                    <br />

                    <br></br>
                    <label ><b> Description: </b></label>
                    <br></br>

                    <TextArea parentCallbackdesc={this.handleCallbackdesc}></TextArea>
                    <br></br> <span id="errorMsg2"></span>
                    <br></br>
                    <Button
                        variant="contained"
                        startIcon={<AddCircleOutlineOutlinedIcon />}
                        onClick={this.onTrigger}
                        color="primary"
                    >
                        Add
                    </Button>

                </form>
            </>
        )
    }
}
export default PopupForm