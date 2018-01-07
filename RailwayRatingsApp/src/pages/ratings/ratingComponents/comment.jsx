import React from "react";
import PropTypes from "prop-types";

import {TextArea, Label} from "../../../components";
import {RatingRow} from "../ratingComponents";

class Comment extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.changeComment = this.changeComment.bind(this);
	}

	changeComment(event) {
		return this.props.changeComment(event.target.value);
	}

	render() {
		return (
			<RatingRow>
				<Label dark>{this.context.localize("Оставьте свои впечатления о поездке, ваш отзыв появится на странице рейтинга поезда")}</Label>
				<TextArea
					onChange={this.changeComment} />
			</RatingRow>
		);
	}
}

Comment.contextTypes = {
	localize: PropTypes.func
};

Comment.propTypes = {
	changeComment: PropTypes.func.isRequired
};

export default Comment;