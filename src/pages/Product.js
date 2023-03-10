import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/cards/ProductCard";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import watch from "../assets/images/watch.jpg";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "rsuite";
import {
  getProduct,
  getSpecificCategoryProducts,
} from "../features/products/productSlice";
import ReactImageMagnify from "react-image-magnify";
import Spinner from "../components/Spinner";
import {
  addToCart,
  decreaseCount,
  incrementCount,
} from "../features/cart/cartSlice";

const Product = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  let { id } = useParams();
  let dispatch = useDispatch();

  const { isLoading, isSuccess, product, productsOfCategory } = useSelector(
    (state) => state.products
  );

  const { cart } = useSelector((state) => state.cart);

  let alreadyInCart = cart?.find((item) => item?.product?._id === product?._id);

  let productInCart = cart?.filter(
    (item) => item?.product?._id === product?._id
  );
  let count = productInCart[0]?.count;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(getSpecificCategoryProducts(product?.category));
  }, [product, dispatch]);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ product, color: product?.color }));
  };

  return (
    <>
      <Meta title={`${product?.title}`} />
      <BreadCrumb title={product?.title} />
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="product-wrapper home-wrapper-2 py-3">
            <div className="container-xxl">
              <div className="row">
                <div className="col-6">
                  <div className="main-product-image position-relative">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          isFluidWidth: true,
                          src: product?.images[0]?.url,
                        },
                        largeImage: {
                          src: product?.images[0]?.url,
                          width: 1200,
                          height: 900,
                        },
                      }}
                      enlargedImageContainerClassName="js-image-zoom__zoomed-image"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="main-product-details">
                    <div className="border-bottom">
                      <h3>{product?.title}</h3>
                    </div>
                    <div className="border-bottom py-3">
                      <p className="price">
                        {product?.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          value={product?.totalratings}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0 review-2">(2 reviews)</p>
                      </div>
                      <a href="#review">Write a review</a>
                    </div>
                    <div className="border-bottom">
                      <div className="d-flex gap-10 align-items-center review-data">
                        <h3 className="product-heading">Type:</h3>
                        <p className="product-data">{product?.category}</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Brand:</h3>
                        <p className="product-data">{product?.brand}</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Category:</h3>
                        <p className="product-data">{product?.category}</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Tags:</h3>
                        <p className="product-data">{product?.tags}</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-1">
                        <h3 className="product-heading">Availability:</h3>
                        <p className="product-data">InStock</p>
                      </div>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Size:</h3>
                        <div className="d-flex gap-15 flex-wrap">
                          <span className="badge border border-1 bg-white text-dark border-secondary product-data">
                            S
                          </span>
                          <span className="badge border border-1 bg-white text-dark border-secondary product-data">
                            L
                          </span>
                          <span className="badge border border-1 bg-white text-dark border-secondary product-data">
                            XL
                          </span>
                          <span className="badge border border-1 bg-white text-dark border-secondary product-data">
                            XXL
                          </span>
                        </div>
                      </div>
                      <div className="d-flex gap-10 align-items-center">
                        <h3 className="product-heading">Color:</h3>
                        <Color
                          color={product?.color}
                          className="product-data"
                        />
                      </div>
                      <div className="d-flex gap-15 flex-row align-items-center my-1">
                        <h3 className="product-heading">Quantity:</h3>
                        <p className="product-data">{product?.quantity}</p>
                      </div>
                      <div className="d-flex align-items-center gap-10 mb-2">
                        {alreadyInCart ? (
                          <div className="d-flex align-items-center gap-15 cart-quantity">
                            <span
                              className="cart-span"
                              onClick={() =>
                                dispatch(decreaseCount(productInCart[0]))
                              }
                            >
                              -
                            </span>
                            <p>{count}</p>
                            <span
                              className="cart-span"
                              onClick={() =>
                                dispatch(incrementCount(productInCart[0]))
                              }
                            >
                              +
                            </span>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="button border-0 cart-button"
                          >
                            Add To Cart
                          </button>
                        )}

                        <button className="button signup cart-button">
                          Buy it Now
                        </button>
                      </div>
                      <div className="d-flex align-items-center gap-15">
                        <div>
                          <a href="/compare-product">
                            <TbGitCompare /> &nbsp; Add to compare
                          </a>
                        </div>
                        <div>
                          <AiOutlineHeart /> &nbsp;
                          <a href="/wishlist">Add to Wishlist</a>
                        </div>
                      </div>
                      <div className="d-flex gap-10 flex-column my-1 review-data">
                        <h3 className="product-heading">Shipping & returns:</h3>
                        <p className="product-data">
                          Free shipping and returns available on all orders.{" "}
                          <br />
                          We ship all our domestic orders{" "}
                          <b>within 5-10 days</b>
                        </p>
                      </div>
                      <div className="d-flex gap-10 align-items-center my-1 review-data">
                        <h3 className="product-heading">Product Link:</h3>
                        <a
                          href="javascript:void(0)"
                          onClick={() =>
                            copyToClipboard(
                              "https://riogiftshop.com/wp-content/uploads/2021/04/3b12fbde-4693-4d60-87d5-3214e88efe96.jpg"
                            )
                          }
                        >
                          Copy product link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="description-wrapper home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h4>Description</h4>
                  <div className="bg-white p-3">
                    <p className="bg-white">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: product?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="review-wrapper home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h4>Reviews</h4>
                  <div className="review-inner-wrapper">
                    <div className="review-header d-flex justify-content-between align-items-end">
                      <div>
                        <h4 className="mb-2">Customer Reviews</h4>
                        <div className="d-flex gap-10 align-items-center">
                          <ReactStars
                            count={5}
                            value={3}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                          />
                          <p className="mb-0">Based on 2 reviews</p>
                        </div>
                      </div>
                      {orderedProduct && (
                        <div>
                          <a
                            className="text-dark text-decoration-underline"
                            href="#review"
                          >
                            Write a review
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="review-form py-4 mb-3" id="review">
                      <form action="" className="d-flex flex-column gap-15">
                        <h4 className="mt-3">Write a review</h4>
                        <div>
                          <label className="form-label" htmlFor="rating">
                            Rating
                          </label>
                          <ReactStars
                            count={5}
                            value={3}
                            edit={true}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div>
                          <label className="form-label" htmlFor="comment">
                            Body of Review (1500)
                          </label>
                          <textarea
                            name="comment"
                            className="w-100 form-control"
                            id="comment"
                            cols="30"
                            rows="3"
                            placeholder="Write your comments here"
                          ></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button className="button border-0">
                            Submit Review
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="reviews">
                      <div className="review">
                        <div className="d-flex gap-10 align-items-center">
                          <h6 className="mb-0">alfy gitau</h6>
                          <ReactStars
                            count={5}
                            value={3}
                            edit={true}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p className="mt-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quas amet sint neque est sunt nobis,
                          dignissimos, illum enim earum laborum fugit atque
                          ullam sed nulla, placeat iste. Consequuntur, esse
                          repellat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="popular-wrapper py-3 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 className="section-heading">You May Also Like</h3>
                </div>
                {productsOfCategory &&
                  productsOfCategory
                    .slice(0, 4)
                    .filter((p) => p._id !== product._id)
                    .map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Product;
