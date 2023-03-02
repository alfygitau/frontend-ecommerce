import React, { useEffect } from "react";
import mainBanner from "../assets/images/main-banner-1.jpg";
import catBanner1 from "../assets/images/catbanner-01.jpg";
import catBanner2 from "../assets/images/catbanner-02.jpg";
import catBanner3 from "../assets/images/catbanner-03.jpg";
import catBanner4 from "../assets/images/catbanner-04.jpg";

import services1 from "../assets/images/service.png";
import services2 from "../assets/images/service-02.png";
import services3 from "../assets/images/service-03.png";
import services4 from "../assets/images/service-04.png";
import services5 from "../assets/images/service-05.png";
import { Link } from "react-router-dom";

import camera from "../assets/images/camera.jpg";
import tv from "../assets/images/tv.jpg";
import headphone from "../assets/images/headphone.jpg";
import Marquee from "react-fast-marquee";

import brand1 from "../assets/images/brand-01.png";
import brand2 from "../assets/images/brand-02.png";
import brand3 from "../assets/images/brand-03.png";
import brand4 from "../assets/images/brand-04.png";
import brand5 from "../assets/images/brand-05.png";
import brand6 from "../assets/images/brand-06.png";
import brand7 from "../assets/images/brand-07.png";
import brand8 from "../assets/images/brand-08.png";
import watch from "../assets/images/famous-1.webp";
import famous2 from "../assets/images/famous-2.webp";
import famous3 from "../assets/images/famous-3.webp";
import famous4 from "../assets/images/famous-4.webp";
import BlogCard from "../components/cards/BlogCard";
import ProductCard from "../components/cards/ProductCard";
import SpecialProductCard from "../components/cards/SpecialProductCard";
import {
  getFeaturedProducts,
  getPopularProducts,
  getSpecialProducts,
} from "../features/products/productSlice";

import { useDispatch, useSelector } from "react-redux";

const Homepage = () => {
  let dispatch = useDispatch();

  const { featuredProducts, popularProducts, specialProducts } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getFeaturedProducts("featured"));
    dispatch(getPopularProducts("popular"));
    dispatch(getSpecialProducts("special"));
  }, [dispatch]);
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={mainBanner}
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Buy iPad Air.</h5>
                  <p>From $599.00 or $49.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src={catBanner1}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF.</h4>
                    <h5>Laptops Max.</h5>
                    <p>
                      From $999.00 or <br /> $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catBanner2}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Free engraving.</h4>
                    <h5>Smart Watch 7.</h5>
                    <p>Shop the latest band styles and colors.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catBanner3}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New arrival.</h4>
                    <h5>Buy iPad Air.</h5>
                    <p>
                      From $999.00 or <br /> $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src={catBanner4}
                    className="img-fluid rounded-3"
                    alt="small-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE.</h4>
                    <h5>AirPods Max.</h5>
                    <p>High fidelity playback and ultra-low distortion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between family">
                <div className="d-flex align-items-center gap-15">
                  <img src={services1} alt="services" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">From all order over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services2} alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services3} alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services4} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src={services5} alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% secure payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-2 family">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src={headphone} alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-2 home-wrapper-2 family">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            {featuredProducts &&
              featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-2 home-wrapper-2 family">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Famous Collection</h3>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={watch} alt="watch" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5>Big screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399.00 or $16.62/mo. for 24 months</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous2} alt="watch" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">27 inc 5k retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous3} alt="watch" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">Galaxy 13+ pro</h6>
                  <p className="text-dark">
                    Now in green, from $399.00 or $16.62/mo. for 24 months
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src={famous4} alt="watch" className="img-fluid" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakes</h5>
                  <h6 className="text-dark">Room filling sound</h6>
                  <p className="text-dark">
                    From $699.00 or $56.62/mo. for 24 months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            {specialProducts &&
              specialProducts.map((product) => (
                <SpecialProductCard key={product?._id} product={product} />
              ))}
          </div>
        </div>
      </section>
      <section className="popular-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            {popularProducts &&
              popularProducts.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
          </div>
        </div>
      </section>
      <section className="carousel-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src={brand1} alt="brabd" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand2} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand3} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand4} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand5} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand6} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand7} alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src={brand8} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
