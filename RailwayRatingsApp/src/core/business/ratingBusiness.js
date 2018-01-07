import {getNumberOrZero} from "../../utils/numberExtensions";

/**
 * Возвращает общий рейтинг
 * @param {RatingForm} ratingForm Форма добавления рейтинга
 * @returns {number}
 */
export function getTotalRating(ratingForm) {
	if (!ratingForm) {
		return undefined;
	}

	const notZeroRatings = [getNumberOrZero(ratingForm.cleanRating), getNumberOrZero(ratingForm.comfortRating),
		getNumberOrZero(ratingForm.impressionRating), getNumberOrZero(ratingForm.priceQualityRating),
		getNumberOrZero(ratingForm.serviceRating)].filter(value => value > 0);

	const notZeroRatingsCount = notZeroRatings.length;

	if (notZeroRatingsCount < 1) {
		return undefined;
	}

	const totalRatings = notZeroRatings.reduce((sum, count) => sum + count);

	return totalRatings / notZeroRatingsCount;
}

/**
 * Вилидирует форму
 * @param {RatingForm} ratingForm Форма добавления рейтинга
 * @returns {boolean}
 */
export function isValidForm(ratingForm) {
	if (!ratingForm) {
		return false;
	}

	if (!ratingForm.cleanRating || !ratingForm.comfortRating || !ratingForm.impressionRating || !ratingForm.priceQualityRating || !ratingForm.serviceRating) {
		return false;
	}

	return true;
}

/**
 * Возвращает данные для добавления рейтинга
 * @param {RatingForm} ratingForm Форма добавления рейтинга
 * @param {number} transactionId Форма добавления рейтинга
 * @param {string} email Форма добавления рейтинга
 * @returns {RateRequest}
 */
export function getRateRequest(ratingForm, transactionId, email) {
	return {
		transactionId,
		email,
		author: ratingForm.author,
		comment: ratingForm.comment,
		cleanRating: ratingForm.cleanRating,
		comfortRating: ratingForm.comfortRating,
		serviceRating: ratingForm.serviceRating,
		priceQualityRating: ratingForm.priceQualityRating,
		impressionRating: ratingForm.impressionRating
	}
}

/**
 * Возвращает имя автора рейтинга
 * @param {RatingTransactionInfo} ratingTransaction Форма добавления рейтинга
 */
export function getAuthor(ratingTransaction) {
	if (!ratingTransaction) {
		return "";
	}

	if (!ratingTransaction.customer) {
		return "";
	}

	return ratingTransaction.customer.firstName;
}