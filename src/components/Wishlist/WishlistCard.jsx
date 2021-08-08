import { Link } from "react-router-dom";
import "./AddToWishlist.css";
import { GrFormClose } from "react-icons/gr";
import { useStateContext } from "../../context";

export const WishlistCard = ({ wishlist }) => {
  const { dispatch } = useStateContext();
  return (
    <>
      <div className="card">
        <GrFormClose
          className="closeButton"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_WISHLIST", payload: wishlist })
          }
        />
        <Link to={`/`}>
          <div className="cardTop">
            <img
              src={wishlist.image}
              alt={wishlist.name}
              className="cardImage"
            ></img>
          </div>
          <div className="cardBody">
            <h1 className="productName">{wishlist.name}</h1>

            <h3 className="productPrice">Rs {wishlist.price}</h3>
          </div>
        </Link>
      </div>
    </>
  );
};
