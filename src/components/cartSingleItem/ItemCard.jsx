import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ItemCard({image, id, title, qty,price, onClick}) {
  return (
    <Card sx={{ maxWidth: 132 }}>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt={title}
      />
      <CardContent sx={{padding: '10px  !important', textOverflow: 'wrap'}}>
        <Typography variant="subtitle" component="div" sx={{fontWeight: 'bold'}}>
        {title.slice(0, 15)}
        </Typography>
        <Typography sx={{color: "rgb(216, 31, 74)",fontWeight:'bold'}}>
          {price} Rs
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{width: '100%'}} onClick={onClick}>
        <AddShoppingCartIcon/></Button>
      </CardActions>
    </Card>
  );
}
