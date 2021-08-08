import { useStateContext } from "../../context";

export const Sizes = () => {
  const { state, dispatch } = useStateContext();

  const sizes = ["s", "m", "l", "xl", "xxl"];

  return (
    <div className="mB2">
      <h2 className="sidebarTitle">Sizes</h2>
      <div className="sidebarCollection">
        {sizes.map((sizes) => {
          return (
            <div className="sidebarLists" key={sizes}>
              <input
                type="checkbox"
                checked={state.filters.sortBySize.includes(sizes)}
                onChange={() => {
                  dispatch({ type: "SORT_BY_SIZES", payload: sizes });
                }}
              ></input>
              <label>{sizes}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
