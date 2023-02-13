import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog-1.jpg";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={blog1} alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">1st January 2023</p>
        <h5 className="title">A beautiful sunday morning rennaisance</h5>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          autem voluptatem ab corrupti consequatur. Quia
        </p>
        <Link to="/blogs/id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
