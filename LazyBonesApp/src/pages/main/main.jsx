import React from "react";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import ThingItem from "./thingsList/thingItem";
import AddThingForm from "./thingsList/addThingForm";
import AddThingButton from "./thingsList/AddThingButton";

import {Header, ListDate} from "../../components";

import {formatToAppDate} from "../../core/utils/dateExtensions";
import * as types from "../../types";

import * as mainActions from "./mainActions";

class Main extends React.Component {

	renderThings() {
		/** @type {Array<ThingViewModel>} */
		const things = this.props.main.things;

		return things.map(thing => (
			<ThingItem
				thing={thing}
				action={this.props.main.action}
				actions={this.props.actions}
				key={`thingitem_${thing.thing.ThingId}`} />
		));
	}

	render() { 
		/** @type {MainPageState} */
		const main = this.props.main;

		if (!main || !main.things) {
			return "загрузка";
		}

		if (!main.things.length) {
			return "ничего нет";
		}

		const date = new Date();

		return (
			<div className="container">
				<Header>Лентяй</Header>

				<div>
					<div>
						<table className="table">
							<ListDate
								title={`Сегодня ${formatToAppDate(date)}`} />
							<thead>
								<tr>
									<th>#</th>
									<th>Хочу сделать</th>
									<th>Действия</th>
								</tr>
							</thead>
							<tbody>
								{this.renderThings()}
								<AddThingForm
									thing={main.action.thing}
									display={main.action.type === types.actionType.ADD}
									actions={this.props.actions} />
								<AddThingButton
									display={main.action.type === types.actionType.NONE}
									startAddAction={this.props.actions.startAddAction} />
							</tbody>
						</table>
					</div>

				</div>

				<footer className="footer">
					<p>&copy; Company 2017</p>
				</footer>

			</div>
		);
	}
}

Main.contextTypes = {
	localize: PropTypes.func
};

Main.propTypes = {
	main: PropTypes.object,
	actions: PropTypes.object
};

function mapState(state) {
	return {
		main: state.main
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(mainActions, dispatch)
	};
}

export default connect(mapState, mapDispatchToProps)(Main);