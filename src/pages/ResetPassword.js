import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <form className="d-flex gap-15 flex-column">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="confirm-password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Change Password</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
