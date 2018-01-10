import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import languages from "../utils/localization/languages";
import {localizeText} from "../utils/localization/localizationManager";
import {isAuthenticated} from "../core/app/appAuth";

class AppContext extends React.Component {

	constructor(props) {
		super(props);

		this.localize = this.localize.bind(this);
	}

	getChildContext() {
		return {
			localize: this.localize,
			language: this.props.settings.language,
			isAuthenticated: this.props.isAuthenticated(),
			settings: this.props.settings
		};
	}

	localize(text) {
		let language = languages.RU;
		if (this.props.settings && this.props.settings.language) {
			language = this.props.settings.language;
		}

		return localizeText(language, text);
	}

	render() {
		return this.props.children;
	}
}

AppContext.propTypes = {
	settings: PropTypes.object,
	children: PropTypes.object,
	isAuthenticated: PropTypes.func
};

AppContext.contextTypes = {
	localize: PropTypes.func
};

AppContext.childContextTypes = {
	localize: PropTypes.func,
	language: PropTypes.string,
	isAuthenticated: PropTypes.bool,
	settings: PropTypes.object
};

function mapState(state) {
	return {
		settings: state.settings
	};
}

function mapDispatchToProps(dispatch) {
	return {
		isAuthenticated: bindActionCreators(isAuthenticated, dispatch)
	};
}

export default connect(mapState, mapDispatchToProps)(AppContext);