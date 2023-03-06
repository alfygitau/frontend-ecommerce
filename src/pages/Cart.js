import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../assets/images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Color from "../components/Color";
import {
  decreaseCount,
  incrementCount,
  removeFromCart,
} from "../features/cart/cartSlice";

const Cart = () => {
  let dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title={`Cart(${cart.length})`} />
      <section className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            {cart.length === 0 ? (
              <div className="col-12 d-flex align-items-center justify-content-center flex-column">
                <h5>Your cart is empty</h5>
                <p>Time to go shopping</p>
              </div>
            ) : (
              <div className="col-12">
                <div className="cart-header d-flex align-items-center justify-content-between">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity/actions</h4>
                  <h4 className="cart-col-4">Total</h4>
                </div>
                {cart &&
                  cart.map((item) => (
                    <div
                      key={item?.product?._id}
                      className="cart-data d-flex mb-2 align-items-center justify-content-between"
                    >
                      <div className="cart-col-1 d-flex gap-15 py-2 align-items-center">
                        <div className="w-25" style={{ height: "140px" }}>
                          <img
                            className="img-fluid w-100 h-100"
                            src={item?.product?.images[0]?.url}
                            alt="watch"
                          />
                        </div>
                        <div className="w-75">
                          <p className="title">{item?.product?.title}</p>
                          <Color color={item?.color} />
                          <p className="size">LG</p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <p className="price">
                          {item?.product?.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </p>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div className="d-flex align-items-center gap-15">
                          <button
                            className="bg-white p-2 border-0"
                            onClick={() => dispatch(decreaseCount(item))}
                          >
                            -
                          </button>
                          <input
                            className="form-control"
                            type="number"
                            name="quantity"
                            id="quantity"
                            min={1}
                            max={10}
                            value={item?.count}
                          />
                          <button
                            className="bg-white p-2 border-0"
                            onClick={() => dispatch(incrementCount(item))}
                          >
                            +
                          </button>
                        </div>
                        <div>
                          <AiFillDelete
                            onClick={() => dispatch(removeFromCart(item))}
                            className="text-danger fs-5 cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <p className="price">
                          {(item?.product?.price * item?.count).toLocaleString(
                            "en-US",
                            {
                              style: "currency",
                              currency: "USD",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                <div className="col-12 py-2">
                  <div className="d-flex align-items-baseline justify-content-between">
                    <Link to="/store" className="button">
                      Continue Shopping
                    </Link>
                    <div className="d-flex flex-column align-items-end">
                      <h5>
                        SubTotal:
                        {cart
                          .reduce(
                            (acc, cv) => acc + cv.product.price * cv.count,
                            0
                          )
                          .toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                      </h5>
                      <p>Tax and shipping costs calculated at checkout</p>
                      <Link className="button" to="/checkout">
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
