import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import axios from "axios"
import { useEffect, useState } from "react";

// const data=[
//   {
//     id: 1,
//     orderId: '3409.217158886777',
//     orderDate: '2022-06-12T18:20:45.000Z',
//     grandTotal: 524,
//     receiptId: '3409.217158886777'
//   },
//   {
//     id: 2,
//     orderId: '2334.4125293308493',
//     orderDate: '2022-06-15T08:40:28.000Z',
//     grandTotal: 2353,
//     receiptId: '2334.4125293308493'},
//   {
//     id: 3,
//     orderId: '9847.688375934305',
//     orderDate: '2022-06-15T08:40:28.000Z',
//     grandTotal: 366, receiptId: '9847.688375934305'
//   },
//   {
//     id: 4,
//     orderId: '3409.217158886777',
//     orderDate: '2022-06-15T18:20:45.000Z',
//     grandTotal: 524,
//     receiptId: '3409.217158886777'
//   },
//   {
//     id: 5,
//     orderId: '3409.217158886777',
//     orderDate: '2022-04-05T18:20:45.000Z',
//     grandTotal: 524,
//     receiptId: '3409.217158886777'
//   },
//   {
//     id: 6,
//     orderId: '3409.217158886777',
//     orderDate: '2022-04-12T18:20:45.000Z',
//     grandTotal: 524,
//     receiptId: '3409.217158886777'
//   },
//   {
//     id: 7,
//     orderId: '3409.217158886777',
//     orderDate: '2022-03-12T18:20:45.000Z',
//     grandTotal: 524,
//     receiptId: '3409.217158886777'
//   }
// ]

const Home = () => {
  const [data, setData] = useState([])
  const [todayOrders, setTodayOrders] = useState([])
  const [todayRevenue, setTodayRevenue] = useState(0)
  const [weeklyRevenue,setWeeklyRevenue] = useState(0)
  const [totalRevenue,setTotalRevenue] = useState(0)
  const [prevSixMonths,setPrevSixMonths] = useState([])
  const [SixMonthRevenue,setSixMonthRevenue] = useState([])
  var todOrders = [];

  useEffect(()=>{
    getAllOrders()
    getTodayOrders()
    getWeeklyRevenue()
    getTotalRevenue()
    getPrevSixMonths()
  },[])

  useEffect(()=>{

  },[todayOrders])

  
  const getAllOrders = async () => {
    axios.get("http://localhost:5000/transaction/getAllTransactions").then((response) => {
      if (response.data.status === 200) {
        const tempData = response.data.result 
        // console.log("data",data)
        setData([...tempData]);
      }
      else {
        console.log(response.data);
        console.log("orders ka data nai aya ");
      }
    })
  }

  const getTodayOrders = async () => {
    let todayTotal = 0
    for (let i=0; i < data.length; i++){
      let date = data[i].orderDate.split("T")[0]
      date=date.split("-").reverse().join("-"); 
      if(date == todayDate()){
        todOrders.push(data[i])
        todayTotal += data[i].grandTotal;
      }  
    }
    setTodayRevenue(todayTotal)
    setTodayOrders([...todOrders])

  }

  const getWeeklyRevenue=()=>{
    let WeeklyTotal = 0
    for (let i=0; i < data.length; i++){
      let date = data[i].orderDate.split("T")[0]
      date=date.split("-").reverse().join("-"); 
      if(date > prevWeek()){
        WeeklyTotal += data[i].grandTotal;
      }  
    }
    setWeeklyRevenue(WeeklyTotal)
  }

const getTotalRevenue=()=>{
  let Total = 0
    for (let i=0; i < data.length; i++){
      Total += data[i].grandTotal;
    }
    setTotalRevenue(Total)
}

  const todayDate=()=>{
    let date = new Date(),
    mnth = ("0" + (date.getMonth()+1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [day,mnth,date.getFullYear()].join("-") 
  }

  const prevWeek=()=>{
    let today = new Date();
    let nextWeek =new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    let mnth = ("0" + (nextWeek.getMonth()+1)).slice(-2)
    let day = ("0" + nextWeek.getDate()).slice(-2)
    return [day,mnth,nextWeek.getFullYear()].join("-") 
  }


  const getPrevSixMonths=()=>{
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let today = new Date();
    let d;
    let month=[];
    let monthIndexes=[];
    let monthRevenue=[];
    for(var i = 6; i > 0; i -= 1) {
      d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      monthIndexes.push(d.getMonth())
      month.push(monthNames[d.getMonth()]);
    }
    
    for(var i=0;i < month.length;i++){
      let total=0;
      for(var j=0;j< data.length;j++){
        if(monthIndexes[i] == data[j].orderDate.split("-")[1]){
          total+=data[j].grandTotal;
        }
      }
      monthRevenue.push(total)
    }
    
    // setPrevSixMonths([...month])
    // setSixMonthRevenue([...monthRevenue])
  }
  return (
    <div className="home">
      <div className="homeContainer">
        <Sidebar/>
        <div className="widgets">
          <Widget type="user" value={data.length} />
          <Widget type="order" value={todayOrders.length} />
          <Widget type="earning" value={todayRevenue}/>
          <Widget type="balance" value={weeklyRevenue}/>
        </div>
        <div className="charts">
          <Featured value={totalRevenue}/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} months={prevSixMonths} earning={SixMonthRevenue}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table data = {data}/>
        </div>
      </div>
    </div>
  );
};

export default Home;