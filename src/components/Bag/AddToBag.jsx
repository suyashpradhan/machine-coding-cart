import { useStateContext } from "../../context";
import { checkIfAdded } from "../../utils/arrayOperations";

export const AddToBag = ({ products }) => {
  const {
    state: { bag },
    dispatch,
  } = useStateContext();

  const isItemInBag = checkIfAdded(bag, products.id);

  return (
    <>
      <div className="block mT1 w-100">
        {isItemInBag ? (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_BAG", payload: products })
            }
            className="button button-primary w-100"
          >
            Go To Bag
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_TO_BAG", payload: products })}
            className="button button-secondary w-100"
          >
            Add To Bag
          </button>
        )}
      </div>
    </>
  );
};
