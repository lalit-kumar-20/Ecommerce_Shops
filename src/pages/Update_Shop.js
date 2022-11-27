import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleShop, UpdateShop } from "../redux/actions";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const EditShop = () => {
  const classes = useStyle();
  const [state, setState] = useState({
    name: "",
    category: "",
    area: "",
    time_to_open: "",
    time_to_close: "",
  });
  const [error, setError] = useState("");
  let nevigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();

  const { shop } = useSelector((state) => state.data);
  console.log(shop);
  {
    /*
  console.log("asd");
  console.log(shops);
  console.log("asd");
*/
  }
  useEffect(() => {
    if (shop) {
      setState({ ...shop });
    }
  }, [shop]);

  useEffect(() => {
    dispatch(getSingleShop(id));
  }, []);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name &&
      name[0] >= "A" &&
      category &&
      category[0] >= "A" &&
      area &&
      area[0] >= "A" &&
      time_to_open &&
      time_to_open[0] >= "0" &&
      time_to_open[0] <= "9" &&
      time_to_open[9] >= "0" &&
      time_to_open[9] <= "9" &&
      time_to_close &&
      time_to_close[0] >= "0" &&
      time_to_close[0] <= "9" &&
      time_to_close[9] >= "0" &&
      time_to_close[9] <= "9"
    ) {
      dispatch(UpdateShop(state, id));
      nevigate("/");
      setError("");
    } else {
      setError(
        "Please Enter all The Details, First letter must be capital and Date Must be in ex- 01/01/2000"
      );
    }
  };
  const { name, category, area, time_to_open, time_to_close } = state;

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        style={{ marginTop: "50px", padding: "12px" }}
        onClick={() => nevigate("/")}
      >
        GO BACK
      </Button>
      <h2>Edit User</h2>

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required="true"
          style={{ marginTop: "20px" }}
          id="standard-basic"
          label="Enter shop name"
          value={name || ""}
          type="text"
          onChange={handleOnChange}
          name="name"
        />
        <br />
        <TextField
          style={{ margin: "15px" }}
          id="standard-basic"
          label="Enter category"
          value={category || ""}
          type="text"
          name="category"
          required="true"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          required="true"
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Enter area"
          value={area || ""}
          type="text"
          name="area"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          style={{ margin: "10px" }}
          id="standard-basic"
          label="DD/MM/YYYY"
          value={time_to_open || ""}
          type="text"
          required="true"
          name="time_to_open"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          style={{ margin: "10px" }}
          id="standard-basic"
          label="DD/MM/YYYY"
          value={time_to_close || ""}
          type="text"
          name="time_to_close"
          required="true"
          onChange={handleOnChange}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ margin: "10px", padding: "12px" }}
        >
          Update Shop
        </Button>
      </form>
    </div>
  );
};

export default EditShop;
