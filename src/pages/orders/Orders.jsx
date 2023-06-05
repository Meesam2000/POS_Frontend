import React, { useEffect, useRef, useState } from 'react';
import OrderItem from '../../components/order/OrderItem';
import axios from 'axios'
import SearchBox from '../../components/SearchBox'
import CustomDialog from '../../components/pos/CustomDialog';
import { useReactToPrint } from 'react-to-print';
import Reciept from '../../components/pos/Reciept';
import CustomPopUp from '../../components/order/CustomPopUp';



function Orders(props) {

    const componentRef = useRef()
    const [orders, setAllOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [printObj, setPrintObj] = useState({})

    useEffect(() => {
        getAllOrders()
    }, [])

    useEffect(() => {
        setFilteredOrders([...orders])
    }, [orders])

    const getAllOrders = async () => {
        axios.get("http://localhost:5000/transaction/getAllTransactions").then((response) => {
            if (response.data.status === 200) {
                setAllOrders([...response.data.result]);
            }
            else {
                console.log(response.data);
                console.log("orders ka data nai aya ");
            }
        })
    }

    function getSearchedValue(value) {
        const temp = orders.filter(item => item.orderId === value)
        setFilteredOrders([...temp])
    }
    function printHandler(params) {
        handlePrint()
    }
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    function onViewHandler(orderId) {
        setOpen(true)
        getSpecificOrder(orderId)

    }
    function onReturnHandler(orderId) {
        setOpen2(true)
        getSpecificOrder(orderId)
    }


    function reverseTransactionHanldler(cart) {
        // console.log(cart)
        const total = cart.reduce((acc, val) => acc + val.totalprice, 0);
        const printObject = JSON.stringify({ orderNo: Math.random() * 10000, orderDate: new Date(), subTotal:total, tax:0, discount:0, grandTotal:total })
        saveReverseTransaction(cart,printObject)

    }
    function saveReverseTransaction(reverseCart,printObject) {
        axios.post("http://localhost:5000/transaction/reverseTransaction",
            { printObject, reverseCart }
        ).then(res => {
            if (res.status === 200) {
                alert("Reverse Transaction Added")
            }
            else {
                alert("error occured");
            }
        })
            .catch(err => console.log("error Occured", err))
    }

    const getSpecificOrder = async (orderId) => {
        // console.log(orderId);
        axios.get(`http://localhost:5000/transaction/getSpecificTransaction/${orderId}`).then((response) => {
            if (response.data.status === 200) {
                const temp = response.data.result
                console.log(temp);
                const cartObj = temp.map(item => {
                    return {
                        productid: item.productid,
                        productname: item.itemName,
                        cartqty: item.itemQty,
                        productprice: item.unitPrice,
                        totalprice: item.itemQty*item.unitPrice,
                    }
                })
                const printObjTemp = {
                    orderNo: temp[0].orderNo,
                    orderDate: temp[0].orderDate,
                    subTotal: temp[0].grandTotal,
                    tax: 0,
                    discount: 0,
                    grandTotal: temp[0].grandTotal
                }
                setPrintObj(printObjTemp)
                setCartItems([...cartObj])

            }
            else {
                console.log(response.data);
                console.log("Specific order ka data nai aya ");
            }
        })
    }
    return (
        <div>
            <SearchBox onClick={getSearchedValue}></SearchBox>
            <OrderItem order={{ orderId: 'OrderId', orderDate: "Date", grandTotal: "Grand Total" }} header={true}></OrderItem>
            {filteredOrders.map((order, index) => (
                <OrderItem order={order} key={index} onView={onViewHandler} onReturn= {onReturnHandler}></OrderItem>
            ))}
            <CustomDialog rows={cartItems} open={open} handleClose={() => setOpen(false)} handlePrint={printHandler} reverse = {true} ></CustomDialog>
            <CustomPopUp rows = {cartItems} open={open2} handleClose={() => setOpen2(false)} handleReverse = {reverseTransactionHanldler} ></CustomPopUp>
            <div style={{ display: "none" }}><Reciept ref={componentRef} items={cartItems} orderInfo={JSON.stringify(printObj)} /></div>
        </div>
    );
}

export default Orders;