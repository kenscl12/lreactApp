import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {combineClassNames} from "../core/utils/classNamesExtensions";

function TextArea(props) {
	const {value, tabIndex, className, onBlur, onChange} = props;
	let classes = classNames({
		"wg-textarea": true
	});

	classes = combineClassNames(className, classes);

	return (
		<textarea
			className={classes}
			value={value}
			tabIndex={tabIndex}
			onBlur={onBlur}
			onChange={onChange}>
			{value}
		</textarea>
	);
}


TextArea.propTypes = {
	value: PropTypes.string,
	tabIndex: PropTypes.number,
	className: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func
};

export default TextArea;