import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {combineClassNames} from "../../../core/utils/classNamesExtensions";

function RatingTitle(props) {
	const {children, display, className} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames({
		"rating-list__title": true
	});

	classes = combineClassNames(className, classes);

	return (
		<div className={classes}>{children}</div>
	);
}

RatingTitle.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string
};

export default RatingTitle;