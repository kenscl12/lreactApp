import React from "react";
import PropTypes from "prop-types";

function ListDate(props) {
	const {title, display} = props;

	if (display === false) {
		return null;
	}

	return (
		<caption>
			<h4>{title}</h4>
		</caption>
	);
}

ListDate.propTypes = {   
	display: PropTypes.bool,
	title: PropTypes.string
};

export default ListDate;

