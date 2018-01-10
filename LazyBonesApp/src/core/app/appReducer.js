import * as appActionTypes from "./appActionTypes";

/**
 * Reducer для приложения
 * @param {AppState} state Состояние приложения
 * @param {Object} action Действие
 * @returns {AppState}
 */
export default function (state = {}, action) {
	switch (action.type) {
		case appActionTypes.CLEAR_STORE: {
			return {
				settings: state.settings
			};
		}

		case appActionTypes.INIT_SETTINGS: {
			const newState = Object.assign({}, state);

			newState.settings = {};

			return newState;
		}

		case appActionTypes.INIT_SETTINGS_CONFIG: {
			const newState = Object.assign({}, state);
			newState.settings = Object.assign({}, state.settings);

			newState.settings.config = action.data;

			return newState;
		}

		case appActionTypes.INIT_SETTINGS_LANGUAGE: {
			const newState = Object.assign({}, state);
			newState.settings = Object.assign({}, state.settings);

			newState.settings.language = action.data;

			return newState;
		}

		case appActionTypes.SET_SETTINGS_APP_DOMAIN: {
			const newState = Object.assign({}, state);
			newState.settings = Object.assign({}, state.settings);

			newState.settings.appDomain = action.data;

			return newState;
		}

		case appActionTypes.INIT_SETTINGS_SESSION: {
			const newState = Object.assign({}, state);
			newState.settings = Object.assign({}, state.settings);

			newState.settings.sessionId = action.data;

			return newState;
		}

		case appActionTypes.SET_SETTINGS_ACCESS_TOKEN: {
			const newState = Object.assign({}, state);
			newState.settings = Object.assign({}, state.settings);

			newState.settings.accessToken = action.data;

			return newState;
		}

		case appActionTypes.CLEAR_SETTINGS_ACCESS_TOKEN: {
			const newState = Object.assign({}, state);
			newState.settings = Object.assign({}, state.settings);

			delete newState.settings.accessToken;

			return newState;
		}

		case appActionTypes.HANDLE_ERROR: {
			const newState = Object.assign({}, state);

			newState.appError = action.data;

			return newState;
		}

		case appActionTypes.CLEAR_ERROR: {
			const newState = Object.assign({}, state);

			delete newState.appError;

			return newState;
		}

		case appActionTypes.FREEZE: {
			const newState = Object.assign({}, state);

			newState.appFreeze = true;

			return newState;
		}

		case appActionTypes.UNFREEZE: {
			const newState = Object.assign({}, state);

			delete newState.appFreeze;

			return newState;
		}

		default:
			return state;
	}
}