class ApiMethods {
	/**
	 * Конструктор
	 * @param {ApiClient} apiClient ApiClient
	 */
	constructor(apiClient) {
		this.apiClient = apiClient;
	}

	getThings() {
		return this.apiClient.getEx("/thing");
	}

	deleteThing(id) {
		return this.apiClient.getEx("/thing/delete",{id});
	}

	addThing(Name) {
		return this.apiClient.post("/thing",{
			Name,
			UserId: 1
		});
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