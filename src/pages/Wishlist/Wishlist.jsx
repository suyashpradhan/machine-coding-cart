import "./Wishlist.css";
import { useStateContext } from "../../context";
import { WishlistCard } from "../../components/Wishlist/WishlistCard";
import { Link } from "react-router-dom";

export const Wishlist = () => {
  const {
    state: { wishlist },
  } = useStateContext();

  return (
    <>
      <div className="wrapper-fluid ">
        <div className="pageLayout">
          <div className="wishlistBody">
            {wishlist.length > 0 && (
              <>
                <h1 className="wishlistTitle">
                  My Wishlist <span>({wishlist.length} items)</span>
                </h1>
                <div className="wishlistItem">
                  {wishlist.map((wishlist) => (
                    <WishlistCard wishlist={wishlist} />
                  ))}
                </div>
              </>
            )}

            {wishlist.length === 0 && (
              <>
                <h1 className="wishlistTitle">YOUR WISHLIST IS EMPTY.</h1>
                <h3 className="wishlistSubtitle">
                  Add items that you like to your wishlist
                </h3>
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
