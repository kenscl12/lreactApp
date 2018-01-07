/** Информация для добавления рейтинга */
interface RateRequest {
	/** Идентификатор транзакции */
	transactionId: number,

	/** Email */
	email: string,

	/** Автор */
	author: string,

	/** Комментарий */
	comment: string,

	/** Рейтинг чистоты */
	cleanRating: string,

	/** Рейтинг комфорта */
	comfortRating: string,

	/** Рейтинг персонала и обслуживания */
	serviceRating: string,

	/** Рейтинг цена/качество */
	priceQualityRating: string,

	/** Рейтинг общего впечатления */
	impressionRating: string
}