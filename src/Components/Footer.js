import React from "react";
import Newsletter from "../Pages/Newsletter";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "../CSS/Footer.scss";

const Footer = () => {
  return (
    <div>
      <Newsletter />
      <div className="footer">
        <div className="col about">
          <div className="title">About</div>
          <div className="content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
            incidunt modi perferendis sint placeat dolores! Nihil accusamus
            reiciendis cumque expedita.
          </div>
        </div>

        <div className="col contact">
          <div className="title">Contact</div>
          <div className="content">
            <div className="Con-Sec">
              <FaLocationArrow />
              Sector 22, Govind Niwas, Turbhe Village, Nr Ghanraj Village,
              Vashi, Navi Mumbai
            </div>
            <div className="Con-Sec">
              <FaPhoneAlt />
              +91 123456789
            </div>
            <div className="Con-Sec">
              <BiLogoGmail />
              abc@gmail.com
            </div>
          </div>
        </div>

        <div className="col categories">
          <div className="title">Categories</div>
          <div className="content">
            <ul>
              <li>Fruits & Veg</li>
              <li>Spices and Condiments</li>
              <li>Kitchen Needs</li>
              <li>Dairy Products</li>
              <li>Snacks & Beverages</li>
              <li>Personal Care</li>
              <li>Household Essentials</li>
            </ul>
          </div>
        </div>

        <div className="col pages">
          <div className="title">Pages</div>
          <div className="content">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Privacy Policy</li>
              <li>Returns</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
