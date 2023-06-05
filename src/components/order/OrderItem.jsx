import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import moment from 'moment'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function OrderItem({ order, header,onView,onReturn,reverse}) {
    const styles = { height: '70px', padding: '10px', fontWeight: "bold", ...(!header && {
        boxShadow: '1px 1px 5px lightblue', borderRadius: '10px'
    }) }

    let classes = 'flex flex-wrap justify-content-between align-items-center mb-2'
    if (header) classes += ' text-muted' 


    return (
        <div>
            <div className={classes} style={styles}>
               
                <div>#{order.orderId}</div>
                <div>{moment( order.orderDate).format('DD/MM/YYYY hh:mm:ss a')}</div>
                <div>{order.grandTotal} Rs</div>
                <div>{!header && <VisibilityIcon onClick = {()=>(onView(order.orderId))}></VisibilityIcon>}</div>
                <div>{(!header & !reverse) ? <RemoveShoppingCartIcon onClick = {()=>(onReturn(order.orderId))}></RemoveShoppingCartIcon>:<div></div>}</div>
            </div>

        </div>
    );
}

export default OrderItem;