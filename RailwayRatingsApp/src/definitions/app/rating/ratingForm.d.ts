/** Форма добавления рейтинга  */
interface RatingForm {
	/** Автор */
	author: string,

	/** Комментарий */
	comment: string,

	/** Рейтинг чистоты */
	cleanRating: number,

	/** Рейтинг комфорта */
	comfortRating: number,

	/** Рейтинг персонала и обслуживания */
	serviceRating: number,

	/** Рейтинг цена/качество */
	priceQualityRating: number,

	/** Рейтинг общего впечатления */
	impressionRating: number
}