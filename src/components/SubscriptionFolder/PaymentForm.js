import React from "react";
import InputField from "../SubscriptionFolder/SubscFormField";


class PaymentForm extends React.Component {
    state = {
        card_number: "",
        security_code: "",
        date1: "",
        country1:""
    }
    handleCallbackcardnumber = (childData) => {
        this.state.card_number = childData;
    }
    handleCallbacksecuritycode = (childData) => {
        this.state.security_code = childData;
    }
    handleCallbackdate = (childData) => {
        this.state.date1 = childData;
    }

    handleCallbackcountry = (childData) => {
        this.state.country1 = childData;
    }
    onTrigger = (e) => {
        var error1 = document.getElementById("cardnumber")
        var error2 = document.getElementById("securitycode")
        var error3 = document.getElementById("date")
       
        //document.getElementById("cardnumber").innerHTML = "bsbb"
        //alert(this.state.card_number);
        if(this.state.card_number.length == "") {
            error1.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
       else {
            if (/^[.]$/.test(this.state.card_number)) {
                error1.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                    "*non-numeric values not allowed! </span>"
            }
            else if (this.state.card_number.length !=16){
              error1.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                  "*Length should be 16 digits!! </span>"
          }
        else {
            error1.innerHTML = ""
        }
    }
        if (this.state.security_code == "") {

            error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
        else {
            if (/^[.]$/.test(this.state.security_code)) {
                error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                    "*non-numeric values not allowed! </span>"
            }
            else if (this.state.security_code.length !=3){
              error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                  "*Length should be 3 digits!! </span>"
          }
            else if (!/^[0-9]\d*$/.test(this.state.security_code)) {
                error2.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                    "*Only numbers allowed! </span>"
            }
            else {
                error2.innerHTML = ""
            }

        }
        if (this.state.date1 == "") {

            error3.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
                "* Required </span>"
        }
         else {
                error3.innerHTML = ""
            }
        
       
        if (this.state.card_number != "" && this.state.security_code!= "" && this.state.date1 != "" && this.state.card_number.length ==16&& this.state.security_code.length==3) {
            //this.props.parentCallbackcardnumber(this.state.card_number);
            //this.props.parentCallbacksecuritycode(this.state.security_code);
            //this.props.parentCallbackdate(this.state.date1);
            //this.props.parentCallbackcountry(this.state.country1);

            // alert("this.props.type_subcategory : "+this.props.typeSubctg1);

            const obj =     //ItemObj object to be added in DB
            {
                cardnumber: this.state.card_number,
                securitycode: this.state.security_code,
                date: this.state.date1,
                country: this.state.country1,
               
            }
            const p1= this.props.pricing1;
            const myarray=p1.split(" ");
            alert(obj.cardnumber + " " + obj.securitycode + " " + obj.date + " " + obj.country +" "+ myarray[0]);

            //this.props.parentCallBackClose();
            e.preventDefault();
      }
    };




  //state = { cardnumber: 0 };
  render() {
   
    return (
     <>
      <h3
          style={{
            textAlign: "center",
            fontFamily: "fantasy",
            textShadow: "revert-layer",
            color: "rgb(14, 25, 104)",
          }}
        >
          <b>Subscription Payment</b>
        </h3>
       <br></br>
      <h6 style={{textAlign:'center'}}>You Choose:{this.props.pricing1}</h6>
      <form
        style={{
          height: "80%",
          width: "560px",
          borderBlockStyle: "solid",
          flex: "centre",
          padding: "40px",
         
          borderRadius: "7px",
          boxShadow: "inherit",
          borderLeftStyle: "double",
          borderRightStyle: "double",
          textShadow:"-moz-initial"
        }}
      >
       
       
        <label style={{ color: "rgb(14, 25, 104)" }}>
          <b> Credit Card Number : </b>
        </label>
        <br></br>
        <InputField type1="number" parentCallbackfield={this.handleCallbackcardnumber} ></InputField>
       
        <span id="cardnumber"></span>
        <br></br>
        <label style={{ color: "rgb(14, 25, 104)" }}>
          <b> Country : </b>
        </label>
        <br></br>
        <InputField type1="text" placeholder="Pakistan"></InputField>
        <br></br>
        <br></br>
        
        <label style={{ color: "rgb(14, 25, 104)" }}>
          <b> Security Code : </b>
        </label>
        <br></br>
        <InputField type1="number" parentCallbackfield={this.handleCallbacksecuritycode}></InputField>
       
        <span id="securitycode"></span>
        <br></br>
        <label style={{ color: "rgb(14, 25, 104)" }}>
          <b> Expiration Date : </b>
        </label>
        <br></br>
        <InputField type1="date" parentCallbackfield={this.handleCallbackdate}></InputField>
       
        <span id="date"></span>
        <br></br>
        <input
          type="button"
          value="Check Out"
          onClick={this.onTrigger}
           style={{
            width: "95%",
            height: "50px",
            paddingLeft:'170px',
            fontWeight: "bolder",
            borderRadius: "12px",
            color: "white",
            backgroundColor: "rgb(14, 25, 104)",
            fontSize: "18px",
            fontFamily: "sans-serif",
            boxShadow: "revert",
            borderColor: "rgb(14, 25, 104)",
          }}
        ></input>
<br></br><br></br><br></br><br></br>
        <p style={{ fontSize: "12px" }}>
          Your subscription will automatically renew after your alloted time. If you cancel, previous charges will not be
          refunded, but you may continue to use the service until the end of the
          term you paid for. By clicking the "Check out" button above, you are
          agreeing to our Terms of Service and acknowledge that you have read
          our Privacy Policy.
        </p>
      </form>
      </>
    );
  }
}
export default PaymentForm;