import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class AppContainer extends React.Component {
	renderAppBody() {
		const {appError, children} = this.props;

		if (appError) {
			return (
				<p>{appError.errors || this.context.localize("Возникла непредвиденная ошибка!")}</p>
			);
		}

		return children;
	}

	render() {
		return (
			<div>
				{this.renderAppBody()}
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