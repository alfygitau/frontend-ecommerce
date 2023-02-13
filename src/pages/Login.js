import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form className="d-flex gap-15 flex-column">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className="form-control"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <div>
                    <Link to="/forgot-password">Forgot password ?</Link>
                  </div>
                  <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Login</button>
                    <Link to="/sign-up" className="button signup">
                      Sign Up
                    </Link>
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

export default Login;
