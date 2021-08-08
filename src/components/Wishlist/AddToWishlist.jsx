import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./AddToWishlist.css";
import { useStateContext } from "../../context";
import { checkIfAdded } from "../../utils/arrayOperations";

export const AddToWishlist = ({ products }) => {
  const {
    state: { wishlist },
    dispatch,
  } = useStateContext();

  const isItemInWishlist = checkIfAdded(wishlist, products.id);

  return (
    <>
      <div className="wishlistIconsWrapper">
        {isItemInWishlist ? (
          <AiFillHeart
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: products })
            }
            className="wishlistIcons wishlistIconFilled"
          />
        ) : (
          <AiOutlineHeart
            onClick={() =>
              dispatch({ type: "ADD_TO_WISHLIST", payload: products })
            }
            className="wishlistIcons"
          />
        )}
      </div>
    </>
  );
};
