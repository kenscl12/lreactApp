import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {combineClassNames} from "../core/utils/classNamesExtensions";

function FormCell(props) {
	const {children, display, className} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames({
		"wg-form__cell": true
	});

	classes = combineClassNames(className, classes);

	return (
		<div className={classes}>{children}</div>
	);
}

FormCell.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string
};

export default FormCell;