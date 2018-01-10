import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {combineClassNames} from "../core/utils/classNamesExtensions";

function Label(props) {
	const {children, display, className, dark} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames({
		"wg-form__label": true,
		"wg-form__label_color_dark": dark
	});

	classes = combineClassNames(className, classes);

	return (
		<span className={classes}>{children}</span>
	);
}

Label.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node,
	className: PropTypes.string,
	dark: PropTypes.bool
};

export default Label;