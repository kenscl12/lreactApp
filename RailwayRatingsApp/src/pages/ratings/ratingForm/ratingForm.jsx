import React from "react";
import PropTypes from "prop-types";

import {FormCell, FormWrap, Button} from "../../../components";
import {RatingRow, Author, Comment} from "../ratingComponents";
import TotalRating from "./totalRating";
import RatingList from "./ratingList";
import {getTotalRating} from "../../../core/business/ratingBusiness";

class RatingForm extends React.Component {
	render() {
		/** @type {RatingForm} */
		const ratingForm = this.props.ratingForm;

		return (
			<FormWrap>
				<FormCell>
					<Author
						author={ratingForm.author}
						changeAuthor={this.props.changeAuthor} />
					<Comment
						changeComment={this.props.changeComment} />
					<RatingRow buttons>
						<Button
							big
							load={this.props.sendingForm}
							onClick={this.props.rate}>
							{this.context.localize("Оставить отзыв")}
						</Button>
					</RatingRow>
				</FormCell>
				<FormCell>
					<RatingRow>
						<TotalRating
							totalRating={getTotalRating(this.props.ratingForm)} />
						<RatingList
							cleanRating={ratingForm.cleanRating}
							comfortRating={ratingForm.comfortRating}
							serviceRating={ratingForm.serviceRating}
							priceQualityRating={ratingForm.priceQualityRating}
							impressionRating={ratingForm.impressionRating}
							changeRating={this.props.changeRating} />
					</RatingRow>
				</FormCell>
			</FormWrap>
		);
	}
}

RatingForm.contextTypes = {
	localize: PropTypes.func
};

RatingForm.propTypes = {
	changeAuthor: PropTypes.func.isRequired,
	changeComment: PropTypes.func.isRequired,
	changeRating: PropTypes.func.isRequired,
	rate: PropTypes.func.isRequired,
	ratingForm: PropTypes.object,
	sendingForm: PropTypes.bool
};

export default RatingForm;