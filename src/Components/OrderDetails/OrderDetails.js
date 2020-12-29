import React from "react";

const OrderDetails = (props) => {
  return (
    <div className="orderDetails">
      <div className="order">
        <p>{props.itemName}</p>
        <h4>{props.itemCount}</h4>
        <h4>{props.itemPrice}</h4>
      </div>
    </div>
  );
};

export default OrderDetails;
