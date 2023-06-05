import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PopupForm from "./PopupForm";
import ItemForm from "../components/ItemForm";
import AddProductForm from './AddProductForm/AddProductForm'
import SubscForm from './SubscriptionFolder/PaymentForm'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "relative",
            left: "210px",
            top: 0,

            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default class CustomizedDialogs extends React.Component {
  constructor(props) {
    super(props);
    //const [open, setOpen] = React.useState(true);
    this.state = {
      open: "true"
    };
  }

  state = {
    name2: "",
    price2: "",
    qnt2: "",
    subctg2: "",
    description2: "",
    form: "0",
  };

  handleCallbackname1 = (childData) => {
    this.state.name2 = childData;

    console.log("CATEGORY NAME: ");
    console.log(this.state.name2);

  };

  handleCallbackdesc1 = (childData) => {
    this.state.description2 = childData;

    console.log("CATEGORY DESCRIPTION: ");
    console.log(this.state.description2);
  };

  handleCallbackprice1 = (childData) => {
    this.state.price2 = childData;

    console.log("CATEGORY PRICE: ");
    console.log(this.state.price2);
  };

  handleCallbackqnt1 = (childData) => {
    this.state.qnt2 = childData;

    console.log("CATEGORY QUANTITY: ");
    console.log(this.state.qnt2);
  };

  handleCallbacksubctg1 = (childData) => {
    this.state.subctg2 = childData;

    console.log("CATEGORY SUB-CATEGORY: ");
    console.log(this.state.subctg2);
    this.state.form = "false";
  };

  render() {

    const handleClose = () => {
      //setOpen(false);
      this.state.open = "false";
      { this.props.setOpenModal(false); }
    };

    const handleClickOpen = () => {
      // setOpen(true);   
      this.state.open = "false";
    };
    return (
      <div>
        {handleClickOpen}

        <BootstrapDialog
          onClose={handleClose}
          maxWidth="lg"
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <div style={{ display: "flex", justifyContent: 'space-between' }}>
            <BootstrapDialogTitle
              color="rgb(14, 25, 104)"
              id="customized-dialog-title"
            >
              <b>Add {this.props.title1}</b>
            </BootstrapDialogTitle>
          </div>
          <DialogContent>

            {
              this.props.formType == "1"
                ?
                <PopupForm
                  getAllCategories={this.props.getAllCategories}
                  parentCallbackname1={this.handleCallbackname1}
                  parentCallbackdesc1={this.handleCallbackdesc1}
                  typeCtg={this.props.typecategory}
                  mainctg={this.props.mainCtg}
                  parentCallBackClose={handleClose}
                >

                </PopupForm>
                : this.props.formType == "2"
                  ?
                  <ItemForm
                    parentCallbackname1={this.handleCallbackname1}
                    parentCallbackdesc1={this.handleCallbackdesc1}
                    parentCallbackprice1={this.handleCallbackprice1}
                    parentCallbackqnt1={this.handleCallbackqnt1}
                    parentCallbacksubctg1={this.handleCallbacksubctg1}
                    typeCtg1={this.props.typectg}
                    typeSubctg1={this.props.typeSubctg}
                    action={this.props.action}
                    parentCallBackClose={handleClose}
                  ></ItemForm>
                  : this.props.formType == "3"
                    ?
                    <AddProductForm
                      action1={this.props.action}
                      id = {this.props.id}
                      name={this.props.name}
                      price={this.props.price}
                      purprice={this.props.purprice}
                      qty={this.props.qty}
                      desc={this.props.desc}
                      ctg={this.props.ctg}
                      subctg={this.props.subctg}
                      img={this.props.img}
                    >

                    </AddProductForm>
                    : this.props.formType == "4"
                    ?
                   <SubscForm pricing1={this.props.pricing1}></SubscForm>
                    : 
                    alert("hh")
            }
          </DialogContent>

        </BootstrapDialog>
      </div>
    );
  }
}