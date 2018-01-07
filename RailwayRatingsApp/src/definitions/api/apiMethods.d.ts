/**
 * Api методы
 */
interface ApiMethods {
	/**
	 * Добавление рейтинга
	 * @param {RateRequest} rateRequest Информация для добавления рейтинга
	 */
	rate: (rateRequest: RateRequest) => Promise

	/**
	 * Получение информации о транзакции
	 * @param {RatingStatusRequest} ratingTransactionRequest запрос информации о транзакции
	 */
	getRatingTransaction: (ratingTransactionRequest: RatingTransactionRequest) => Promise<RatingTransactionInfo>

	/**
	 * Получение профиля пользователя
	 */
	getAuthenticatedUser: () => Promise<User>
}