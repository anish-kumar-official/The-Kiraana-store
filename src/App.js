import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./Pages/AddProduct";
import UpdateProduct from "./Pages/UpdateProduct";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/addProduct" Component={AddProduct} />
            <Route path="/updateProduct" Component={UpdateProduct} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
