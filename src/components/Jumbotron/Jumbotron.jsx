import React from "react";
import PropTypes from "prop-types";
/**
 * View component that displays the Hello Message and Version
 */

export function Jumbotron({ administration, version }) {
  return (
    <div className="row jumbotron mt-3">
      {administration}
      {version}
    </div>
  );
}

//How do I pass in prop types for these two objects?

Jumbotron.propTypes = {
  administration: PropTypes.shape({
    name: PropTypes.string
  }),
  version: PropTypes.shape({
    current: PropTypes.string
  })
};
