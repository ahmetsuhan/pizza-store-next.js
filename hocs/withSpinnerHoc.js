import React from "react";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
