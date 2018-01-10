import {useRouterHistory} from "react-router";
import {createHistory, createHashHistory} from "history";
import languages from "../../utils/localization/languages";

/**
 * Возвращает локализованный начальный роут приложения
 * @param {string} lang Язык
 * @param {string} baseUrlPath Начальный роут приложения
 * @returns {string}
 */
function getLocalizedBaseUrlPath(lang, baseUrlPath) {
	if (!lang || lang.toLowerCase() === languages.RU) {
		return baseUrlPath;
	}

	if (!languages[lang.toUpperCase()]) {
		return baseUrlPath;
	}

	return `/${lang}${baseUrlPath}`;
}

/**
 * Инициализирует конфигурацию приложения
 * @param {string} lang Язык
 * @param {string} baseUrlPath Начальный роут приложения
 * @param {boolean} isHashUrl Использовать # при построении URL
 * @returns {History}
 */
export function initHistory(lang, baseUrlPath, isHashUrl) {
	let history = createHistory;

	if (isHashUrl) {
		history = createHashHistory;
	}

	history = useRouterHistory(history)({
		basename: getLocalizedBaseUrlPath(lang, baseUrlPath)
	});

	return history;
}