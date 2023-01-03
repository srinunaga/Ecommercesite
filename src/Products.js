import React from "react";
import JsonData from "./JsonData.json";
import { useDispatch } from "react-redux";
import { incrementcart, decrementcart } from "./Redux/CartReducer";
const Products = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div className="row">
          {JsonData.products.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card m-1"
                style={{ width: "250px", height: "400px", textAlign: "center" }}
              >
                <img
                  className="card-image-top d-block mx-auto p-2"
                  src={product.src}
                  alt=""
                  style={{ width: "200px", height: "250px" }}
                />
                <p className="card-title">
                  {product.name} | ₹{product.price}
                </p>
                <div className="card-body">
                  <button
                    className="btn btn-success ml-auto m-2"
                    onClick={() =>
                      dispatch(
                        incrementcart({
                          productName: product.name,
                          productPrice: product.price
                        })
                      )
                    }
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-success ml-auto"
                    onClick={() =>
                      dispatch(
                        decrementcart({
                          productName: product.name,
                          productPrice: product.price
                        })
                      )
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
