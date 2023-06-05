import React from 'react';
import ItemCard from '../cartSingleItem/ItemCard'
function ItemTable(props) {
    const {items} = props
    return (
        <div>
        <div className='flex flex-wrap' style={{gap: '10px', justifyContent: 'center'}}>
        {
            items.map(item => (
                <ItemCard title={item.productname}  image={item.productimage} id={item.productid} key={item.productid} qty={item.productqty} price = {item.productprice} onClick={()=>props.addItemHandler(item.productid)}/>
            ))
        }
        </div>
        </div>
    );
}

export default ItemTable;