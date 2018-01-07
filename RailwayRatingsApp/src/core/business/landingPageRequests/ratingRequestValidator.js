import {localizeText} from "../../../utils/localization/localizationManager";

/**
 * Валидирует параметры запроса посадки на страницу docs
 * @param {string} language Язык
 * @param {FormattedDocsRequest} requestParams Параметры запроса
 * @returns {string}
 */
export function getValidateRatingRequestMessage(language, requestParams) {
	const message = localizeText(language, "Извините, мы не можем найти вашу поездку")

	if (!requestParams) {
		return message;
	}

	if (!requestParams.transactionId) {
		return message;
	}

	if (!requestParams.email) {
		return message;
	}

	return undefined;
}

/**
 * Валидирует параметры запроса посадки на страницу ratings
 * @param {FormattedRatingRequest} requestParams Параметры запроса
 * @returns {string}
 */
export function validateRatingRequest(requestParams) {
	return !getValidateRequestMessage(requestParams);
}

/**
 * Валидирует параметры запроса посадки на страницу ratings
 * @param {FormattedRatingRequest} requestParams Параметры запроса
 * @returns {string}
 */
function getValidateRequestMessage(requestParams) {
	return getValidateRatingRequestMessage(undefined, requestParams);
}