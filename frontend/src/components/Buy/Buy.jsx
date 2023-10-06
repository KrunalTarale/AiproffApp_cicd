import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Foot/Foot";
import "./Buy.css";

const Buy = () => {
  return (
    <div>
      <Navbar />

      <div className="category">
      <h1 className="cat_head">Product Category</h1>
      <div className="allcards">
        <div className="_cards">
          <div className="_card-image"></div>
          <div className="_category"> Illustration </div>
          <div className="_heading">
            {" "}
            A heading that must span over two lines
            <div className="_author">
              {" "}
              By <span className="_name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="_cards">
          <div className="_card-image"></div>
          <div className="_category"> Illustration </div>
          <div className="_heading">
            {" "}
            A heading that must span over two lines
            <div className="_author">
              {" "}
              By <span className="_name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="_cards">
          <div className="_card-image"></div>
          <div className="_category"> Illustration </div>
          <div className="_heading">
            {" "}
            A heading that must span over two lines
            <div className="_author">
              {" "}
              By <span className="_name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="category">
      <h1 className="cat_head">Product Category</h1>
      <div className="allcards">
        <div className="_cards">
          <div className="_card-image"></div>
          <div className="_category"> Illustration </div>
          <div className="_heading">
            {" "}
            A heading that must span over two lines
            <div className="_author">
              {" "}
              By <span className="_name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="_cards">
          <div className="_card-image"></div>
          <div className="_category"> Illustration </div>
          <div className="_heading">
            {" "}
            A heading that must span over two lines
            <div className="_author">
              {" "}
              By <span className="_name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
        <div className="_cards">
          <div className="_card-image"></div>
          <div className="_category"> Illustration </div>
          <div className="_heading">
            {" "}
            A heading that must span over two lines
            <div className="_author">
              {" "}
              By <span className="_name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Buy;
