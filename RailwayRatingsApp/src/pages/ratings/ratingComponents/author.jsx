import React from "react";
import PropTypes from "prop-types";

import {TextBox, Label} from "../../../components";
import {RatingRow} from "../ratingComponents";

class Author extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.changeAuthor = this.changeAuthor.bind(this);
	}

	changeAuthor(event) {
		return this.props.changeAuthor(event.target.value);
	}

	render() {
		return (
			<RatingRow>
				<Label dark>{this.context.localize("Ваше имя")}</Label>
				<TextBox
					value={this.props.author}
					onChange={this.changeAuthor} />
			</RatingRow>
		);
	}
}

Author.contextTypes = {
	localize: PropTypes.func
};

Author.propTypes = {
	changeAuthor: PropTypes.func.isRequired,
	author: PropTypes.string
};

export default Author;