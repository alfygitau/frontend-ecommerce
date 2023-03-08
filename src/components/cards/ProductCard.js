import React, { useEffect } from "react";
import watch from "../../assets/images/watch.jpg";
import headphone from "../../assets/images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import carticon from "../../assets/images/add-cart.svg";
import view from "../../assets/images/view.svg";
import compare from "../../assets/images/prodcompare.svg";
import wish from "../../assets/images/wish.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

const ProductCard = ({ grid, product }) => {
  let location = useLocation();
  let dispatch = useDispatch();

  let { cart } = useSelector((state) => state.cart);
  let { wishlist } = useSelector((state) => state.wishlist);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, color: product?.color }));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      style={{ marginBottom: "20px" }}
    >
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button
            onClick={() => dispatch(addToWishlist(product))}
            className="border-0 bg-transparent"
          >
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
          <img
            src={product?.images[1]?.url}
            alt="product"
            className="img-fluid"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </div>
        <div className="product-details">
          <h6 className="brand">{product?.brand}</h6>
          <Link to={`/products/${product?._id}`}>
            <h5 className="product-title">{product?.title?.slice(0, 60)}...</h5>
          </Link>
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
            <button
              className="border-0 bg-transparent"
              onClick={() => handleAddToCart(product)}
            >
              <img src={carticon} alt="cart icon" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="cart icon" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={compare} alt="cart icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
