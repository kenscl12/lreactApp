import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {combineClassNames} from "../../../core/utils/classNamesExtensions";

function RatingsWrapper(props) {
	const {children, display, className} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames("article__section");

	classes = combineClassNames(className, classes);

	return (
		<div className={classes}>{children}</div>
	);
}

RatingsWrapper.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string
};

export default RatingsWrapper;