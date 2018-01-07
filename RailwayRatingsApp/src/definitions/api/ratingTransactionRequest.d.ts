/** Информация для запроса статуса рейтинга */
interface RatingTransactionRequest {
	/** Идентификатор транзакции */
	transactionId: number,

	/** Email */
	email: string
}