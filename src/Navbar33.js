import React from "react";
import { useSelector } from "react-redux";
const Navbar33 = () => {
  const cartCount = useSelector((state) => state.CartReducer.cartValues.length);
  const totalPrice = useSelector((state) => state.CartReducer.totalPrice);

  return (
    <div>
      <nav className="navbar bg-info fixed-top">
        <div className="d-inline navbar-nav mx-auto">
          <span className="btn btn-success m-2">Cart Items : {cartCount}</span>
          <span className="btn btn-success m-2">
            Total Price : {totalPrice}
          </span>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Navbar33;
