import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogPopup from '../../components/DialogPopup';
import axios from 'axios'

const Img = styled('img')({
  display: 'block',
  minWidth: '100%',
  minHeight: '100%',
});

export default function ComplexGrid(props) {
  const [modalOpen1, setModalOpen1] = React.useState(false);
  function onDeleteHandler() {
    deleteProduct(props.name.id)
  }
  const deleteProduct = async (id) => {
    await axios.post("http://localhost:5000/products/deleteProduct",{id} )
      .then(res => {
        if (res.status === 200) {
          alert("Product Deleted Successfully")
          window.location.reload()
        }
        else {
          alert("Something went wrong !!!")
        }
      })
      .catch(err => console.log("error Occured", err))
  }
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        minWidth: 990,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={10}>
        <Grid item>
          <ButtonBase sx={{ width: 180, height: 110, marginTop: '5%' }}>
            <Img alt="complex" src={props.name.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2} style={{ textAlign: 'left' }}>
            <Grid item xs>
              <Typography style={{ marginBottom: '15px', boxShadow: "5px 5px 4px 5px #9E9E9E", textAlign: "center", width: '80%', backgroundColor: "#CED0DB", color: "#0b0e2e" }} className='text-capitalize bd-highlight' gutterBottom component="div">
                <b> {props.name.name}</b>

                <div style={{ textAlign: "right", marginTop: '-4%' }}><b>{props.name.Price}Rs  &nbsp; &nbsp;</b></div>
              </Typography>
              <Typography variant="body2" className="text-capitalize" gutterBottom>
                <b>Category</b> : {props.name.Category}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <b>SubCategory</b> : {props.name.SubCategory}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <b>Purchase Price</b> : {props.name.purprice}
              </Typography>
              <Typography variant="body2" gutterBottom>
                <b>Quantity</b> : {props.name.Quantity}
              </Typography>
              <Typography variant="body2">
                <p className="font-italic "><b>Description :</b> {props.name.description}</p>
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Typography style={{ color: "#0b0e2e" }} variant="subtitle1" component="div">
              &nbsp;<EditIcon
                onClick={() => {
                  setModalOpen1(true)
                }
                }>
              </EditIcon>
            </Typography>
          </Grid>
          <Grid item>
            <Typography style={{ color: "#0b0e2e" }} variant="subtitle1" component="div">
              &nbsp;<DeleteIcon onClick={onDeleteHandler}></DeleteIcon>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {modalOpen1 && (
        <DialogPopup
          title1="Product"
          formType="3"
          action="Edit"
          id={props.name.id}
          name={props.name.name}
          price={props.name.Price}
          purprice={props.name.purprice}
          qty={props.name.Quantity}
          desc={props.name.description}
          ctg={props.name.Category}
          subctg={props.name.SubCategory}
          img={props.name.image}
          setOpenModal={setModalOpen1}
        ></DialogPopup>)}

    </Paper>
  );
}