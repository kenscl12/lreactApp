class ApiMethods {
	/**
	 * Конструктор
	 * @param {ApiClient} apiClient ApiClient
	 */
	constructor(apiClient) {
		this.apiClient = apiClient;
	}

	/**
	 * Добавление рейтинга
	 * @param {RateRequest} rateRequest Информация для добавления рейтинга
	 */
	rate(rateRequest) {
		return this.apiClient.post("/railway/trains/rating", rateRequest);
	}

	/**
	 * Получение информации о транзакции
	 * @param {RatingTransactionRequest} ratingTransactionRequest запрос информации о транзакции
	 */
	getRatingTransaction(ratingTransactionRequest) {
		return this.apiClient.getEx("/railway/trains/rating/transaction", ratingTransactionRequest);
	}

	/**
	 * Получение профиля пользователя
	 * @returns {Promise<User>} Пользователь
	 */
	getAuthenticatedUser() {
		return this.apiClient.get("/user/me");
	}
}

/**
 * Создает ApiMethods
 * @param {ApiClient} apiClient ApiClient
 * @returns {ApiMethods}
 */
export default function createApiMethods(apiClient) {
	return new ApiMethods(apiClient);
}