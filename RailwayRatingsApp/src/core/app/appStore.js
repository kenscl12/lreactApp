import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

import appCombineReducer from "./appCombineReducer";

/**
 * Инициализирует хранилище приложения
 * @param {AppState} initialState Начальное состояние приложения
 * @returns {Store<AppState>}
 */
export function initStore(initialState) {
	const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
	return createStoreWithMiddleware(appCombineReducer, initialState);
}