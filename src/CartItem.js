import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import {  useDispatch } from "react-redux";
import { decrease, increase, remove } from "./redux/feature/cartSlice";
// import { decrease, getCartTotal, increase, remove } from "./redux/actions";

const CartItem = ({ id, image, name, price, amount,Author,description }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "70vw",
        maxWidth: "90rem",
        margin: "0px auto",
      }}
    >
      <div className="row" style={{ marginTop: "10px", marginLeft: "120px" }}>
        <div className="col-sm-2">
          <img
            src={image}
            className="img-fluid"
            alt=""
            style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-sm-2" margin>
          <h3>{name}</h3>
          <h4>{Author}</h4>
          <h5 style={{ color: "#617d98" }}>${price}</h5>
          
          <p>{description}</p>
          <MDBIcon
            fas
            icon="trash"
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch(remove(id))}
          />
        </div>
        <div className="col-sm-8">
          <MDBIcon
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increase(id))}
            fas
            icon="chevron-up"
          />
          <p style={{ marginTop: "10px" }}>{amount}</p>
          <MDBIcon
            fas
            icon="chevron-down"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decrease(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;