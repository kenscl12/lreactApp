/** Состояние страницы доавбления рейтинга */
interface RatingsPageState {
	/** Идентификатор транзакции */
	transactionId: number,

	/** Email */
	email: string,

	/** Данные для добавление рейтинга */
	ratingForm: RatingForm,

	/** Отображение попап с ошибкой */
	displayRatingErrorPopup: bool

	/** Отправка формы */
	sendingForm: bool,

	/** Информация о транзакции */
	ratingTransactionInfo: RatingTransactionInfo
}