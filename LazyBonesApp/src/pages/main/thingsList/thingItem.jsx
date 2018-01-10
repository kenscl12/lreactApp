import React from "react";
import PropTypes from "prop-types";
import { deleteThing } from "../mainActions";

class ThingItem extends React.Component {
	constructor(props) {
		super(props);

		this.deleteThing = this.deleteThing.bind(this);
	}

	deleteThing() {
		this.props.actions.deleteThing(this.props.thing.ThingId)
	}

	render() {
		const {thing} = this.props;

		return (
			<tr>
				<th className="text-center">{thing.ThingId}</th>
				<td>{thing.Name}</td>
				<td>
					<button type="button" className="btn btn-default" onClick={this.deleteThing}><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
					<button type="button" className="btn btn-default" onClick={this.deleteThing}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
				</td>
			</tr>
		);
	}
}

ThingItem.propTypes = {
	thing: PropTypes.Object,
	actions: PropTypes.Object
};

export default ThingItem;