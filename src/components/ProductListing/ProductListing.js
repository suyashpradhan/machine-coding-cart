import "./ProductListing.css";
import { useStateContext } from "../../context";
import { ProductCard } from "../ProductCard";
import { Sidebar } from "../Sidebar";
import { Sort } from "../Sort";
import { filterData } from "./DataFilters";
import { sortData } from "./DataSort";

export const ProductListing = () => {
  const { state } = useStateContext();

  const sortedData = sortData(state, state.products);
  const getFilteredData = filterData(state, sortedData);
  return (
    <>
      <div className="wrapper-fluid ">
        <div className="pageLayout">
          <Sidebar />
          <main className="mainSection">
            <div className="mainTopSection mT4 ">
              <Sort />
            </div>
            <div className="products">
              {getFilteredData.length > 0 ? (
                getFilteredData.map((products) => {
                  return <ProductCard key={products.id} products={products} />;
                })
              ) : (
                <h2 className="noProducts">
                  No Products Found In This Category
                </h2>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
