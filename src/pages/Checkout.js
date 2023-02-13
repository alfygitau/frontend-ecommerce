import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import watch from "../assets/images/watch.jpg";

const Checkout = () => {
  return (
    <>
      <Meta title="Checkout" />
      {/* <BreadCrumb title="Checkout" /> */}
      <section className="checkout-wrapper home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="webname border-bottom checkout-heading">Digitec Shop</h3>
                <nav
                  style={{ "$breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">Cart</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title checkout-title">Contact Information</h4>
                <p className="user-details">
                  Alfred Gitau(alfygitau@gmail.com)
                </p>
                <h4 className="mb-2 checkout-title">Shipping Address</h4>
                <form className="d-flex gap-15 flex-wrap justify-content-between">
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite etc (optional)"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ZipCode"
                    />
                  </div>
                  <div className="w-100">
                    <div className="mb-5 d-flex justify-content-between align-items-center">
                      <Link
                        className="text-dark d-flex align-items-center"
                        to="/cart"
                      >
                        <BiArrowBack /> &nbsp; Return to cart
                      </Link>
                      <Link to="/shipping" className="button">
                        Continue to shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <h3 className="border-bottom checkout-heading">Cart Items</h3>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex w-75 flex-5 gap-10 align-items-center">
                    <div className="w-25 position-relative">
                      <span className="bg-secondary rounded-circle badge position-absolute checkout-span">
                        1
                      </span>
                      <img src={watch} alt="watch" className="img-fluid" />
                    </div>
                    <div>
                      <p className="checkout-desc">
                        Kids Headphones Bulk 10 Pack multi colored for Students
                      </p>
                    </div>
                  </div>
                  <div className="w-25">
                    <h5 className="text-end total">$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">$ 900</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Shipping costs</p>
                  <p className="total-price">$ 19.65</p>
                </div>
              </div>
              <div className="d-flex border-bottom py-2 justify-content-between align-items-center">
                <h4 className="total">Total</h4>
                <h4 className="total-price">$ 1000.00</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
