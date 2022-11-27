import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterAreaShop, getFilterCatShop } from "../redux/actions";

const Filter = () => {
  const [terma, setTerma] = useState("");
  const [termc, setTermc] = useState("");
  let dispatch = useDispatch();

  const onFilterArea = (e) => {
    // console.log(e.target.value);
    let name = e.target.value;
    setTerma({ ...terma, name });
  };
  const onFilterCat = (e) => {
    // console.log(e.target.value);
    let name = e.target.value;
    setTermc({ ...termc, name });
  };
  const submitHandlerArea = (e) => {
    e.prevent.Default();
    console.log(terma);
    dispatch(getFilterAreaShop(terma));
    setTerma("");
  };

  const submitHandlerCat = (e) => {
    e.prevent.Default();
    console.log(termc);
    dispatch(getFilterCatShop(termc));
    setTermc("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link active nav-link dropdown-toggle mx-50px "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h3 className="my-50">Filter By Area</h3>
                </a>
                <ul className="dropdown-menu">
                  <form onSubmit={submitHandlerArea}>
                    <select name="isAvailable" onChange={onFilterArea}>
                      <option value="agra">Agra</option>
                      <option value="banglore">Banglore</option>
                      <option value="chennai">Chennai</option>
                      <option value="delhi">Delhi</option>
                      <option value="etah">Etah</option>
                      <option value="kolapur">Kolapur</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="lucknow">Lucknow</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="nashik">Nashik</option>
                      <option value="ooty">Ooty</option>
                      <option value="pune">Pune</option>
                      <option value="thane">Thane</option>
                    </select>
                  </form>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle nav-link active "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h3>Filter By Category</h3>
                </a>
                <ul className="dropdown-menu">
                  <form onSubmit={submitHandlerCat}>
                    <select name="isAvailable" onChange={onFilterCat}>
                      <option value="butchar">Butchar</option>
                      <option value="baker">Baker</option>
                      <option value="chemist">Chemist</option>
                      <option value="grocery">Grocery</option>
                      <option value="jwellary">Jwellary</option>
                      <option value="stationary shop">Stationary Shop</option>
                    </select>
                  </form>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Filter;
