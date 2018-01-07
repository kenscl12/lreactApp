/** Настройки приложения */
interface AppSettings {
	/** Конфигурация приложения */
	config: AppConfig,

	/** Язык */
	language: string,

	/** Идентификатор сессии */
	sessionId: string,

	/** Токен авторизации */
	accessToken: string
}