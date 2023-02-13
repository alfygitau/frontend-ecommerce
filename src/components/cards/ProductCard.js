import React from "react";
import watch from "../../assets/images/watch.jpg";
import headphone from "../../assets/images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import cart from "../../assets/images/add-cart.svg";
import view from "../../assets/images/view.svg";
import compare from "../../assets/images/prodcompare.svg";
import wish from "../../assets/images/wish.svg";

const ProductCard = ({ grid }) => {
  let location = useLocation();
  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link to="/products/id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist icon" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} alt="product" className="img-fluid" />
          <img src={headphone} alt="product" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi-colored for students
          </h5>
          <ReactStars
            count={5}
            value={3}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut saepe
            nisi odit officia neque eligendi dolor in similique dolorum, a ex
            fuga accusantium delectus sequi enim quae eaque animi magni!
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent" to="/">
              <img src={cart} alt="cart icon" />
            </button>
            <button className="border-0 bg-transparent" to="/">
              <img src={view} alt="cart icon" />
            </button>
            <button className="border-0 bg-transparent" to="/">
              <img src={compare} alt="cart icon" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
