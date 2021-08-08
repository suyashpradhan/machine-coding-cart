import { Link } from "react-router-dom";
import "./Header.css";
import { useStateContext } from "../../context";

export const Header = () => {
  const {
    state: { bag },
  } = useStateContext();

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
            {bag.length >= 1 && (
              <span className="roundedBadge badgeActive">{bag.length}</span>
            )}
          </Link>
          <a
            href="https://github.com/suyashpradhan/machine-coding-cart"
            alt="Github"
            target="_blank"
            rel="noopener"
            className="navLinks"
          >
            Github
          </a>
        </nav>
      </header>
    </>
  );
};
