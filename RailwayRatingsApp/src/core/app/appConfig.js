/** @type {AppConfig} */
const defaultConfig = {
	rootElementId: "ufs-railway-ratings-app",
	isHashUrl: false,
	lang: "ru"
};

/**
 * Инициализирует конфигурацию приложения
 * @param {AppConfig} config Конфигурация приложения
 * @returns {AppConfig}
 */
export function initConfig(config) {
	if (!config) {
		return Object.assign({}, defaultConfig);
	}

	return Object.assign({}, defaultConfig, config);
}