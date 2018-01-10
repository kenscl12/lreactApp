import React from "react";
import PropTypes from "prop-types";
import { deleteThing } from "../mainActions";

class addThingButton extends React.Component {
	constructor(props) {
		super(props);

		this.startAddAction = this.startAddAction.bind(this);
	}

	startAddAction() {
		this.props.startAddAction();
	}

	render() {
		const {display} = this.props;

		if (display === false) {
			return false;
		}

		return (
			<tr>
				<td colSpan="3" align="center">
					<span onClick={this.startAddAction} className="glyphicon glyphicon-plus" aria-hidden="true"></span>
				</td>
			</tr>
		);
	}
}

addThingButton.propTypes = {
	startAddAction: PropTypes.func,
	display: PropTypes.bool
};

export default addThingButton;