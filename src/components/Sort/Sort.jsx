import React from "react";
import { useStateContext } from "../../context";

export const Sort = () => {
  const { state, dispatch } = useStateContext();

  const sortHandler = (e) => {
    if (e.target.value === "low_to_high") {
      dispatch({ type: "SORT_BY_LOW_TO_HIGH", payload: e.target.value });
    } else {
      dispatch({ type: "SORT_BY_HIGH_TO_LOW", payload: e.target.value });
    }
  };

  return (
    <>
      <select
        className="sortSelect"
        value={state.priceSort}
        onChange={(e) => sortHandler(e)}
      >
        <option value="high_to_low">Price: High to Low</option>
        <option value="low_to_high">Price: Low to High</option>
      </select>
    </>
  );
};
