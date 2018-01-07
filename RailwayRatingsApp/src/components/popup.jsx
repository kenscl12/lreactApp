import React from "react";
import PropTypes from "prop-types";

import PopupBody from "./popupBody";

function Popup(props) {
	if (props.display !== true) {
		return null;
	}

	return <PopupBody
		display={props.display}
		title={props.title}
		displayCloseButton={props.displayCloseButton}
		onClose={props.onClose}
		fixed={props.fixed}
		scroll={props.scroll}
		displayContinueButton={props.displayContinueButton}
		onContinue={props.onContinue}
		continueButtonText={props.continueButtonText}>
		{props.children}
	</PopupBody>;
}

Popup.propTypes = {
	children: PropTypes.node,
	display: PropTypes.bool,
	title: PropTypes.string,
	displayCloseButton: PropTypes.bool,
	onClose: PropTypes.func,
	fixed: PropTypes.bool,
	scroll: PropTypes.bool,
	displayContinueButton: PropTypes.bool,
	onContinue: PropTypes.func,
	continueButtonText: PropTypes.string
};

export default Popup;