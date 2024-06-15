import React from "react";
import { useSelector } from "react-redux"; 
import { selectShoppingItems } from "../../redux/shoppingSlice";


export const ShoppingListHistory = () => {
  const addedItem = useSelector(selectShoppingItems)
  const removedItem = useSelector(selectShoppingItems)

  return (
    <div className="row">
      <div className="col">
        <h1 className="mb-4">Shopping List History</h1>
        <ul class="list-group">
        {addedItem.map((item, index) => (
            <li key={`added-${index}`} className="list-group-item">
              <span className="fw-bold">Added:</span> {item.shoppingItem}, {item.shoppingNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
