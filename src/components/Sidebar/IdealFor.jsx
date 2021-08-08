import { useStateContext } from "../../context";

export const IdealFor = () => {
  const { state, dispatch } = useStateContext();

  const idealFor = ["Men", "Women"];

  return (
    <div className="mB2">
      <h2 className="sidebarTitle">Ideal For</h2>
      <div className="sidebarCollection">
        {idealFor.map((idealFor) => {
          return (
            <div className="sidebarLists" key={idealFor}>
              <input
                type="checkbox"
                checked={state.filters.sortByIdealFor.includes(idealFor)}
                onChange={() => {
                  dispatch({ type: "SORT_BY_IDEAL_FOR", payload: idealFor });
                }}
              ></input>
              <label>{idealFor}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
