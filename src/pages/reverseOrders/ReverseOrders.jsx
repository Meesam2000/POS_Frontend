import React, { useEffect, useRef, useState } from 'react';
import OrderItem from '../../components/order/OrderItem';
import axios from 'axios'
import SearchBox from '../../components/SearchBox'
import CustomDialog from '../../components/pos/CustomDialog';
import { useReactToPrint } from 'react-to-print';
import Reciept from '../../components/pos/Reciept';
import CustomPopUp from '../../components/order/CustomPopUp';



function ReverseOrders(props) {

    const componentRef = useRef()
    const [orders, setAllOrders] = useState([])
    const [filteredOrders, setFilteredOrders] = useState([])
    const [open, setOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [printObj, setPrintObj] = useState({})

    useEffect(() => {
        getAllReverseOrders()
    }, [])

    useEffect(() => {
        setFilteredOrders([...orders])
    }, [orders])

    const getAllReverseOrders = async () => {
        axios.get("http://localhost:5000/transaction/getAllReverseTransactions").then((response) => {
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
    const getSpecificOrder = async (orderId) => {
        // console.log(orderId);
        axios.get(`http://localhost:5000/transaction/getSpecificReverseTransaction/${orderId}`).then((response) => {
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
                <OrderItem order={order} key={index} onView={onViewHandler} reverse = {true}></OrderItem>
            ))}
            <CustomDialog rows={cartItems} open={open} handleClose={() => setOpen(false)} handlePrint={printHandler}></CustomDialog>
            <div style={{ display: "none" }}><Reciept ref={componentRef} items={cartItems} orderInfo={JSON.stringify(printObj)} /></div>
        </div>
    );
}

export default ReverseOrders;