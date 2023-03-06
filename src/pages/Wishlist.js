import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import cross from "../assets/images/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import Spinner from "../components/Spinner";

const Wishlist = () => {
  let dispatch = useDispatch();
  const { wishlist, isLoading } = useSelector((state) => state.wishlist);

  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="wishlist-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row d-flex flex-wrap gap-15 align-items-center">
                {wishlist &&
                  wishlist.map((product) => (
                    <div className="col-3">
                      <div className="wishlist-card position-relative">
                        <img
                          src={cross}
                          alt="watch"
                          className="position-absolute cross img-fluid"
                          onClick={() => dispatch(removeFromWishlist(product))}
                        />
                        <div className="wishlist-card-image">
                          <img
                            src={product?.images[0]?.url}
                            alt="watch"
                            className="img-fluid w-100"
                          />
                        </div>
                        <div className="py-3 px-3 bg-white wishlist-detail">
                          <h5 className="title">{product?.title}</h5>
                          <h6 className="price">
                            {product?.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Wishlist;
