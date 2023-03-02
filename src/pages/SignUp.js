import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as Yup from "yup";

let schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Email should be valid")
    .required("Email is required"),
  mobile: Yup.number().required("mobile is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
      formik.resetForm();
    },
  });
  return (
    <>
      <Meta title="Register an account" />
      <BreadCrumb title="Register an account" />
      <div className="signup-wrapper home-wrapper-2 py-5 family">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">
                  Register an account with us
                </h3>
                <form
                  className="d-flex gap-15 flex-column"
                  onSubmit={formik.handleSubmit}
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter Mobile Number"
                      className="form-control"
                      onChange={formik.handleChange}
                      value={formik.values.mobile}
                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <div>{formik.errors.mobile}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    <div className="error">
                      {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-3 d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
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

export default SignUp;
