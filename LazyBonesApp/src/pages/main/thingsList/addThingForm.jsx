import React from "react";
import PropTypes from "prop-types";
import { deleteThing } from "../mainActions";

class AddThingForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			error: false
		};

		this.changeThing = this.changeThing.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.cancelAction = this.cancelAction.bind(this);
	}

	changeThing(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit() {
		const value = this.state.value;

		if (!value) {
			this.setState({error: true});
			return;
		}

		this.props.actions.addThing(value);
		this.setState({value : "", error: false});
	}

	cancelAction() {
		this.props.actions.cancelAction();
		this.setState({value : "", error: false});
	}

	getClass() {
		if (this.state.error === true) {
			return "form-group has-error";
		}

		return "form-group";
	}

	render() {
		const {display} = this.props;

		if (display === false) {
			return false;
		}

		return (
			<tr>
				<th className="text-center">
				</th>
				<td>
					<div className={this.getClass()}>
						<label className="control-label">Что хотим сделать?</label>
						<input type="text" className="form-control" onChange={this.changeThing} value={this.state.value} />
					</div>
				</td>
				<td>
					<button type="button" className="btn btn-default" onClick={this.handleSubmit}><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
					<button type="button" className="btn btn-default" onClick={this.cancelAction}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
				</td>
			</tr>
		);
	}
}

AddThingForm.propTypes = {
	actions: PropTypes.Object,
	display: PropTypes.bool
};

export default AddThingForm;