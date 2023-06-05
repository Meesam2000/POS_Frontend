import * as React from 'react';
import { useEffect } from 'react';
import List from '@mui/material/List';
import Card from "../components/card/Card";
import { AutoAwesome } from '@mui/icons-material';
import axios from 'axios';

export default function PinnedSubheaderList() {
  const [page, setPage] = React.useState(5);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState([])

  useEffect(() => {
    getAllProducts();
  }, [])

  const getAllProducts = async () => {
    await axios.get("http://localhost:5000/products/getAllProducts").then((response) => {
      if (response.data.status === 200) {
        const data = response.data.result
        console.log(data);
        const obj = data.map(value => {
          return {
            id: value.productid,
            name: value.productname,
            description: value.productdesc,
            Category: value.ctgname,
            SubCategory: value.subctgname,
            purprice : value.productpurchaseprice,
            image: `http://localhost:5000/productImg/${value.productimage}`,
            Quantity: value.productqty,
            Price: value.productprice
          }
        })
        setData(obj);
      }
      else {
        console.log(response.data);
        console.log("Products ka data nai aya ");
      }
    })
  }



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, AutoAwesome));
    <br />
    setPage(0);
  };



  return (
    <div>
      <List
        sx={{
          boxShadow: "5px 5px 4px 5px #9E9E9E",
          width: '115%',
          bgcolor: '#CED0DB',
          position: 'relative',
          overflow: 'auto',
          maxHeight: '100vh',
          '& ul': { padding: 0.5 },
          border: "1px solid #9E9E9E"
        }}
        subheader={<li />}
      >
        {data.map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <Card name={sectionId} ></Card>
            </ul>
          </li>
        ))}

      </List>

    </div>
  );
}


