import React from "react";
import Grocery from "../Assets/Grocery.jpg";
import "../CSS/Home.scss";

const Home = () => {
  return (
    <div className="homePage">
      <img src={Grocery} alt="error" />
      <div className="homeWrapper">
        <div className="mainHeading">SALES</div>
        <div className="mainHeadingBody">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste velit
          veritatis tempora ut tenetur error adipisci laudantium cumque unde
        </div>
        <div className="homeButtons">
          <button className="readMore >">ReadMore</button>
          <button className="buyNow">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
