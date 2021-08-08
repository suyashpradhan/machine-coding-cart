import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { useStateContext } from "../../context";
import "./Bag.css";

export const BagCard = ({ bagItems }) => {
  const { dispatch } = useStateContext();
  return (
    <>
      <div className="card">
        <GrFormClose
          className="closeButton"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_BAG", payload: bagItems })
          }
        />
        <div>
          <div className="cardTop">
            <img
              src={bagItems.image}
              alt={bagItems.name}
              className="cardImage"
            ></img>
          </div>
          <div className="cardBody">
            <h1 className="productName">{bagItems.name}</h1>

            <h3 className="productPrice">Rs {bagItems.price}</h3>

            <div className="buttonRow">
              <button
                className="button-extra increment"
                onClick={() =>
                  dispatch({
                    type: "INCREMENT_QUANTITY",
                    payload: bagItems,
                  })
                }
              >
                +
              </button>
              <span className="product-quantity">{bagItems.quantity}</span>
              <button
                className="button-extra decrement"
                onClick={() =>
                  dispatch({
                    type: "DECREMENT_QUANTITY",
                    payload: bagItems,
                  })
                }
              >
                -
              </button>
            </div>

            <div className="bagFooter flex justify-content-center mT1 mB1 ">
              <button
                type="button"
                className="button button-secondary "
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_BAG",
                    payload: bagItems,
                  })
                }
              >
                REMOVE ITEM
              </button>
              <button
                type="button"
                className="button button-primary mL1"
                onClick={() =>
                  dispatch({ type: "MOVE_TO_WISHLIST", payload: bagItems })
                }
              >
                Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
