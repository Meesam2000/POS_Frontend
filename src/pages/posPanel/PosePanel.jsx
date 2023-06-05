import { Divider } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react';
import CartItems from '../../components/cart/CartItems';
import ItemTable from '../../components/pos/ItemTable'
import CategorySelect from '../../components/pos/CategorySelect'
import Reciept from '../../components/pos/Reciept';
import CustomDialog from '../../components/pos/CustomDialog';
import { useReactToPrint } from 'react-to-print';
import axios from 'axios'
import SearchBox from '../../components/SearchBox';

function PosePanel(props) {
    const componentRef = useRef()
    const [subTotal, setSubTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [tax, setTax] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [allItems, setAllItems] = useState([])
    const [filteredItems, setFilteredItems] = useState([])
    const [categories, setCategories] = useState([])
    const [printObj, setPrintObj] = useState({})
    const [open, setOpen] = useState(false)
    
    let cartEnd

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    function saveTransaction() {
        axios.post("http://localhost:5000/transaction/addTransaction",
            { printObj, cartItems }
        ).then(res => {
            if (res.status === 200) {
                alert("Transaction Added")
            }
            else {
                alert("error occured");
            }
        })
            .catch(err => console.log("error Occured", err))
    }

    useEffect(() => {
        updateCart(cartItems)
        cartEnd.scrollIntoView({ behavior: 'smooth' })
    }, [cartItems])

    useEffect(() => {
        getAllProducts()
        getAllCategories()
    }, [])

    useEffect(() => {
        getSelectedCtd('All')
    }, [allItems, categories])

    // useEffect(()=>{
    //     saveTransaction()
    // },[printObj])

    const getAllProducts = async () => {
        await axios.get("http://localhost:5000/products/getAllProducts").then((response) => {
            if (response.data.status === 200) {
                const data = response.data.result
                const obj = data.map(value => {
                    return {
                        productid: value.productid,
                        productname: value.productname,
                        productdesc: value.productdesc,
                        ctgname: value.ctgname,
                        subctgname: value.subctgname,
                        productpurchaseprice: value.productpurchaseprice,
                        productimage: `http://localhost:5000/productImg/${value.productimage}`,
                        productqty: value.productqty,
                        productprice: value.productprice
                    }
                })
                setAllItems(obj);
            }
            else {
                console.log("Products ka data nai aya ");
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
                setCategories(obj);
            }
            else {
                console.log(response.data);
                console.log("Categories ka data nai aya ");
            }
        })
    }


    function deleteItem(id) {
        setCartItems(cartItems.filter(item => (item.productid !== id)))
    }
    function addItem(id) {
        const [item] = filteredItems.filter(item => (item.productid === id))
        const cartIndex = cartItems.findIndex(item => item.productid === id)

        if (cartIndex !== -1) {
            if (cartItems[cartIndex].cartqty < item.productqty) {
                cartItems[cartIndex].cartqty++
                setCartItems([...cartItems])
            }
        }
        else {
            item.cartqty = 1
            setCartItems([...cartItems, item])
        }

    }

    function updateCart(items) {
        const total = items.reduce((acc, val) => acc + (val.cartqty * val.productprice), 0);
        setSubTotal(total)
        setGrandTotal(total - discount + tax)
    }


    function removeItem(id) {
        const cartIndex = cartItems.findIndex(item => item.productid === id)

        if (cartIndex !== -1) {
            cartItems[cartIndex].cartqty--
            setCartItems([...cartItems])
        }
    }
    function clearHandler() {
        setCartItems([])
    }
    function printHanlder() {
        setPrintObj(JSON.stringify({ orderNo: Math.random() * 10000, orderDate: new Date(), subTotal, tax, discount, grandTotal }))
        handlePrint()
        saveTransaction()
    }
    function getSelectedCtd(ctg) {
        console.log(ctg);
        if (ctg !== 'All') {
            const temp = allItems.filter(item => item.ctgname === ctg)
            console.log(temp)
            setFilteredItems([...temp])
        }
        else {
            console.log('filtered Items ma aya ', ctg);
            setFilteredItems([...allItems])
        }

    }
    function getSearchValue(value) {
        const temp = filteredItems.filter(item=>item.productname === value)
        setFilteredItems([...temp])
    }
    return (

        <div style={{ margin: '5px', padding: '5px' }}>
            <div className="row">
                <div className="col col-8 pt-3 mr-2" style={{ border: '1px solid darkgrey', borderRadius: '10px', overflow: 'scroll', height: '100vh', boxShadow: '1px 1px 10px lightblue' }}>
                    <div className='flex flex-wrap justify-content-between'>
                        <div>cs
                            <CategorySelect categories={categories} onSelectCtg={getSelectedCtd}></CategorySelect>
                        </div>
                        <div>
                            <SearchBox onClick = {getSearchValue}></SearchBox>
                        </div>
                    </div>
                    <ItemTable items={filteredItems} addItemHandler={addItem}  ></ItemTable>
                </div>
                <div className="col pt-3 ma-3" style={{ height: '85vh', border: '1px solid darkgrey', borderRadius: '10px', boxShadow: '1px 1px 10px lightblue' }}>
                    <h3 style={{ color: "rgb(216, 31, 74)", fontWeight: 'bold' }}>Cart</h3>
                    <div style={{ height: '50vh', overflow: 'overlay' }}>
                        {
                            cartItems.map((item, i) => (
                                <CartItems key={i} id={item.productid} name={item.productname.slice(0, 15)} image={item.productimage} qty={item.cartqty} maxqty={item.productqty} price={item.productprice} onClick={() => deleteItem(item.productid)} plusItem={addItem} minusItem={removeItem}></CartItems>
                            ))
                        }
                        <div ref={(el) => cartEnd = el}></div>
                    </div>

                    <div className='' style={{ height: '35vh' }}>
                        <Divider></Divider>
                        <div className='row'>
                            <div className='col text-left'>Subtotal</div>
                            <div className='col text-right'>{subTotal}</div>
                        </div>
                        <Divider></Divider>
                        <div className='row'>
                            <div className='col text-left'>Discount</div>
                            <div className='col text-right'>{discount}</div>
                        </div>
                        <Divider></Divider>
                        <div className='row'>
                            <div className='col text-left'>Tax</div>
                            <div className='col text-right'>{tax}</div>
                        </div>
                        <Divider></Divider>
                        <div className='row text-muted' style={{ fontWeight: 700, fontSize: '18px' }}>
                            <div className='col text-left'>Grand Total</div>
                            <div className='col text-right'>{grandTotal}</div>
                        </div>
                        <Divider></Divider>
                        <div className='row'>
                            <div className='col text-left font-weight-bold'>
                                <button onClick={clearHandler} className='btn btn-secondary rounded-pill' style={{ boxShadow: '2px 2px 10px lightblue' }}>Cancel</button>
                            </div>
                            <div className='col text-right'>
                                <button onClick={() => { setOpen(true) }} className='btn btn-danger rounded-pill' style={{ boxShadow: '2px 2px 10px pink' }}>Pay</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <CustomDialog rows={cartItems} open={open} handleClose={() => setOpen(false)} handlePrint={printHanlder} />
            <div style={{ display: "none" }}><Reciept ref={componentRef} items={cartItems} orderInfo={printObj} /></div>
        </div>
    );
}

export default PosePanel;