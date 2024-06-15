import React from "react";
import PropTypes from "prop-types"
/**
 * View component that displays the Version of the application
 */

export function Version({ current }) {
  return (
    <div className="col-xs-6 col-lg-4 text-center">
        <h1 className="display-3">{current}</h1>
        <p className="textMuted">Version</p>
    </div>
  );
}


Version.propTypes = {
    current: PropTypes.string,
    
}