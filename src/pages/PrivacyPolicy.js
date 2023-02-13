import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />
      <section className="policy-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy">
                <p>
                  <h6>Privacy policy</h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  qui quasi reprehenderit sequi ab maxime porro optio
                  consectetur quaerat a quisquam cumque vel alias est earum
                  ullam, quod necessitatibus blanditiis.
                  <h6>Rules</h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, laboriosam eveniet reprehenderit quis, quibusdam iste
                  blanditiis deserunt voluptas, tenetur dolores ipsam. Molestias
                  neque ipsa earum dolore explicabo voluptas dolores culpa!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
