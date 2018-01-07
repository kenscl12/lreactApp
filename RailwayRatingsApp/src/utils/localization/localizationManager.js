import languages from "./languages";
import translates from "../../resources/app";

/**
 * Проверяет язык на корректность
 * @param {string} language
 * @returns {boolean}
 */
export function validateLanguage(language) {
	return !getValidateLanguageMessage(language);
}

/**
 * Получает сообщение валидации языка
 * @param {string} language
 * @returns {string}
 */
export function getValidateLanguageMessage(language) {
	if (!language) {
		return "Undefined language";
	}

	if (languages[language.toUpperCase()] !== language) {
		return `Localization init fail: unknown language ${language}`;
	}

	if (!translates[language]) {
		return `Localization init fail: there is no language ${language} in translates`;
	}

	return undefined;
}

/**
 * Локализует текст в зависимости от текущей локали
 * @param {string} language Язык
 * @param {string} text Текст
 * @param {boolean} ifEmptyReturnNull Если значение не найдено в ресурсах, то возвращается null.
 * Используется в случаях, когда параметр @text является ключем, а не тестовым описанием.
 * @returns {string}
 */
export function localizeText(language, text, ifEmptyReturnNull = false) {
	if (!language) {
		return text;
	}

	if (translates[language] && translates[language][text]) {
		return translates[language][text];
	}

	return ifEmptyReturnNull ? null : text;
}

/**
 * Возвращает текущую локаль
 * @param {string} language Язык
 * @returns {string}
 */
export function getLocale(language) {
	if (language === languages.ZH) {
		return "zh-CN";
	}

	return language;
}