import * as mainActionTypes from "./mainActionTypes";

/**
 * Аггрегирующий reducer для страницы Main
 * @param {AppState} state Текущее состояние приложения
 * @param {Object} action Действие
 * @returns {AppState}
 */
export default function (state = {}, action) {
	switch (action.type) {
		case mainActionTypes.INITIALIZE: {
			return Object.assign({}, state, {
				main: action.data
			});
		}

		case mainActionTypes.INITIALIZE_THINGS: {
			const newState = Object.assign({}, state);
			newState.main = Object.assign({}, state.main);

			newState.main = Object.assign({}, state.main, {
				things: action.data
			});

			return newState;
		}

		case mainActionTypes.CLEAR_ADD_FORM: {
			const newState = Object.assign({}, state);
			newState.main = Object.assign({}, state.main);

			newState.main = Object.assign({}, state.main, {
				action: {
					name: ""
				}
			});

			return newState;
		}

		case mainActionTypes.SET_ACTION: {
			const newState = Object.assign({}, state);
			newState.main = Object.assign({}, state.main);

			newState.main = Object.assign({}, state.main, {
				action: action.data
			});

			return newState;
		}

		case mainActionTypes.SET_EDIT_ACTION: {
			const newState = Object.assign({}, state);
			newState.main = Object.assign({}, state.main);

			newState.main = Object.assign({}, state.main, {
				action: action.data
			});

			return newState;
		}

		default:
			return state;
	}
}