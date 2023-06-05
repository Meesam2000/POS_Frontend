import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const columns = [
  { field: 'productid', headerName: 'Product ID', width: 70 },
  { field: 'productname', headerName: 'Product', width: 70 },
  { field: 'cartqty', headerName: 'Qty', width: 130 },
  { field: 'productprice', headerName: 'Unit Price', width: 130 },
  { field: 'totalprice', headerName: 'Total Price', width: 130 },
  
];
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



export default function CustomPopUp({ rows, open, handleClose,handleReverse }) {
  const [selected, setSelected] = useState([...rows])
  const [selectedRows, setSelectedRows] = useState([])
  useEffect(() => {
    setSelectedRows(rows.filter(row => selected.includes(row.productid)))
  }, [selected])

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title-1"
        open={open}
      >
      <BootstrapDialogTitle id="customized-dialog-title-1" onClose={handleClose}>
          Reciept
        </BootstrapDialogTitle>
        <div style={{ height: 400, width: '600px' }}>
          <DataGrid
          getRowId={(row) => row.productid}
            rows={rows}
            columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {
              setSelected(newSelectionModel);
            }}
            selectionModel={selected}
          />
        </div>
        <DialogActions>
          <Button autoFocus onClick={()=>handleReverse(selectedRows)}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </div>
  );
}
