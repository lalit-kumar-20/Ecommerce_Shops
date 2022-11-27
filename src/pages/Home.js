import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core/styles";
///import { useStyles } from "@andywer/style-hook"
import { useDispatch, useSelector } from "react-redux";
import { loadShops, removeShops } from "../redux/actions";
import { borderLeft } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import Stack from "@mui/material/Stack";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyle = makeStyles({
  table: {
    minWidth: 900,
    marginTop: 500,
  },
});

const buttonStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Home = () => {
  const classes = useStyle();
  const buttonstyle = buttonStyle();

  let dispatch = useDispatch();
  let nevigate = useNavigate();
  const { shops } = useSelector((state) => state.data);
  {
    /*}
  console.log("asd");
  console.log(shops);
 /console.log("asd");
*/
  }
  useEffect(() => {
    dispatch(loadShops());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure wanted to delete the shop ?")) {
      dispatch(removeShops(id));
      dispatch(loadShops());
    }
  };
  const currDate = new Date().toLocaleDateString();

  const comparison = (currDate, dateofstart, dateofclosing) => {
    if (
      currDate[8] + currDate[9] <= dateofclosing[8] + dateofclosing[9] &&
      currDate[8] + currDate[9] >= dateofstart[8] + dateofstart[9]
    ) {
      //console.log(currDate[9]+currDate[10])   ;
      return true;
    } else {
      // console.log(currDate[8]+currDate[9]+"vbn")   ;
      console.log("0");
      return false;
    }
  };
  return (
    <div>
      <div className={buttonstyle.root}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button color="primary" onClick={() => nevigate("/addShop")}>
            ADD SHOP
          </Button>
        </ButtonGroup>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          style={{ marginTop: "50px" }}
          aria-label="customized table"
        >
          <TableHead sx={{ minWidth: 700 }}>
            <TableRow>
              <StyledTableCell>Shop Name</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Area</StyledTableCell>
              <StyledTableCell align="center">
                Shop Opening Date
              </StyledTableCell>
              <StyledTableCell align="center">
                Shop Closing Date
              </StyledTableCell>
              <StyledTableCell align="center">
                Open/Close Status
              </StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minWidth: 700 }}>
            {shops &&
              shops.map((shops) => (
                <StyledTableRow key={shops.id} sx={{ minWidth: 700 }}>
                  <StyledTableCell component="th" scope="row">
                    {shops.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {shops.category}
                  </StyledTableCell>
                  <StyledTableCell align="center">{shops.area}</StyledTableCell>
                  <StyledTableCell align="center">
                    {shops.time_to_open}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {shops.time_to_close}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Alert align="center" severity="">
                      {comparison(
                        currDate,
                        shops.time_to_open,
                        shops.time_to_close
                      )
                        ? "Shop is On — check it out!"
                        : "Shop Closed"}
                    </Alert>
                    It's - {currDate}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonstyle.root}>
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        <Button
                          style={{ marginRight: "7px" }}
                          color="secondary"
                          onClick={() => handleDelete(shops.id)}
                        >
                          Delete
                        </Button>
                        <Button
                          color="primary"
                          onClick={() => nevigate(`/editshop/${shops.id}`)}
                        >
                          Edit
                        </Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
