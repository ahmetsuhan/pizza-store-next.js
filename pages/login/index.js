import { Formik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { applicationHelper } from "@utils/applicationHelper.js";
import { formMessages } from "@utils/constants.js";
import { isEmailExist, getUserByEmailAndPasword } from "@store/user/userUtils";

import { connect } from "react-redux";
import { setCurrentUser } from "@store/user/userAction.js";

const LoginPage = ({ setLoggedInUser }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleRules = (values) => {
    let errors = {};

    for (let prop in values) {
      if (!values[prop]) {
        errors[prop] = formMessages.required;
      }
    }

    if (!applicationHelper.isValidEmail(values.email)) {
      errors.email = formMessages.notValidEmail;
    }

    isEmailExist(values.email).then((r) => {
      setEmail(r);
    });
    if (email.length === 0) {
      errors.email = formMessages.emailNotExist;
    }

    return errors;
  };

  const handleSubmit = (values, actions) => {
    getUserByEmailAndPasword(values.email, values.password).then((res) => {
      setLoggedInUser(res[0]);
      router.push(`/user/${res[0].id}`);
    });

    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <>
      <div className="title_page">
        <h1>Login</h1>
      </div>

      <div className="content_wrapper">
        <div className="inner">
          <h2>Welcome !!!</h2>
          <div>
            <h2>Test User</h2>
            <span>email : Rey.Padberg@karina.biz</span>
            <br />
            <span>password: 123456</span>
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => handleRules(values)}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
          >
            {({
              errors,
              values,
              handleSubmit,
              handleChange,
              handleBlur,
              touched,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <div className="error_label">{errors.email}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <div className="error_label">{errors.password}</div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  setLoggedInUser: setCurrentUser,
};

export default connect(null, mapDispatchToProps)(React.memo(LoginPage));
