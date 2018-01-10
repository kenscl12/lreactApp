import {mainReducer} from "../../pages/main";
import appReducer from "./appReducer";

/**
 * Аггрегирующий reducer для приложения
 * @param {AppState} state Состояние приложения
 * @param {Object} action Действие
 */
export default function (state = {}, action) {
	let newState = mainReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = appReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	return newState;
}