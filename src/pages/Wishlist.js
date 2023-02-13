import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../assets/images/watch.jpg";
import cross from "../assets/images/cross.svg";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="watch"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor t1 7.0 1GB RAM 8GB ROM with Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="watch"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor t1 7.0 1GB RAM 8GB ROM with Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="watch"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honor t1 7.0 1GB RAM 8GB ROM with Wi-Fi + 3G Tablet
                  </h5>
                  <h6 className="price">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
