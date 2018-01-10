import cookies from "./appCookie";
import {parseJson} from "../../utils/jsonExtensions";
import {isServer} from "../../utils/environment";

const AUTH_INFO_KEY = "auth_info";

/**
 * Получает токен авторизации
 */
export function getAccessToken() {
	return (dispatch, getState) => {
		/** @type {AppSettings} */
		const {settings} = getState();

		if (isServer && settings) {
			return settings.accessToken;
		}

		return parseAccessToken(cookies.get(AUTH_INFO_KEY));
	};
}

/**
 * Проверяет, залогинен ли пользователь
 */
export function isAuthenticated() {
	return (dispatch) => !!dispatch(getAccessToken());
}

/**
 * Получает токен авторизации из cookies
 * @param {Object} appCookies Cookies приложения
 */
export function getAccessTokenFromCookies(appCookies) {
	return parseAccessToken(appCookies[AUTH_INFO_KEY]);
}

function parseAccessToken(value) {
	const authInfo = parseJson(value);

	return authInfo ? authInfo.accessToken : null;
}