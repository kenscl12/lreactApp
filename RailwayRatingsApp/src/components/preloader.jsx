import React from "react";
import PropTypes from "prop-types";

function Preloader(props) {
	if (!props.display) {
		return null;
	}

	return (
		<div className="wg-loader" />
	);
}

Preloader.defaultProps = {
	display: false
};

Preloader.propTypes = {
	display: PropTypes.bool
};

export default Preloader;