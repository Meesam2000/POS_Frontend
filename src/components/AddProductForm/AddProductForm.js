import React, { useEffect, useState } from "react";
import { Form, Field } from "@progress/kendo-react-form";
import { TextArea } from '@adobe/react-spectrum'
import './AddProductForm.css'
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import Dropdown1 from '../dropdown/Dropdown'
import UploadImages from "../uploadImage/UploadImage";
import DescriptionIcon from '@mui/icons-material/Description';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'

const AddProductForm = (props) => {


  const [id, setId] = useState(props.id);
  const [name1, setName1] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [qtn, setQtn] = useState(props.qty);
  const [desc, setDesc] = useState(props.desc);
  const [category, setCategory] = useState(props.ctg);
  const [subctg, setSubctg] = useState(props.subctg);
  const [purPrice, setpurPrice] = useState(props.purprice);
  const [img, setImg] = useState(props.img);

  // const [id, setId] = useState(null);
  // const [name1, setName1] = useState('');
  // const [price, setPrice] = useState(null);
  // const [qtn, setQtn] = useState(null);
  // const [desc, setDesc] = useState('');
  // const [category, setCategory] = useState('');
  // const [subctg, setSubctg] = useState('');
  // const [purPrice, setpurPrice] = useState(null);
  // const [img, setImg] = useState(null);
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])



  useEffect(() => {
    getAllCategories();
  }, [])


  const onInpuChange = (fileData) => {
    setImg(fileData)
    alert(fileData)
  };

  const handleCallbacktype = (childData) => {
    setCategory(childData)
    getSubCtg(childData)
    // alert("Category : " + category);
  };
  const handleCallbacksubctg = (childData) => {
    setSubctg(childData);
    // alert("Sub-Category : " + subctg);
  };
  const handleName = (e) => {
    e.preventDefault();
    setName1(e.target.value)
  };
  const handlePrice = (e) => {
    e.preventDefault();
    setPrice(e.target.value)
  };
  const handleqtn = (e) => {
    e.preventDefault();
    setQtn(e.target.value)
  };
  const handleDesc = (e) => {
    e.preventDefault();
    setDesc(e.target.value)
  };
  const handleCallbackimg = (childData) => {
    console.log("image " + childData);
    setImg(childData);
  }

  const onTrigger = (e) => {

    var name_err = document.getElementById("Iname");
    var price_err = document.getElementById("Iprice");
    var qtn_err = document.getElementById("Iquantity");
    var pur_price = document.getElementById("Ipurprice");
    var desc_err = document.getElementById("Idescription");
    if (name1 == "") {
      name_err.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
        "* Required </span>"
    }
    else if (name1 != "") {
      name_err.innerHTML = ""
    }
    if (price == "") {

      price_err.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
        "* Required </span>"
    }
    else {
      if (/^[0]$/.test(price)) {
        price_err.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
          "*Zero and non-numeric values not allowed! </span>"
      }
      else if (!/^[1-9]\d*$/.test(price)) {
        price_err.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
          "*Only numbers allowed! </span>"
      }
      else {
        price_err.innerHTML = ""
      }

    }
    if (qtn == "") {

      qtn_err.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
        "* Required </span>"
    }
    else {
      if (!/^[0-9]*$/.test(qtn)) {
        qtn_err.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
          "*Only numbers allowed! </span>"
      }
      else {
        qtn_err.innerHTML = ""
      }
    }
    if (purPrice == "") {

      pur_price.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
        "* Required </span>"
    }
    else {
      if (/^[0]$/.test(purPrice)) {
        pur_price.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
          "*Zero and non-numeric values not allowed! </span>"
      }
      else if (!/^[0-9]*$/.test(purPrice)) {
        pur_price.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
          "*Only numbers allowed! </span>"
      }
      else {
        pur_price.innerHTML = ""
      }
    }
    if (desc == "") {
      desc_err.innerHTML = "<span style='color: red;font-size:13px;font-weight:bold;'>" +
        "* Required </span>"
    }
    else {
      desc_err.innerHTML = ""
    }
    if (name1 != "" && price != "" && qtn != "" && desc != "" && purPrice != "") {
      e.preventDefault();

      var formData = new FormData();
      formData.append('productName', name1)
      formData.append('productPrice', price)
      formData.append('productPurchasePrice', purPrice)
      formData.append('productQty', qtn)
      formData.append('productDesc', desc)
      formData.append('productCtgName', category)
      formData.append('productSubCtgName', subctg)
      formData.append('image', img)

      if (props.action1 == "Add") {
        alert('Product Added Successfully !!!')
        addProduct(formData)
      }
      else if (props.action1 == "Edit") {
        // alert("Updated!")
        // formData.append('id', id)
        // updateProduct(formData)
      }
    }
  }

  const addProduct = (productObj) => {
    axios.post("http://localhost:5000/products/addProduct",
      productObj
      , { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
        if (response.data.status === 200) {
          console.log("Product Added Successfully !");
        }
        else {
          console.log(response.data);
          console.log("Product Add nai hoi ha");
        }
      })
  }
  const updateProduct = (productObj) => {
    axios.post("http://localhost:5000/products/updateProduct",
      productObj
      , { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
        if (response.data.status === 200) {
          console.log("Product Updated Successfully !");
        }
        else {
          console.log(response.data);
          console.log("Something Went Wrong!!!");
        }
      })
  }

  const getAllCategories = async () => {
    await axios.get("http://localhost:5000/category/getAllCatData").then((response) => {
      if (response.data.status === 200) {
        const data = response.data.result
        const obj = data.map(value => {
          return {
            name: value.ctgname,
          }
        })
        setData(obj);
      }
      else {
        console.log(response.data);
        console.log("Categories ka data nai aya ");
      }
    })
  }
  const getSubCtg = async (ctg) => {
    await axios.post("http://localhost:5000/subCategory/getAllSub", { ctgname: ctg })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.result)
          setData2(res.data.result.map(item => {
            return {
              name: item.subctgname,
            }
          }))
        }
        else {
          console.log("subcategories are missing");
        }
      })
      .catch(err => console.log("Error Occured", err))
  }
  const handleSubmit = (data) => {

  }
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1)
    },
    inputLabelNoShrink: {
      transform: "translate(32px, 24px) scale(1)"
    }
  }));

  const classes = useStyles();
  // const Name1 = name1.length > 0;
  // const Price1 = price.length>0;
  // const Qty1 = qtn.length > 0;
  // const PurPrice1 = purPrice.length > 0;

  return (
    <Container maxWidth="sm">
      <Form
        onSubmit={handleSubmit}
        render={(formRenderProps) => (
          <form onSubmit={formRenderProps.onSubmit}>

            <div className="container fluid" style={{ marginBottom: '4%' }}>
              <div className="row">

                <div className="col-md-6" style={{ marginLeft: '-4%' }}>
                  <Dropdown1 fontSize='12' type1="Category" array1={data}
                    parentCallbacktype={handleCallbacktype} ></Dropdown1>
                </div>

                <div className="col-md-6" style={{ marginLeft: '2%' }}>
                  <Dropdown1 fontSize='12' type1="Subcategory" array1={data2}
                    parentCallbacksubctg={handleCallbacksubctg}></Dropdown1>
                </div>
              </div>
            </div>

            <p><b>Product Details</b></p>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Product Name"
              defaultValue={props.name}
              onChange={(event) => {
                setName1(event.target.value);
              }}
              // InputLabelProps={{
              //   className: Name1||props.name ? undefined 
              //   :
              //    classes.inputLabelNoShrink,
              // }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CategoryIcon></CategoryIcon>
                  </InputAdornment>
                ),
              }}
            />
            <span id="Iname"></span>



            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Product Price"
              defaultValue={props.price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              // InputLabelProps={{
              //   className: Price1||props.price ? undefined : classes.inputLabelNoShrink,
              // }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{ fontSize: "200px" }}>
                    <PaidIcon></PaidIcon>
                  </InputAdornment>
                ),
              }}
            />
            <span id="Iprice"></span>

            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Product Quantity"
              defaultValue={props.qty}
              onChange={(event) => {
                setQtn(event.target.value);
              }}
              // InputLabelProps={{
              //   className: Qty1||props.qty ? undefined : classes.inputLabelNoShrink,
              // }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ProductionQuantityLimitsIcon />
                  </InputAdornment>
                ),
              }}
            />
            <span id="Iquantity"></span>

            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="Purchase Price"
              defaultValue={props.purprice}
              onChange={(event) => {
                setpurPrice(event.target.value);
              }}
              // InputLabelProps={{
              //   className: PurPrice1||props.purprice ? undefined : classes.inputLabelNoShrink,
              // }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PriceCheckIcon></PriceCheckIcon>
                  </InputAdornment>
                ),
              }}
            />
            <span id="Ipurprice"></span>
            <br></br>

            <h6><PhotoCameraIcon></PhotoCameraIcon> Upload Product Image</h6>
            <UploadImages
              parentCallbackimg={handleCallbackimg}
              style={{ marginLeft: "50%" }}
              img={props.img}
            ></UploadImages>
            <br></br>
            <h6><DescriptionIcon></DescriptionIcon> Description</h6>
            <TextArea
              aria-label="desc"
              placeholder="Write description here..."
              id="tx1"
              defaultValue={props.desc}
              onChange={setDesc}
            />
            <span id="Idescription"></span>
            <br></br>

            <button
              style={{
                color: "white",
                backgroundColor: "#0b0e2e",
                padding: "5px",
                height: "40px",
              }}
              onClick={onTrigger}
            >


              {props.action1 == "Add"
                ?
                <AddCircleIcon></AddCircleIcon>
                :
                props.action1 == "Edit"
                  ?
                  <EditIcon></EditIcon>
                  :
                  alert("nothing")
              }
            </button>
          </form>

        )}>
      </Form>
    </Container>
  );
}
export default AddProductForm