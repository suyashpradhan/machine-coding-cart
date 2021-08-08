import "./Bag.css";
import { useStateContext } from "../../context";
import { BagCard } from "../../components/Bag/BagCard";
import { Link } from "react-router-dom";
import { PriceSummary } from "../../components/Checkout/PriceSummary";

export const Bag = () => {
  const {
    state: { bag },
  } = useStateContext();

  return (
    <>
      <div className="wrapper-fluid ">
        <div className="pageLayout">
          <div className="wishlistBody">
            {bag.length > 0 && (
              <>
                <h1 className="wishlistTitle">
                  My Bag <span>({bag.length} items)</span>
                </h1>
                <div className="bagRow">
                  <div className="wishlistItem">
                    {bag.map((bag) => (
                      <BagCard bagItems={bag} />
                    ))}
                  </div>
                  <PriceSummary />
                </div>
              </>
            )}

            {bag.length === 0 && (
              <>
                <h1 className="wishlistTitle">YOUR BAG IS EMPTY.</h1>
                <h3 className="wishlistSubtitle">Add items to your bag</h3>
                <Link to="/">
                  <button className="button button-secondary">
                    Continue Shopping
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
