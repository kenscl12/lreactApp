import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {combineClassNames} from "../core/utils/classNamesExtensions";

function TextBox(props) {
	const {value, small, error, tabIndex, placeholder, className, onBlur, onChange, disabled} = props;
	let classes = classNames({
		"wg-textinput": true,
		"wg-textinput_small": small,
		"wg-textinput_error": error,
		"wg-textinput_disabled": disabled
	});

	classes = combineClassNames(className, classes);

	return (
		<input
			type="text"
			className={classes}
			value={value}
			tabIndex={tabIndex}
			placeholder={placeholder}
			onBlur={onBlur}
			onChange={onChange} />
	);
}


TextBox.propTypes = {
	value: PropTypes.string,
	small: PropTypes.bool,
	error: PropTypes.bool,
	disabled: PropTypes.bool,
	tabIndex: PropTypes.number,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func
};

export default TextBox;