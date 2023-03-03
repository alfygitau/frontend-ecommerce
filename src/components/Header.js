import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from "../assets/images/compare.svg";
import wishlist from "../assets/images/wishlist.svg";
import user from "../assets/images/user.svg";
import carticon from "../assets/images/cart.svg";
import menu from "../assets/images/menu.svg";

import { useSelector, useDispatch } from "react-redux";
import { getProductCategories } from "../features/product-categories/productCategorySlice";

const Header = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  let dispatch = useDispatch();
  const { productCategories } = useSelector(
    (state) => state.product_categories
  );

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getProductCategories());
  }, []);

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free shipping over $100 & free returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+254769404436">
                  +254769404436
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h3>
                <Link className="text-white" to="/">
                  Digitec Shop
                </Link>
              </h3>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products, brands and categories"
                  aria-label="Search products, brands and categories"
                  aria-describedby="basic-addon2"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <span
                  className="input-group-text search-icon"
                  id="basic-addon2"
                >
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={compare} alt="compare" className="links-icons" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src={wishlist}
                      alt="wishlist"
                      className="links-icons"
                    />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={user} alt="user" className="links-icons" />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={carticon} alt="cart" className="links-icons" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{cart?.length}</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-down py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu" />
                      <span className="me-5 d-inline-block">
                        Shop categories
                      </span>
                    </button>
                    <ul className="dropdown-menu">
                      {productCategories &&
                        productCategories.map((category) => (
                          <li key={category?._id}>
                            <Link
                              className="dropdown-item text-white"
                              to="links"
                            >
                              {category.title}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text-white" to="/">
                      Home
                    </NavLink>
                    <NavLink className="text-white" to="store">
                      Our Store
                    </NavLink>
                    <NavLink className="text-white" to="blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="text-white" to="contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
