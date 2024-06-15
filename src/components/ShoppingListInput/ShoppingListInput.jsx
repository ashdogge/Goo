import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/shoppingSlice"
// function for validating items
const validate = (values) => {
  const erorrs = {};
  if (!values.shoppingItem) {
    erorrs.shoppingItem = "An item is required.";
  }
  if (!values.shoppingNumber) {
    erorrs.shoppingNumber = "Number of items is required.";
  }
  return erorrs;
};
export const ShoppingListInput = () => {
  const dispatch = useDispatch();

  // Initializes values as empty strings
  const formik = useFormik({
    initialValues: {
      shoppingItem: "",
      shoppingNumber: "",
    },
    validate,
    // passes 'values' to the store
    onSubmit: (values) => {
      dispatch(addItem(values));
      formik.resetForm();
    },
  });

  /*
   *JSX Code (HTML)
   */
  return (
    <div className="row justify-content-center">
      <div className="col-3">
        <h1 className="listHeading display-5">Shopping List</h1>
        <form
          id="shoppingList"
          name="shoppingList"
          className=""
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="shoppingItem" className="shoppingLabel h4">
            What do you need?
          </label>{" "}
          <br />
          <input
            type="text"
            id="shoppingItem"
            name="shoppingItem"
            placeholder="item name.."
            value={formik.values.shoppingItem}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.shoppingItem && formik.touched.shoppingItem && (
            <div className="text-danger">{formik.errors.shoppingItem}</div>
          )}
          <br />
          <label htmlFor="shoppingNumber" className="shoppingLabel h4">
            How many?
          </label>{" "}
          <br />
          <input
            type="number"
            id="shoppingNumber"
            name="shoppingNumber"
            placeholder="number of items.."
            value={formik.values.shoppingNumber}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.errors.shoppingNumber && formik.touched.shoppingNumber && (
            <div className="text-danger">{formik.errors.shoppingNumber}</div>
          )}
          <br />
          <button type="submit" className="btn btn-primary lead">
            Add item
          </button>
        </form>
      </div>
    </div>
  );
};
