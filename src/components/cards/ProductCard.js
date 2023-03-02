import React from "react";
import watch from "../../assets/images/watch.jpg";
import headphone from "../../assets/images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import cart from "../../assets/images/add-cart.svg";
import view from "../../assets/images/view.svg";
import compare from "../../assets/images/prodcompare.svg";
import wish from "../../assets/images/wish.svg";

const ProductCard = ({ grid, product }) => {
  let location = useLocation();
  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <Link
        to={`/products/${product?._id}`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist icon" />
          </button>
        </div>
        <div className="product-image">
          <img
            src={product?.images[0]?.url}
            alt="product"
            className="img-fluid"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
          <img src={headphone} alt="product" className="img-fluid" />
        </div>
        <div className="product-details">
          <h6 className="brand">{product?.brand}</h6>
          <h5 className="product-title">{product?.title?.slice(0, 60)}...</h5>
          <ReactStars
            count={5}
            value={product?.totalratings}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            <span dangerouslySetInnerHTML={{ __html: product?.description }} />
          </p>
          <p className="price">
            {product?.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
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
