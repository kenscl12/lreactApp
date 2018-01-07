import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {combineClassNames} from "../core/utils/classNamesExtensions";

function Button(props) {
	const {display, big, more, light, white, small, load, className, disabled, onClick, children} = props;

	if (display === false) {
		return null;
	}

	let classes = classNames({
		"wg-button": true,
		"wg-button_always-big": big,
		"wg-button_light": light,
		"wg-button_white": white,
		"wg-button_small": small,
		"wg-button_load": load,
		"wg-order-card__more-button": more
	});

	classes = combineClassNames(className, classes);

	return (
		<button
			className={classes}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	);
}

Button.propTypes = {
	display: PropTypes.bool,
	big: PropTypes.bool,
	more: PropTypes.bool,
	light: PropTypes.bool,
	white: PropTypes.bool,
	small: PropTypes.bool,
	load: PropTypes.bool,
	className: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	children: PropTypes.node
};

export default Button;