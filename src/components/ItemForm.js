import React from 'react'
import InputField from './InputField'
import TextArea from './TextArea'
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/Add";
import Button from "@mui/material/Button";

class ItemForm extends React.Component {
    state = {
        i_name: "",
        i_price: "",
        i_quantity: "",

        i_description: "",
    }
    handleCallbackiname = (childData) => {
        this.state.i_name = childData;
    }
    handleCallbackiprice = (childData) => {
        this.state.i_price = childData;
    }
    handleCallbackiqnt = (childData) => {
        this.state.i_quantity = childData;
    }

    handleCallbackidesc = (childData) => {
        this.state.i_description = childData;
    }
    onTrigger = (e) => {
        var error1 = document.getElementById("Iname")
        var error2 = document.getElementById("Iprice")
        var error3 = document.getElementById("Iquantity")
        var error4 = document.getElementById("Idescription")
        document.getElementById("Iname").innerHTML = "bsbb"
        if (this.state.i_name == "") {
            error1.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }

        else {
            error1.innerHTML = ""

        }
        if (this.state.i_price == "") {

            error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
        else {
            if (/^[0]$/.test(this.state.i_price)) {
                error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                    "*Zero and non-numeric values not allowed! </span>"
            }
            else if (!/^[1-9]\d*$/.test(this.state.i_price)) {
                error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                    "*Only numbers allowed! </span>"
            }
            else {
                error2.innerHTML = ""
            }

        }
        if (this.state.i_quantity == "") {

            error3.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
        else {
            if (!/^[0-9]*$/.test(this.state.i_quantity)) {
                error3.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                    "*Only numbers allowed! </span>"
            }
            else {
                error3.innerHTML = ""
            }
        }
        if (this.state.i_description == "") {
            error4.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
        else {
            error4.innerHTML = ""
        }
        if (this.state.i_name != "" && this.state.i_price != "" && this.state.i_quantity != "" && this.state.i_description != "") {
            this.props.parentCallbackname1(this.state.i_name);
            this.props.parentCallbackprice1(this.state.i_price);
            this.props.parentCallbackqnt1(this.state.i_quantity);
            this.props.parentCallbackdesc1(this.state.i_description);

            // alert("this.props.type_subcategory : "+this.props.typeSubctg1);

            const itemObj =     //ItemObj object to be added in DB
            {
                nameItem: this.state.i_name,
                priceItem: this.state.i_price,
                qntItem: this.state.i_quantity,
                descItem: this.state.i_description,
                typeSubctg: this.props.typeSubctg1,
                typeCtg: this.props.typeCtg1,
            }

            alert(itemObj.nameItem + " " + itemObj.descItem + " " + itemObj.priceItem + " " + itemObj.qntItem + " " + itemObj.typeSubctg + " " + itemObj.typeCtg);

            this.props.parentCallBackClose();
            e.preventDefault();
        }
    };
    render() {

        //const {i_name} = this.state;
        //const {i_price} = this.state;
        //const {i_quantity} = this.state;
        //const {i_belongSubctg} = this.state;
        //const {i_description} = this.state;

        return (
            <form>
                <label ><b> Item Name : </b></label>
                <br></br>
                <InputField parentCallbackname={this.handleCallbackiname}></InputField>
                <div id="Iname" ></div>
                <br />
                <br></br>

                <label ><b> Item Price : </b></label>
                <br></br>
                <InputField parentCallbackname={this.handleCallbackiprice}></InputField>
                <span id="Iprice"></span>
                <br />

                <br></br>

                <label ><b> Item Quantity : </b></label>
                <br></br>
                <InputField parentCallbackname={this.handleCallbackiqnt}></InputField>
                <span id="Iquantity"></span>
                <br />
                <br></br>


                <label ><b> Item Description: </b></label>
                <br></br>

                <TextArea parentCallbackdesc={this.handleCallbackidesc}></TextArea> <br>

                </br>
                <span id="Idescription"></span>
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
        )
    }
}
export default ItemForm