import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addShop } from "../redux/actions";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));

const AddShop = () => {
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
      dispatch(addShop(state));
      nevigate("/");
      setError("");
    } else {
      setError(
        "Please Enter all The Details , First Letter Must be Capital and Date Must be in ex- 01/01/2000"
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
      <h2>Add User</h2>

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
          value={name}
          type="text"
          onChange={handleOnChange}
          name="name"
        />

        <br />
        <TextField
          style={{ margin: "15px" }}
          id="standard-basic"
          label="Enter category"
          value={category}
          type="text"
          required="true"
          name="category"
          onChange={handleOnChange}
        />

        <br />
        <TextField
          required="true"
          style={{ margin: "10px" }}
          id="standard-basic"
          label="Enter area"
          value={area}
          type="text"
          name="area"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          style={{ margin: "10px" }}
          id="standard-basic"
          label="DD/MM/YYYY"
          value={time_to_open}
          type="text"
          required="true"
          name="time_to_open"
          onChange={handleOnChange}
        />
        <br />
        <TextField
          style={{ margin: "10px" }}
          id="standard-basic"
          required="true"
          label="DD/MM/YYYY"
          value={time_to_close}
          type="text"
          name="time_to_close"
          onChange={handleOnChange}
        />
        <br />

        <Button
          variant="contained"
          s
          color="primary"
          type="submit"
          style={{ margin: "10px", padding: "12px" }}
        >
          ADD SHOP
        </Button>
      </form>
    </div>
  );
};

export default AddShop;
