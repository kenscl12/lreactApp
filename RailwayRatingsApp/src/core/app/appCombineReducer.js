import {ratingsReducer} from "../../pages/ratings";
import appReducer from "./appReducer";

/**
 * Аггрегирующий reducer для приложения
 * @param {AppState} state Состояние приложения
 * @param {Object} action Действие
 */
export default function (state = {}, action) {
	let newState = ratingsReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	newState = appReducer(state, action);
	if (state !== newState) {
		return newState;
	}

	return newState;
}