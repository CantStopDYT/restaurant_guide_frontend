import React from "react";
import PropTypes from "prop-types";

function DisplayError({ children }) {
  return (
    <div className="m-3 flex flex-row">
      <span className="w-1/3 m-auto">&nbsp;</span>
      <span className="w-2/3 text-left text-red-500">{children}</span>
    </div>
  );
}

DisplayError.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DisplayError;
