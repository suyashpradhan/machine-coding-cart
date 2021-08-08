import "./ProductCard.css";
import { AddToWishlist } from "../Wishlist";
import { AddToBag } from "../Bag/AddToBag";

export const ProductCard = ({ products }) => {
  return (
    <>
      <div className="card" key={products.id}>
        <AddToWishlist products={products} />
        <div>
          <div className="cardTop">
            <img
              src={products.image}
              alt={products.name}
              className="cardImage"
            />
          </div>
          <div className="cardBody">
            <div className="cardTitleRow">
              <div>
                <h1 className="productName">{products.name}</h1>
                <h2 className="productCategory">{products.brand}</h2>
                <h3 className="availableSizes">
                  Available Sizes:{" "}
                  <span className="sizes">{products.size}</span>
                </h3>
              </div>
            </div>
            <h3 className="productPrice">Rs {products.price}</h3>

            <AddToBag products={products} />
          </div>
        </div>
      </div>
    </>
  );
};
