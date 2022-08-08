import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingIndicator = () => {
  return (
      <Spinner className="primaryColor" animation="border" variant="primary"></Spinner>
  );
}

export { LoadingIndicator }
