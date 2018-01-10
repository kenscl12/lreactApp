import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {combineClassNames} from "../core/utils/classNamesExtensions";

function Title(props) {
	const {className, children, level = "1", span, w900, w700, w500, dark, inline, brand, onClick} = props;
	let classes = classNames({
		"wg-title": true,
		[`wg-title_h${level}`]: true,
		"wg-title_w_900": w900,
		"wg-title_w_700": w700,
		"wg-title_w_500": w500,
		"wg-title_color_dark": dark,
		"wg-title_inline": inline,
		"wg-title_color_brand": brand
	});

	classes = combineClassNames(className, classes);

	if (span === true) {
		return (
			<span className={classes} onClick={onClick}>{children}</span>
		);
	}

	switch (level) {
		case 2: {
			return (
				<h2 className={classes} onClick={onClick}>{children}</h2>
			);
		}
		case 3: {
			return (
				<h3 className={classes} onClick={onClick}>{children}</h3>
			);
		}
		case 4: {
			return (
				<h4 className={classes} onClick={onClick}>{children}</h4>
			);
		}
		default:
			return (
				<h1 className={classes} onClick={onClick}>{children}</h1>
			);
	}
}

Title.propTypes = {
	className: PropTypes.string,
	level: PropTypes.number,
	span: PropTypes.bool,
	w900: PropTypes.bool,
	w700: PropTypes.bool,
	w500: PropTypes.bool,
	dark: PropTypes.bool,
	inline: PropTypes.bool,
	brand: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.func
};

export default Title;