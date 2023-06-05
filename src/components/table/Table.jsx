import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({data}) => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Order ID</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Total</TableCell>
            <TableCell className="tableCell">Tax</TableCell>
            <TableCell className="tableCell">Discount</TableCell>
            <TableCell className="tableCell">Grand Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">#{row.orderId}</TableCell>
              <TableCell className="tableCell">{row.orderDate}</TableCell>
              <TableCell className="tableCell">{row.grandTotal}</TableCell>
              <TableCell className="tableCell">0</TableCell>
              <TableCell className="tableCell">0</TableCell>
              <TableCell className="tableCell">{row.grandTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;