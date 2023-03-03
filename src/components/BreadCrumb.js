import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <div className="breadcrumb mb-0 py-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0">
              <Link className="text-dark" to="/">
                Home &nbsp;
              </Link>
              /&nbsp;{title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
