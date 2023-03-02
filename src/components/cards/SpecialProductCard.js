import React from "react";
import watch from "../../assets/images/watch.jpg";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProductCard = ({ product }) => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="special-image">
            <img src={product?.images[0]?.url} alt="watch special" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{product?.brand}</h5>
            <h6 className="title">
              {product?.title}
            </h6>
            <ReactStars
              count={5}
              value={product?.totalratings}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100.00</span>&nbsp; <strike>$200</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-1.5 bg-danger">1</span>:
                <span className="badge rounded-circle p-1.5 bg-danger">1</span>:
                <span className="badge rounded-circle p-1.5 bg-danger">1</span>
              </div>
            </div>
            <div className="product-count my-3">
              <p>Products: {product?.quantity}</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div class="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
            <Link className="button" to="/">
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProductCard;
