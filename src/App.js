import React, { useState } from "react";
import "./App.css";
import AddItems from "./Components/AddItems/AddItems";
import TotalPrice from "./Components/TotalPrice/TotalPrice";

const App = () => {
  const [itemsFood, setItemsFood] = useState([
    { name: "Hamburger", price: 80 },
    { name: "Coffe", price: 70 },
    { name: "Cheeseburger", price: 90 },
    { name: "Tea", price: 50 },
    { name: "Fries", price: 45 },
    { name: "Cola", price: 40 },
  ]);
  const makeOrder = () => {};
  const totalSpent = () => {};
  const removeOrder = () => {};
  return (
    <div className="App">
      <div className="fastFoodWrapper">
        <div className="OrderForm">
          <TotalPrice totalSpent={totalSpent()} />
        </div>
        <div className="addItemsForm">
          {itemsFood.map((elem, index) => {
            return (
              <AddItems
                key={index}
                itemName={elem.name}
                itemPrice={elem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
