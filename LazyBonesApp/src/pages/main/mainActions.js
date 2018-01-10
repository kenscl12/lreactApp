import * as mainActionTypes from "./mainActionTypes";
import apiMethodsBuilder from "../../core/api/apiMethodsBuilder";
import * as appActions from "../../core/app/appActions";

import * as types from "../../types";

/**
 * Инициализация параметрами
 */
export function init(initParams) {
	return {
		type: mainActionTypes.INITIALIZE,
		data: initParams
	};
}

/**
 * Инициализация дел
 */
export function initThings(things) {
	return {
		type: mainActionTypes.INITIALIZE_THINGS,
		data: things
	};
}

/**
 * Редактирование нового дела
 */
export function changeNewThing(thing) {
	return {
		type: mainActionTypes.CHANGE_NEW_THING,
		data: thing
	};
}

/**
 * Очищение состояния формы добавления
 */
export function clearAddForm() {
	return {
		type: mainActionTypes.CLEAR_ADD_FORM
	};
}

/**
 * Установка действия
 */
export function setAction(action) {
	return {
		type: mainActionTypes.SET_ACTION,
		data: action
	}
}

/**
 * Обработка ошибки
 * @param {Error} error Объект ошибки
 */
function handleError(error) {
	return {
		type: mainActionTypes.HANDLE_ERROR,
		data: error
	};
}

/**
 * Сброс ошибки
 */
function clearError() {
	return {
		type: mainActionTypes.CLEAR_ERROR
	};
}

/**
 * Инициализация страницы с рейтингами
 * @param {Object} initParams Параметры запроса
 */
export function initialize(initParams) {
	return (dispatch, getState) =>
		new Promise((resolve) => {
			/** @type {ApiMethods} */
			const api = dispatch(apiMethodsBuilder());

			dispatch(init({
				things: [],
				action: {
					type: types.actionType.NONE
				}
			}));

			return resolve(dispatch(initializeThings()));
		}).catch(error =>
			dispatch(appActions.handleError(error)));
}

function initializeThings() {
	return (dispatch) => {
		/** @type {ApiMethods} */
		const api = dispatch(apiMethodsBuilder());

		return api.getThings().then(things =>
			dispatch(
					initThings(things))
		).catch(error =>
			dispatch(appActions.handleError(error))
		);
	}
}

export function deleteThing(thingId) {
	return (dispatch) => {
		/** @type {ApiMethods} */
		const api = dispatch(apiMethodsBuilder());

		api.deleteThing(thingId).then(() => {
			return dispatch(initializeThings()());
		}
		)
	};
}

export function addThing(thingName) {
	return (dispatch) => {
		/** @type {ApiMethods} */
		const api = dispatch(apiMethodsBuilder());

		api.addThing(thingName).then(() => {
			return dispatch(initializeThings());
		});

		dispatch(clearAddForm());
	}
}

export function startAddAction() {
	return (dispatch) => {
		const addAction = {
			type: types.actionType.ADD,
			thing: {
				Name: ""
			}
		}

		dispatch(setAction(addAction));
	}
}

export function cancelAction() {
	return (dispatch) => {
		const canselAction = {
			type: types.actionType.NONE,
			thing: {
			}
		}

		dispatch(setAction(canselAction));
	}
}