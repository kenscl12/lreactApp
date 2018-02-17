/** Представление дела */
interface ThingViewModel {
	/** Дело */
	thing: Thing,

	/** Редактируемое дело */
	editThing: Thing,

	/** Действие над делом */
	action: number
}