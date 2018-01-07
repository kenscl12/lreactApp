import {getCaseInsensetiveProp} from "../../../utils/urlHelper";

/**
 * Форматирует объект параметров запроса
 * @param {Object} initParams Параметры запроса
 * @returns {FormattedRatingRequest}
 */
export function formatRatingRequest(initParams) {
	if (!initParams) {
		return undefined;
	}

	const formattedParams = {
		transactionId: getCaseInsensetiveProp(initParams, "transactionId"),
		email: getCaseInsensetiveProp(initParams, "email")
	};

	return formattedParams;
}