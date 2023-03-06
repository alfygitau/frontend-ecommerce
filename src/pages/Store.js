import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../assets/images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import gr1 from "../assets/images/gr.svg";
import gr2 from "../assets/images/gr2.svg";
import gr3 from "../assets/images/gr3.svg";
import gr4 from "../assets/images/gr4.svg";
import ProductCard from "../components/cards/ProductCard";
import Color from "../components/Color";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import Spinner from "../components/Spinner";

const Store = () => {
  let [grid, setGrid] = useState(4);
  let dispatch = useDispatch();

  const { products, isLoading, isSuccess } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="store-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-3">
                  <div className="filter-card mb-3">
                    <h3 className="filter-title">Shop by categories</h3>
                    <div>
                      <ul className="ps-0">
                        <li>Watch</li>
                        <li>Tv's</li>
                        <li>Cameras</li>
                        <li>Laptops</li>
                      </ul>
                    </div>
                  </div>
                  <div className="filter-card mb-3">
                    <h3 className="filter-title">Filter By</h3>
                    <div>
                      <h5 className="sub-title">Availability</h5>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="instock"
                        />
                        <label htmlFor="instock" className="form-check-label">
                          In Stock (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="outofstock"
                        />
                        <label
                          htmlFor="outofstock"
                          className="form-check-label"
                        >
                          Out of Stock (0)
                        </label>
                      </div>
                    </div>
                    <div>
                      <h5 className="sub-title">Price</h5>
                      <div className="d-flex align-items-center gap-10">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control py-1"
                            id="floatingInput"
                            placeholder="From"
                          />
                          <label htmlFor="floatingInput">From</label>
                        </div>
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control py-1"
                            id="floatingInput1"
                            placeholder="To"
                          />
                          <label htmlFor="floatingInput1">To</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="sub-title">Colors</h5>
                      <div>
                        {/* colors */}
                        <Color />
                      </div>
                      <h5 className="sub-title">Size</h5>
                      <div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="color-2"
                          />
                          <label htmlFor="color-2" className="form-check-label">
                            M (2)
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="color-1"
                          />
                          <label htmlFor="color-1" className="form-check-label">
                            S (2)
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-card mb-3">
                    <h3 className="filter-title">Product Tags</h3>
                    <div>
                      <div className="product-tags d-flex align-items-center flex-wrap gap-10">
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                          Featured
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                          Popular
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                          Special
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="filter-card mb-3">
                    <h3 className="filter-title">Random products</h3>
                    <div>
                      <div className="random-products mb-3 d-flex">
                        <div className="w-50">
                          <img
                            src={watch}
                            className="img-fluid"
                            alt="random watch"
                          />
                        </div>
                        <div className="w-50">
                          <h5>
                            Kids headphone bulk 10 pack multi-colored for
                            students
                          </h5>
                          <ReactStars
                            count={5}
                            value="3"
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                          />
                          <b>$300</b>
                        </div>
                      </div>
                      <div className="random-products d-flex">
                        <div className="w-50">
                          <img
                            src={watch}
                            className="img-fluid"
                            alt="random watch"
                          />
                        </div>
                        <div className="w-50">
                          <h5>
                            Kids headphone bulk 10 pack multi-colored for
                            students
                          </h5>
                          <ReactStars
                            count={5}
                            value="3"
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                          />
                          <b>$300</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-9">
                  <div className="filter-sort-grid mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap=10">
                        <p className="mb-0 d-block" style={{ width: "100px" }}>
                          Sort By:
                        </p>
                        <select
                          name=""
                          id=""
                          className="form-control form-select"
                        >
                          <option value="best-selling" selected>
                            Best Selling
                          </option>
                          <option value="featured">Featured Products</option>
                          <option value="title-ascending">
                            Alphabetically, A-Z
                          </option>
                          <option value="title-descending">
                            Alphabetically, Z-A
                          </option>
                          <option value="price-ascending">
                            Price, Low - High
                          </option>
                          <option value="price-desceding">
                            Price, High - Low
                          </option>
                          <option value="created-ascending">
                            Date, Old - New
                          </option>
                          <option value="created-descending">
                            Date, New - Old
                          </option>
                        </select>
                      </div>
                      <div className="d-flex align-items-center gap-10">
                        <p className="total mb-0">{products?.length} Products</p>
                        <div className="d-flex gap-10 align-items-center grid">
                          <img
                            src={gr4}
                            className="d-block img-fluid "
                            alt="grid"
                            onClick={() => setGrid(3)}
                          />
                          <img
                            src={gr3}
                            className="d-block img-fluid "
                            alt="grid"
                            onClick={() => setGrid(4)}
                          />
                          <img
                            src={gr2}
                            className="d-block img-fluid "
                            alt="grid"
                            onClick={() => setGrid(6)}
                          />
                          <img
                            src={gr1}
                            className="d-block img-fluid "
                            alt="grid"
                            onClick={() => setGrid(12)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="products-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                      {products &&
                        products.map((product) => (
                          <ProductCard grid={grid} product={product} />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Store;
