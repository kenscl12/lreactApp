import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import {Title} from "../components";

class PopupBody extends React.Component {
	componentDidMount() {
		if (!this.props.scroll) {
			document.getElementsByTagName("body")[0].style.overflow = "hidden";
		}
	}

	componentWillUnmount() {
		if (!this.props.scroll) {
			document.getElementsByTagName("body")[0].style.overflow = "";
		}
	}

	renderCloseButton(displayCloseButton, onClose) {
		if (!displayCloseButton) {
			return null;
		}

		return (
			<span className="wg-icon wg-icon_close-popup wg-popup__close" onClick={onClose} />
		);
	}

	renderContinueButton(display, callback) {
		if (!display) {
			return null;
		}

		return (
			<a className="wg-button wg-button_small wg-popup__continue" onClick={callback}>
				{this.props.continueButtonText || this.context.localize("Продолжить")}
			</a>
		);
	}

	render() {
		const classes = classNames({
			"wg-popup": true,
			"wg-popup_fixed": this.props.fixed
		});

		return (
			<div className={classes} style={{display: "block"}}>
				<div className="wg-popup__veil" />
				<div className="wg-popup__inner-wrap">
					{this.renderCloseButton(this.props.displayCloseButton, this.props.onClose)}
					<Title level={3}>{this.props.title}</Title>
					<div className="wg-popup__text">
						{this.props.children}
						{this.renderContinueButton(this.props.displayContinueButton, this.props.onContinue)}
					</div>
				</div>
			</div>
		);
	}
}

PopupBody.contextTypes = {
	localize: PropTypes.func
};

PopupBody.propTypes = {
	children: PropTypes.node,
	title: PropTypes.string,
	displayCloseButton: PropTypes.bool,
	onClose: PropTypes.func,
	fixed: PropTypes.bool,
	scroll: PropTypes.bool,
	displayContinueButton: PropTypes.bool,
	onContinue: PropTypes.func,
	continueButtonText: PropTypes.string
};

export default PopupBody;