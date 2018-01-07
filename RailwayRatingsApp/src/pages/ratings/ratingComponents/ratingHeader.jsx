import React from "react";
import PropTypes from "prop-types";

class RatingHeader extends React.Component {
	renderTrainInfo() {
		/** @type {RatingTransactionInfo} */
		const ratingTransactionInfo = this.props.ratingTransactionInfo;

		if (!ratingTransactionInfo) {
			return null;
		}

		if (!ratingTransactionInfo.fromStation || !ratingTransactionInfo.toStation || !ratingTransactionInfo.trainNumber) {
			return null;
		}

		return (
			<span className="color_dark"> {ratingTransactionInfo.trainNumber} {ratingTransactionInfo.fromStation} - {ratingTransactionInfo.toStation} </span>
		);
	}

	render() {
		return (
			<p>{this.context.localize("Спасибо, что воспользовались нашими услугами при покупке билета. Вам понравилась поездка? Оцените поезд")}
				{this.renderTrainInfo()}
				{this.context.localize("по десятибалльной шкале")}:
			</p>
		);
	}
}

RatingHeader.contextTypes = {
	localize: PropTypes.func,
	context: PropTypes.object
};

RatingHeader.propTypes = {
	ratingTransactionInfo: PropTypes.object
};

export default RatingHeader;