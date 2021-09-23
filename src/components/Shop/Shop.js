import React from "react";
import "./Shop.css";
const Shop = () => {
  return (
    <div>
      <div className="d-flex justify-content-between ">
        <div className="product-container ms-5 w-75">Product</div>
        <div className="cart-area pe-2 w-25">cart</div>
      </div>
    </div>
  );
};

export default Shop;
