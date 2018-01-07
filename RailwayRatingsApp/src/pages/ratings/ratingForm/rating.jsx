import React from "react";
import PropTypes from "prop-types";

import {RatingListWrap, RatingTitle, RatingListItem, RatingButton} from "../ratingComponents";

class Rating extends React.Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		return this.props.onChange(this.props.ratingType, event.target.value);
	}

	render() {
		const {title, value, ratingType} = this.props;

		return (
			<RatingListItem>
				<RatingTitle>{title}</RatingTitle>
				<RatingListWrap>
					<RatingButton
						value="1"
						checked={value === 1}
						ratingType={ratingType}
						className="rating-list__label_bad"
						onChange={this.onChange} />
					<RatingButton
						value="2"
						checked={value === 2}
						ratingType={ratingType}
						className="rating-list__label_bad"
						onChange={this.onChange} />
					<RatingButton
						value="3"
						checked={value === 3}
						ratingType={ratingType}
						className="rating-list__label_bad"
						onChange={this.onChange} />
					<RatingButton
						value="4"
						checked={value === 4}
						ratingType={ratingType}
						className="rating-list__label_average"
						onChange={this.onChange} />
					<RatingButton
						value="5"
						checked={value === 5}
						ratingType={ratingType}
						className="rating-list__label_average"
						onChange={this.onChange} />
					<RatingButton
						value="6"
						checked={value === 6}
						ratingType={ratingType}
						className="rating-list__label_average"
						onChange={this.onChange} />
					<RatingButton
						value="7"
						checked={value === 7}
						ratingType={ratingType}
						className="rating-list__label_good"
						onChange={this.onChange} />
					<RatingButton
						value="8"
						checked={value === 8}
						ratingType={ratingType}
						className="rating-list__label_good"
						onChange={this.onChange} />
					<RatingButton
						value="9"
						checked={value === 9}
						ratingType={ratingType}
						className="rating-list__label_good"
						onChange={this.onChange} />
					<RatingButton
						value="10"
						checked={value === 10}
						ratingType={ratingType}
						className="rating-list__label_good"
						onChange={this.onChange} />
				</RatingListWrap>
			</RatingListItem>
		);
	}
}

Rating.propTypes = {
	title: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.number,
	ratingType: PropTypes.string
};

export default Rating;