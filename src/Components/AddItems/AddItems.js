import React from "react";
import "./AddItems.css";

const AddItems = (props) => {
  return (
    <div className="foodItem">
      <p>{props.itemName}</p>
      <h5>Price:{props.itemPrice} KGS</h5>
    </div>
  );
};

export default AddItems;
