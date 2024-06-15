import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { removeItem } from "../../redux/shoppingSlice";
import { selectShoppingItems } from "../../redux/shoppingSlice";
export const ShoppingListOutput = () => {
  const items = useSelector(selectShoppingItems);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeItem(index));
  };
  return (
    <div className="row justify-content-center">
      <div className="col-3">
        <h4 className="shoppingLabel mt-3">Shopping list:</h4>
        <ul>
          {/* Iterates through 'items' array and makes a <li> for each */}
          {items.map((items, index) => (
              <li key={index} className="shoppingLabel h4 mt-3">
                {items.shoppingItem}, {items.shoppingNumber}
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
