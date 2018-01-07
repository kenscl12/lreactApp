import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {combineClassNames} from "../../../core/utils/classNamesExtensions";

function RatingRow(props) {
	const {children, display, className, buttons} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames({
		"wg-form__row": true,
		"wg-form__row_buttons": buttons
	});

	classes = combineClassNames(className, classes);

	return (
		<div className={classes}>{children}</div>
	);
}

RatingRow.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	buttons: PropTypes.bool
};

export default RatingRow;