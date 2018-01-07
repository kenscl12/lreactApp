import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {RatingsWrapper} from "./ratings/ratingComponents";

class AppContainer extends React.Component {
	renderAppBody() {
		const {appError, children} = this.props;

		if (appError) {
			return (
				<RatingsWrapper>
					<p>{appError.errors || this.context.localize("Возникла непредвиденная ошибка!")}</p>
				</RatingsWrapper>
			);
		}

		return children;
	}

	render() {
		return (
			<div>
				<RatingsWrapper>
					{this.renderAppBody()}
				</RatingsWrapper>
			</div>
		);
	}
}

AppContainer.propTypes = {
	children: PropTypes.node,
	appError: PropTypes.object
};

AppContainer.contextTypes = {
	localize: PropTypes.func,
	isAuthenticated: PropTypes.bool
};

function mapState(state) {
	return {
		appError: state.appError
	};
}

export default connect(mapState)(AppContainer);