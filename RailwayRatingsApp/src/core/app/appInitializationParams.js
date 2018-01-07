import {getAccessTokenFromCookies} from "./appAuth";

/**
 * Возвращает инициализационные настройки приложения
 * @param {Object} cookies Cookies приложения
 * @param {string} appDomain Домен на котором хостится приложение
 * @param {AppConfig} appConfig Конфигурация приложения
 * @returns {AppInitializationParams}
 */
export function getInitializationParams(cookies, appDomain, appConfig) {
	return {
		appConfig,
		sessionId: cookies.get("session_id"),
		accessToken: getAccessTokenFromCookies(cookies),
		appDomain,
		advertDomain: cookies.get("ufs_advert_domain_rzhd")
	};
}