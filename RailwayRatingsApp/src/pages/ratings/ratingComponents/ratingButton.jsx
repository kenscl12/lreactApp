import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function RatingButton(props) {
	const {className, value, checked, disabled, onChange, ratingType} = props;

	const classes = classNames({
		"rating-list__radio": true
	});

	return [
		<input
			key={`rating_input_${value}`}
			className={classes}
			type="radio"
			id={`rating_input_${ratingType}_${value}`}
			checked={checked}
			onChange={onChange}
			disabled={disabled}
			value={value} />,
		<label
			key={`rating_label_${value}`}
			htmlFor={`rating_input_${ratingType}_${value}`}
			className={`rating-list__label ${className}`}>
			{value}</label>
	];
}

RatingButton.propTypes = {
	value: PropTypes.string,
	ratingType: PropTypes.string,
	className: PropTypes.string,
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
};

export default RatingButton;