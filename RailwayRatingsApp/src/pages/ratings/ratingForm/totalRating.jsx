import React from "react";
import PropTypes from "prop-types";
import {TrainRating} from "../ratingComponents";
import {makeBeautyNumber} from "../../../utils/numberExtensions";

class TotalRating extends React.Component {
	getRatingGrade(totalRating) {
		if (totalRating === undefined) {
			return undefined;
		}
		if (totalRating <= 4) {
			return "wg-train-rating__value_bad";
		}
		if (totalRating <= 7) {
			return "wg-train-rating__value_average";
		}
		return "wg-train-rating__value_good";
	}

	render() {
		const ratingGrade = this.getRatingGrade(this.props.totalRating);

		return (
			<TrainRating>
				<div className={`wg-train-rating__value ${ratingGrade}`}>{this.props.totalRating !== undefined ? makeBeautyNumber(this.props.totalRating) : "?"}</div>
				<span className="wg-train-rating__text">{this.context.localize("Средняя оценка")}</span>
			</TrainRating>
		);
	}
}

TotalRating.contextTypes = {
	localize: PropTypes.func
};

TotalRating.propTypes = {
	totalRating: PropTypes.number
};

export default TotalRating;