import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {Form, Popup, Preloader} from "../../components";
import {RatingHeader} from "./ratingComponents";
import RatingForm from "./ratingForm/ratingForm";

import * as ratingsActions from "./ratingsActions";

class Ratings extends React.Component {
	render() {
		/** @type {RatingsPageState} */
		const ratingsPage = this.props.ratings;

		if (!ratingsPage) {
			return (
				<Preloader display />
			);
		}

		if (ratingsPage.successForm === true) {
			return (
				<p>{this.context.localize("Спасибо за ваш отзыв! Он появится на сайте после прохождения модерации")}</p>
			);
		}

		return ([
			<RatingHeader
				key="ratingHeader"
				ratingTransactionInfo={ratingsPage.ratingTransactionInfo} />,
			<Form
				key="ratingForm">
				<RatingForm
					ratingForm={ratingsPage.ratingForm}
					changeAuthor={this.props.actions.changeAuthor}
					changeComment={this.props.actions.changeComment}
					changeRating={this.props.actions.changeRating}
					rate={this.props.actions.rate}
					sendingForm={ratingsPage.sendingForm} />
			</Form>,
			<Popup
				key="ratingPopup"
				display={ratingsPage.displayRatingErrorPopup}
				fixed
				displayContinueButton
				onContinue={this.props.actions.hideRatingErrorPopup}
				title={this.context.localize("Внимание!")}>
				<p>{this.context.localize("Вы не закончили оценку. Пожалуйста, оцените поездку по всем категориям")}</p>
			</Popup>
		]);
	}
}

Ratings.contextTypes = {
	localize: PropTypes.func
};

Ratings.propTypes = {
	ratings: PropTypes.object,
	actions: PropTypes.object
};

function mapState(state) {
	return {
		ratings: state.ratings
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(ratingsActions, dispatch)
	};
}

export default connect(mapState, mapDispatchToProps)(Ratings);