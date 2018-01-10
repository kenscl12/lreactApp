import languages from "../utils/localization/languages";

/**
 * Сериализует объект в строку запроса
 * @param  {Object} obj Plain object
 */
export function serializeToQueryString(obj) {
	if (!obj) {
		return "";
	}

	const pairs = [];
	for (const prop in obj) {
		if (!obj.hasOwnProperty(prop)) {
			continue;
		}

		pairs.push(`${prop}=${encodeURIComponent(obj[prop])}`);
	}

	return pairs.join("&");
}

/**
 * Вырезает все undefined свойства
 * @param  {Object} obj Plain object
 */
export function cutUndefinedProperties(obj) {
	if (!obj) {
		return obj;
	}

	if (Object.prototype.toString.call(obj) === "[object Array]") {
		return obj;
	}

	const result = {};
	for (const prop in obj) {
		if (!obj.hasOwnProperty(prop) || obj[prop] === undefined) {
			continue;
		}

		result[prop] = obj[prop];
	}

	return result;
}

/**
 * Получает свойство объекта по нечувствительному к регистру имени свойства
 * @param  {Object} obj Объект
 * @param  {string} prop Свойство
 */
export function getCaseInsensetiveProp(obj, prop) {
	if (!obj) {
		return undefined;
	}

	if (obj[prop]) {
		return obj[prop];
	}

	const keys = Object.keys(obj)
		.filter((key) => key.toLowerCase() === prop.toLowerCase());

	if (!keys || keys.length === 0) {
		return undefined;
	}

	return obj[keys[0]];
}

/**
 * Возвращает текущий протокол
 */
// TODO: сделать изоморфным
export function getCurrentProtocol() {
	if (typeof location !== "undefined") {
		return location.protocol.replace(":", "");
	}

	return "https";
}

/**
 * Возвращает текущий домен
 */
// TODO: сделать изоморфным
export function domain() {
	if (typeof window !== "undefined") {
		return window.location.host;
	}

	return undefined;
}

/**
 * Объединяет url и path для исключения дубля слеша
 * @param {string} url Url
 * @param {string} path Путь без пртокола и домена
 */
export function joinPathToUrl(url, path) {
	if (!url) {
		return path;
	}

	if (!path) {
		return url;
	}

	const urlClosedBySlash = url.lastIndexOf("/") === url.length - 1;
	const pathStartedBySlash = path.indexOf("/") === 0;

	if (urlClosedBySlash && !pathStartedBySlash) {
		return `${url}${path}`;
	}

	if (!urlClosedBySlash && pathStartedBySlash) {
		return `${url}${path}`;
	}

	if (!urlClosedBySlash && !pathStartedBySlash) {
		return `${url}/${path}`;
	}

	return `${url}${path.substring(1)}`;
}

/**
 * Получает функцию строящую абсолютный путь к роуту
 * @param {AppConfig} appConfig Конфигурация приложения
 * @param {boolean} withDomain Включать ли домен
 */
export function getAbsoluteAppUrlBuilder(appConfig, withDomain = true) {
	/**
	 * Строит абсолютный путь к роуту
	 * @param {string} routeUrl
	 */
	function buildAbsoluteAppUrl(routeUrl) {
		const urlPaths = [];

		if (appConfig.isHashUrl) {
			urlPaths.push("/#");
		}

		if (appConfig.lang && appConfig.lang !== languages.RU) {
			urlPaths.push(`/${appConfig.lang}`);
		}

		if (appConfig.baseUrlPath) {
			urlPaths.push(appConfig.baseUrlPath);
		}

		const relativeUrl = urlPaths.join("") + routeUrl;

		const currentProtocol = getCurrentProtocol();
		const currentDomain = domain();

		if (!currentDomain || !withDomain) {
			return relativeUrl;
		}

		return `${currentProtocol}://${currentDomain}${relativeUrl}`;
	}

	return buildAbsoluteAppUrl;
}