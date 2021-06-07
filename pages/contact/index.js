import React, { useState } from "react";
import { Formik } from "formik";

import { sendMessage } from "@utils/contactHelper.js";
import { formMessages } from "@utils/constants.js";

import { useSelector } from "react-redux";

const ContactPage = () => {
  const [user, setUser] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = (values, actions) => {
    setUser({
      name: values.name,
      email: values.email,
      message: values.message,
    });

    sendMessage(user);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const handleRules = (values) => {
    let errors = {};

    for (let prop in values) {
      if (!values[prop]) {
        errors[prop] = formMessages.required;
      }
    }

    const reg =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!reg.test(values.email)) {
      errors.email = formMessages.notValidEmail;
    }

    if (values.message.split("").length > 240) {
      errors.message = "Message " + formMessages.lessThan240Ch;
    }

    return errors;
  };
  return (
    <>
      <div className="title_page">
        <h1>Contact Us</h1>
      </div>
      <div className="content_wrapper">
        <div className="inner">
          <h2>Feel free to contact us</h2>

          <Formik
            initialValues={{
              name: currentUser.name || "",
              email: currentUser.email || "",
              message: "",
            }}
            validate={(values) => handleRules(values)}
            onSubmit={(values, actions) => handleSubmit(values, actions)}
          >
            {({
              errors,
              values,
              handleSubmit,
              handleChange,
              isSubmitting,
              handleBlur,
              touched,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name ? (
                    <div className="error_label">{errors.name}</div>
                  ) : null}
                </div>

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
                  <label>Write a message right here</label>
                  <textarea
                    style={{ resize: "none", height: 141 }}
                    className="form-control"
                    name="message"
                    placeholder="Enter your message"
                    value={values.message}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && touched.message ? (
                    <div className="error_label">{errors.message}</div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
