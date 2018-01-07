import * as appActionTypes from "./appActionTypes";
import * as environment from "../../utils/environment";
import languages from "../../utils/localization/languages";
import {validateLanguage} from "../../utils/localization/localizationManager";
import {generateUUID} from "../../utils/uuidHelper.js";
import cookies from "./appCookie";

/**
 * Сброс хранилища
 */
export function clearStore() {
	return {
		type: appActionTypes.CLEAR_STORE
	};
}

/**
 * Инициализация настроек приложения
 */
export function initSettings() {
	return {
		type: appActionTypes.INIT_SETTINGS
	};
}

/**
 * Инициализация настроек приложения
 * @param {AppConfig} appConfig Конфигурация приложения
 */
export function initConfig(appConfig) {
	return {
		type: appActionTypes.INIT_SETTINGS_CONFIG,
		data: appConfig
	};
}

/**
 * Инициализация языка приложения
 * @param {string} language Язык приложения
 */
function initPlainLanguage(language) {
	return {
		type: appActionTypes.INIT_SETTINGS_LANGUAGE,
		data: language
	};
}

/**
 * Инициализация языка приложения
 * @param {string} language Язык приложения
 */
export function initLanguage(language) {
	return (dispatch) => {
		if (validateLanguage(language)) {
			dispatch(initPlainLanguage(language));
		} else {
			dispatch(initPlainLanguage(languages.RU));
		}
	};
}

/**
 * Устанавливает домен приложения
 * @param {AppInitializationParams} initParams Инициализационные параметры приложения
 */
export function initAppDomain(initParams) {
	return (dispatch) => {
		const appDomain = initParams.appConfig.appDomain || initParams.appDomain;

		dispatch(setAppDomain(appDomain));
	};
}

/**
 * Устанавливает домен приложения
 * @param {string} appDomain Хост
 */
function setAppDomain(appDomain) {
	return {
		type: appActionTypes.SET_SETTINGS_APP_DOMAIN,
		data: appDomain
	};
}


/**
 * Инициализация сессии
 * @param {string} sessionId Идентификатор сессии
 */
function initPlainSession(sessionId) {
	return {
		type: appActionTypes.INIT_SETTINGS_SESSION,
		data: sessionId
	};
}

/**
 * Инициализация сессии
 * @param {string} defaultSessionId Идентификатор сессии
 */
export function initSession(defaultSessionId) {
	return (dispatch) => {
		let sessionId = defaultSessionId;

		if (!defaultSessionId) {
			sessionId = generateUUID();

			if (!environment.isServer) {
				cookies.set("session_id", sessionId);
			}
		}

		dispatch(initPlainSession(sessionId));
	};
}

/**
 * Инициализация токена авторизации
 * @param {string} accessToken Токен авторизации
 */
export function initAccessToken(accessToken) {
	return (dispatch) => {
		if (!accessToken) {
			return;
		}

		dispatch(setAccessToken(accessToken));
	};
}

/**
 * Устанавливает токен авторизации
 * @param {string} accessToken Токен авторизации
 */
export function setAccessToken(accessToken) {
	return {
		type: appActionTypes.SET_SETTINGS_ACCESS_TOKEN,
		data: accessToken
	};
}

/**
 * Сброс токена авторизации
 */
export function clearAccessToken() {
	return {
		type: appActionTypes.CLEAR_SETTINGS_ACCESS_TOKEN
	};
}

/**
 * Обработка ошибки
 * @param {Error} error Объект ошибки
 */
function handlePlainError(error) {
	return {
		type: appActionTypes.HANDLE_ERROR,
		data: error
	};
}

/**
 * Сброс ошибки
 */
export function clearError() {
	return {
		type: appActionTypes.CLEAR_ERROR
	};
}

/**
 * Обработка ошибки
 * @param {Error} error Объект ошибки
 */
export function handleError(error) {
	return (dispatch) => {
		dispatch(handlePlainError(error));
	};
}


/**
 * Обработка ошибки
 * @param {string} message текст ошибки
 */
export function handleErrorMessage(message) {
	return handleError({message});
}

/**
 * Блокировка контента
 */
export function freeze() {
	return {
		type: appActionTypes.FREEZE
	};
}

/**
 * Отключение блокировки контента
 */
export function unfreeze() {
	return {
		type: appActionTypes.UNFREEZE
	};
}

/**
 * Скролирует вверх
 */
export function scrollToTop() {
	if (environment.isServer) {
		return;
	}

	if (typeof window.scrollTo !== "function") {
		return;
	}

	window.scrollTo(0, 0);
}