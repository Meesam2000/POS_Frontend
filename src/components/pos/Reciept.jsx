import React from 'react';
// import pic from "../../assets/img/logo.jpg"
function Reciept(props, ref) {
    const items = props.items
    let orderInfo = {};
    try {
        orderInfo = JSON.parse(props.orderInfo)
    } catch (e) {
        return (<div></div>)
    }
    return (
        <div ref={ref}>
            <div className="row" style={{width:'100%',height:'100%'}}>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="row p-5">
                                <div className="col-md-6" >
                                    {/* <img src={pic} alt='GPOS'></img> */}
                                    <h2>GPOS</h2>
                                </div>
                                <div className="col-md-6 text-right">
                                    <p className="font-weight-bold mb-1">Invoice #{orderInfo.orderNo}</p>
                                    <p className="text-muted">{orderInfo.orderDate}</p>
                                </div>
                            </div>

                            <hr className="my-5" />

                            <div className="row p-5">
                                <div className="col-md-12">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="border-0 text-uppercase small font-weight-bold">ID</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Product Name</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Quantity</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Unit Price</th>
                                                <th className="border-0 text-uppercase small font-weight-bold">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                items.map((item, key )=> (
                                                    <tr>
                                                        <td>{key+1}</td>
                                                        <td>{item.productname}</td>
                                                        <td>{item.cartqty}</td>
                                                        <td>{item.productprice}</td>
                                                        <td>{item.cartqty*item.productprice}</td>
                                                    </tr>

                                                ))

                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="d-flex flex-row-reverse bg-dark text-white p-4">
                                <div className="py-3 px-5 text-right">
                                    <div className="mb-2">Grand Total</div>
                                    <div className="h2 font-weight-light">{orderInfo.grandTotal}</div>
                                </div>

                                <div className="py-3 px-5 text-right">
                                    <div className="mb-2">Discount</div>
                                    <div className="h2 font-weight-light">{orderInfo.discount}</div>
                                </div>

                                <div className="py-3 px-5 text-right">
                                    <div className="mb-2">Sub - Total amount</div>
                                    <div className="h2 font-weight-light">{orderInfo.subTotal}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default React.forwardRef(Reciept);