import React from "react";
import PropTypes from "prop-types";
import { deleteThing } from "../mainActions";
import * as types from "../../../types";

class ThingItem extends React.Component {
	constructor(props) {
		super(props);

		this.deleteThing = this.deleteThing.bind(this);
		this.editAction = this.editAction.bind(this);
		this.cancelAction = this.cancelAction.bind(this);
	}

	deleteThing() {
		this.props.actions.deleteThing(this.props.thing.thing.ThingId);
	}

	editAction() {
		this.props.actions.editThingAction(this.props.thing.thing.ThingId);
	}

	cancelAction() {
		this.props.actions.cancelThingAction(this.props.thing.thing.ThingId);
	}

	getClass() {
		if (false === true) {
			return "form-group has-error";
		}

		return "form-group";
	}

	renderName() {
		if (this.props.thing.action === types.thingAction.EDIT) {
			return (
				<div className={this.getClass()}>
					<input type="text" className="form-control" value={this.props.thing.editThing.Name} />
				</div>
			)
		}

		return this.props.thing.thing.Name;
	}

	renderEditActionsButtons() {
		if (this.props.thing.action !== types.thingAction.EDIT) {
			return null;
		}

		return [
			<button type="button" key={`approveButton_thing_${this.props.thing.thing.ThingId}`} className="btn btn-default" onClick={this.editAction}><span className="glyphicon glyphicon-ok-circle" aria-hidden="true"></span></button>,
			<button type="button" key={`cancelEditButton_thing_${this.props.thing.thing.ThingId}`} className="btn btn-default" onClick={this.cancelAction}><span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></button>
		];
	}

	renderStartEditButton() {
		if (this.props.thing.action === types.thingAction.EDIT) {
			return null;
		}

		return (
			<button type="button" className="btn btn-default" onClick={this.editAction}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
		);
	}

	render() {
		/** @type {ThingViewModel} */
		const thing = this.props.thing;

		return (
			<tr>
				<th className="text-center">{thing.thing.ThingId}</th>
				<td>{this.renderName()}</td>
				<td>
					{this.renderStartEditButton()}
					{this.renderEditActionsButtons()}
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