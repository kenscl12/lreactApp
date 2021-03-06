import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {combineClassNames} from "../core/utils/classNamesExtensions";

function Form(props) {
	const {children, display, className} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames({
		"wg-form": true,
		"wg-form_feedback": true
	});

	classes = combineClassNames(className, classes);

	return (
		<div className={classes}>{children}</div>
	);
}

Form.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string
};

export default Form;