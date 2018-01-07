import * as ratingsActionTypes from "./ratingsActionTypes";
import apiMethodsBuilder from "../../core/api/apiMethodsBuilder";
import * as appActions from "../../core/app/appActions";
import {formatRatingRequest} from "../../core/business/landingPageRequests/ratingRequestExtensions";
import {getNumberOrUndefined} from "../../utils/numberExtensions";
import {isValidForm, getRateRequest, getAuthor} from "../../core/business/ratingBusiness";
import {validateRatingRequest, getValidateRatingRequestMessage} from "../../core/business/landingPageRequests/ratingRequestValidator";

/**
 * Инициализация параметрами
 */
export function init(initParams) {
	return {
		type: ratingsActionTypes.INITIALIZE,
		data: initParams
	};
}

/**
 * Обработка ошибки
 * @param {Error} error Объект ошибки
 */
function handleError(error) {
	return {
		type: ratingsActionTypes.HANDLE_ERROR,
		data: error
	};
}

/**
 * Сброс ошибки
 */
function clearError() {
	return {
		type: ratingsActionTypes.CLEAR_ERROR
	};
}

/**
 * Состояние рейтинга
 * @param {refundItem} ratingForm данные рейтинга
 */
export function setRatingForm(ratingForm) {
	return {
		type: ratingsActionTypes.SET_RATING_FORM,
		data: ratingForm
	};
}

/**
 * Отображение попапа с ошибкой
 */
export function displayRatingErrorPopup() {
	return {
		type: ratingsActionTypes.DISPLAY_RATING_ERROR_POPUP,
		data: true
	};
}

/** Скрывает попап с ошибкой */
export function hideRatingErrorPopup() {
	return {
		type: ratingsActionTypes.DISPLAY_RATING_ERROR_POPUP,
		data: false
	};
}

/**
 * Отображение загрузки на кнопке
 */
export function showSendingButton() {
	return {
		type: ratingsActionTypes.DISPLAY_SENDING_BUTTON,
		data: true
	};
}

/** Скрывает загрузку на кнопке */
export function hideSendingButton() {
	return {
		type: ratingsActionTypes.DISPLAY_SENDING_BUTTON,
		data: false
	};
}

/** Скрывает загрузку на кнопке */
export function showSuccessForm() {
	return {
		type: ratingsActionTypes.DISPLAY_SUCCESS_FORM,
		data: true
	};
}

/**
 * Изменение автора
 * @param {string} author Автор
 */
export function changeAuthor(author) {
	return (dispatch, getState) => {
		/** @type {AppState} */
		const state = getState();

		const ratingForm = Object.assign({}, state.ratings.ratingForm, {
			author
		});

		return dispatch(setRatingForm(ratingForm));
	};
}

/**
 * Изменение комментария
 * @param {string} comment комментарий
 */
export function changeComment(comment) {
	return (dispatch, getState) => {
		/** @type {AppState} */
		const state = getState();

		const ratingForm = Object.assign({}, state.ratings.ratingForm, {
			comment
		});

		return dispatch(setRatingForm(ratingForm));
	};
}

/**
 * Изменение рейтинга
 * @param {number} ratingType Рейтинг
 * @param {number} rating значение рейтинга
 */
export function changeRating(ratingType, rating) {
	return (dispatch, getState) => {
		/** @type {AppState} */
		const state = getState();

		const ratingForm = Object.assign({}, state.ratings.ratingForm);
		ratingForm[ratingType] = getNumberOrUndefined(rating);

		return dispatch(setRatingForm(ratingForm));
	};
}

/**
 * Инициализация страницы с рейтингами
 * @param {Object} initParams Параметры запроса
 */
export function initialize(initParams) {
	return (dispatch, getState) =>
		new Promise((resolve) => {
			const requestParams = formatRatingRequest(initParams);

			/** @type {AppState} */
			const state = getState();
			const language = state.settings.language;

			if (!validateRatingRequest(requestParams)) {
				dispatch(appActions.handleErrorMessage(getValidateRatingRequestMessage(language, requestParams)));
				return resolve();
			}

			/** @type {ApiMethods} */
			const api = dispatch(apiMethodsBuilder());

			return api.getRatingTransaction({
				email: requestParams.email,
				transactionId: requestParams.transactionId
			}).then(ratingTransaction =>
				resolve(
					dispatch(
						init({
							email: requestParams.email,
							transactionId: requestParams.transactionId,
							ratingTransactionInfo: ratingTransaction,
							ratingForm: {
								author: getAuthor(ratingTransaction)
							}
						})))
			).catch(error =>
				dispatch(appActions.handleError(error))
			);
		}).catch(error =>
			dispatch(appActions.handleError(error)));
}

/**
 * Добавление рейтинга
 */
export function rate() {
	return (dispatch, getState) => {
		/** @type {AppState} */
		const state = getState();
		const ratings = state.ratings;
		const ratingForm = ratings.ratingForm;

		if (!isValidForm(ratingForm)) {
			return dispatch(displayRatingErrorPopup());
		}

		dispatch(showSendingButton());

		const rateRequest = getRateRequest(ratingForm, ratings.transactionId, ratings.email);

		/** @type {ApiMethods} */
		const api = dispatch(apiMethodsBuilder());
		return api.rate(rateRequest)
			.then(response => {
				dispatch(hideSendingButton());
				dispatch(showSuccessForm());
			}
			).catch(error => {
				dispatch(hideSendingButton());
				return dispatch(appActions.handleError(error));
			}
			);
	};
}