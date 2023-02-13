import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import blog from "../assets/images/blog-1.jpg";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BlogDetails = () => {
  return (
    <>
      {/* this should be dynamic */}
      <Meta title="blog details" />
      <BreadCrumb title="blog details" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <BsArrowLeft className="fs-4" />
                  Go back to blogs
                </Link>
                <h3 className="title">
                  A beautiful sunday morning rennaisance
                </h3>
                <img src={blog} alt="blog" className="img-fluid w-100 my-4" />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don’t look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum.Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores. You need to be sure there isn’t anything embarrassing
                  hidden in the middle of text. All the Lorem Ipsum generators
                  on the Internet tend to repeat predefined chunks as necessary,
                  making this the first true generator on the Internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
