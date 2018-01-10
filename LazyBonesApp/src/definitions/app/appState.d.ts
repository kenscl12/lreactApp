/** Состояние приложения */
interface AppState {
	/** Настройки приложения */
	settings: AppSettings,

	/** Страница с рейтингами */
	main: MainPageState
}