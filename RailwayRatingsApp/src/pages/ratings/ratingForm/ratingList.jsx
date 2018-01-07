import React from "react";
import PropTypes from "prop-types";
import Rating from "./rating";
import {ratingType} from "../../../types";

class RatingList extends React.Component {
	render() {
		return (
			<div className="rating-list">
				<Rating
					title={this.context.localize("Чистота")}
					value={this.props.cleanRating}
					ratingType={ratingType.CLEAN_RATING}
					onChange={this.props.changeRating} />
				<Rating
					title={this.context.localize("Комфорт")}
					value={this.props.comfortRating}
					ratingType={ratingType.COMFORT_RATING}
					onChange={this.props.changeRating} />
				<Rating
					title={this.context.localize("Персонал и обслуживание")}
					value={this.props.serviceRating}
					ratingType={ratingType.SERVICE_RATING}
					onChange={this.props.changeRating} />
				<Rating
					title={this.context.localize("Соотношение цена/качество")}
					value={this.props.priceQualityRating}
					ratingType={ratingType.PRICE_QUALITY_RATING}
					onChange={this.props.changeRating} />
				<Rating
					title={this.context.localize("Общее впечатление от поездки")}
					value={this.props.impressionRating}
					ratingType={ratingType.IMPRESSION_RATING}
					onChange={this.props.changeRating} />
			</div>
		);
	}
}

RatingList.contextTypes = {
	localize: PropTypes.func
};

RatingList.propTypes = {
	changeRating: PropTypes.func.isRequired,
	cleanRating: PropTypes.number,
	comfortRating: PropTypes.number,
	serviceRating: PropTypes.number,
	priceQualityRating: PropTypes.number,
	impressionRating: PropTypes.number

};

export default RatingList;