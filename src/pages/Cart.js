import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../assets/images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex align-items-center justify-content-between">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data d-flex mb-2 align-items-center justify-content-between">
                <div className="cart-col-1 d-flex gap-15 py-2 align-items-center">
                  <div className="w-25">
                    <img className="img-fluid" src={watch} alt="watch" />
                  </div>
                  <div className="w-75">
                    <p className="title">sdfjgidflshgzdfslkzfg</p>
                    <p className="color">vdkhcgdfjgd</p>
                    <p className="size">gihgirsdhgdfghsd</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <p className="price">$ 100</p>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name="quantity"
                      id="quantity"
                      min={1}
                      max={10}
                    />
                  </div>
                  <div>
                    <AiFillDelete className="text-danger fs-5" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <p className="price">$ 100</p>
                </div>
              </div>
              <div className="col-12 py-2">
                <div className="d-flex align-items-baseline justify-content-between">
                  <Link to="/store" className="button">
                    Continue Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h5>SubTotal:$ 100</h5>
                    <p>Tax and shipping costs calculated at checkout</p>
                    <Link className="button" to="checkout">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
