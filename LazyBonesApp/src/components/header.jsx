import React from "react";
import PropTypes from "prop-types";

function Header(props) {
	const {children, display} = props;

	if (display === false) {
		return null;
	}

	return (
		<div className="header clearfix">
			<div>
				<ul className="nav nav-pills float-left">
					<li className="nav-item"><h3 className="text-muted">{children}</h3></li>
				</ul>
			</div>
		</div>
	);
}

Header.propTypes = {
	display: PropTypes.bool,
	children: PropTypes.node
};

export default Header;