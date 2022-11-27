import * as types from "./actionType";
import axios from "axios";

const getShops = (shops) => ({
  type: types.GET_SHOPS,
  payload: shops,
});

const deleteShop = () => ({
  type: types.DELETE_SHOPS,
});
const shopAdded = () => ({
  type: types.ADD_SHOP,
});

const getByArea = () => ({
  type: types.FILTER_BY_AREA,
});

const getByCat = () => ({
  type: types.FILTER_BY_CAT,
});

const getShop = (shop) => ({
  type: types.GET_SINGLE_SHOP,
  payload: shop,
});
const shopUpdated = () => ({
  type: types.UPDATE_SHOP,
});

const REACT_API = "http://localhost:5000/shops";

export const loadShops = () => {
  return function (dispatch) {
    axios
      .get(`${REACT_API}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getShops(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const removeShops = (id) => {
  return function (dispatch) {
    axios
      .delete(`${REACT_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(deleteShop());
        dispatch(loadShops());
      })
      .catch((error) => console.log(error));
  };
};

export const addShop = (shop) => {
  return function (dispatch) {
    axios
      .post(`${REACT_API}`, shop)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(shopAdded(resp.data));
        dispatch(loadShops());
      })
      .catch((error) => console.log(error));
  };
};

export const getSingleShop = (id) => {
  return function (dispatch) {
    axios
      .get(`${REACT_API}/${id}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getShop(resp.data));
      })
      .catch((error) => console.log(error));
  };
};

export const UpdateShop = (shop, id) => {
  return function (dispatch) {
    axios
      .put(`${REACT_API}/${id}`, shop)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(shopUpdated());
      })
      .catch((error) => console.log(error));
  };
};

export const getFilterAreaShop = (terma) => {
  return function (dispatch) {
    axios
      .get(`${REACT_API}/${terma}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getByArea(resp.data));
        dispatch(loadShops());
      })
      .catch((error) => console.log(error));
  };
};

export const getFilterCatShop = (termc) => {
  return function (dispatch) {
    axios
      .get(`${REACT_API}/${termc}`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getByCat(resp.data));
        dispatch(loadShops());
      })
      .catch((error) => console.log(error));
  };
};
