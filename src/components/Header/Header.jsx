import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <>
      <header className="header pT1 pB1">
        <nav className="nav wrapper-fluid">
          <Link to="/" className="headerText">
            <h1 className="headerText">ShopCart</h1>
          </Link>
          <Link to="/wishlist" className="navLinks">
            Wishlist
          </Link>
          <Link to="/bag" className="navLinks">
            Bag
          </Link>
          <Link
            to="https://github.com/suyashpradhan/machine-coding-round-ecomm"
            alt="Github"
            target="_blank"
            rel="noopener"
            className="navLinks"
          >
            Github
          </Link>
        </nav>
      </header>
    </>
  );
};
