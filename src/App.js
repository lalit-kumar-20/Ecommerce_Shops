import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddShop from "./pages/addShop";
import EditShop from "./pages/Update_Shop";
import Filter from "./pages/filter";

function App() {
  return (
    <div className="App">
      <Filter />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addShop" element={<AddShop />} />
        <Route exact path="/editshop/:id" element={<EditShop />} />
      </Routes>
    </div>
  );
}

export default App;
