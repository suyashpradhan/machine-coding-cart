import React from "react";
import { useStateContext } from "../../context";

export const ClearFilters = () => {
  const { dispatch } = useStateContext();
  return (
    <div className="mB2 flex j-space-between a-items-center">
      <h2 className="sidebarTitle">Filters</h2>
      <button
        className="link link-secondary"
        onClick={() => dispatch({ type: "CLEAR_FILTER" })}
      >
        Clear filters
      </button>
    </div>
  );
};
