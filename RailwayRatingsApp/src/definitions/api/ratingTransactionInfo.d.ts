/** Информация о рейтинге */
interface RatingTransactionInfo {
	/** Станция отправления */
	fromStation: string,

	/** Станция назначения */
	toStation: string,

	/** Номер поезда */
	trainNumber: string,

	/** Пользователь */
	user: User
}