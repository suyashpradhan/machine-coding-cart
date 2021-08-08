import { useStateContext } from "../../context";

export const Brands = () => {
  const { state, dispatch } = useStateContext();

  const brands = [
    "Mahi creations",
    "Metronaut",
    "Highlander",
    "Jaipur Kurti",
    "Herway",
  ];

  return (
    <div className="mB2">
      <h2 className="sidebarTitle">Brands</h2>
      <div className="sidebarCollection">
        {brands.map((brand) => {
          return (
            <div className="sidebarLists" key={brand}>
              <input
                type="checkbox"
                checked={state.filters.sortByBrand.includes(brand)}
                onChange={() => {
                  dispatch({ type: "SORT_BY_BRAND", payload: brand });
                }}
              ></input>
              <label>{brand}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
