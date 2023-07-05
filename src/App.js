import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import Deals from "./Pages/Deals";
import WhatsNew from "./Pages/WhatsNew";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/categories" Component={Categories} />
            <Route path="/deals" Component={Deals} />
            <Route path="/whats-new" Component={WhatsNew} />
            <Route path="/register" Component={Register} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
