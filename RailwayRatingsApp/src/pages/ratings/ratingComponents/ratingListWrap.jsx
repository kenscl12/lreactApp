import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {combineClassNames} from "../../../core/utils/classNamesExtensions";

function RatingListWrap(props) {
	const {children, display, className} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames({
		"rating-list__wrap": true
	});

	classes = combineClassNames(className, classes);

	return (
		<div className={classes}>{children}</div>
	);
}

RatingListWrap.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string
};

export default RatingListWrap;