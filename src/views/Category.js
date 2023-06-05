import Typography from '@material-ui/core/Typography';
import Container from '@mui/material/Container';
import { Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/Add';
import DialogPopup from '../components/DialogPopup';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Catnames from '../components/CategoryName'
import axios from 'axios';


const CategoryContainer = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [categories, setCategories] = useState([])



    useEffect(() => {
        getAllCategories();
    }, [])

    const getAllCategories = async () => {
        await axios.get("http://localhost:5000/category/getAllCatData").then((response) => {
            if (response.data.status === 200) {
                const data = response.data.result
                const obj = data.map(value => {
                    return {
                        myname: value.ctgname,
                        mydescription: value.ctgdescription,
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


    return (
        <div className="container-fluid">

            <Container maxWidth="lg" >

                <Typography component="div" style={{
                    height: '100vh', width: '100%'
                }}>
                    <Grid item xs={12} sm={12} md={11} lg={4}
                        style={{
                            display: "flex",
                            float: "right",
                            justifyContent: "right",
                            textAlign: 'center' // this does the magic
                        }}
                    >
                        <Button
                            variant="contained"
                            startssIcon={<AddCircleOutlineOutlinedIcon />}
                            style={{ backgroundColor: "rgba(13,21,96,255)", color: "white", border: "1px solid white", marginTop: '7%', marginBottom: '15px' }}
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            + Add
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}
                        style={{
                            display: "flex",
                            justifyContent: "centre",
                            backgroundColor: 'orange',
                            textAlign: 'center' // this does the magic
                        }}
                    >
                        <div>
                        </div>
                        <Catnames categories_arr={categories}></Catnames>

                    </Grid>

                </Typography>

            </Container>

            {modalOpen && <DialogPopup getAllCategories={getAllCategories} title1="Category" formType="1" setOpenModal={setModalOpen} mainCtg="2"></DialogPopup>}        </div>
    )
}

export default CategoryContainer