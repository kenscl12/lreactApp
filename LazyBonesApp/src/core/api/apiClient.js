import axiosClient from "../../utils/httpClient/axiosJsonClient";
import {serializeToQueryString, cutUndefinedProperties} from "../../utils/urlHelper";

/**
 * Получает функцию, строящуюю абсолютный путь к API
 * @param {string} apiDomain Относительный или абсолютный путь к API
 */
function getAbsoluteApiUrlBuilder(apiDomain) {
	/**
	 * Строит абсолютный url к api
	 * @param {string} url Относительный или абсолютный путь к API
	 * @returns {string}
	 */
	function buildAbsoluteApiUrl(url) {
		if (url.indexOf("http") === 0 || url.indexOf("//") === 0) {
			return url;
		}

		let endpoint = apiDomain ? `https://${apiDomain}/api` : "";

		if (apiDomain.indexOf("localhost") === 0) {
			endpoint = `http://${apiDomain}/api`;
		}

		return `${endpoint}${url}`;
	}

	return buildAbsoluteApiUrl;
}

/**
 * Получает функцию, строящуюю абсолютный путь к API
 * @param {string} apiDomain Относительный или абсолютный путь к API
 */
function getAbsoluteApiGetExUrlBuilder(apiDomain) {
	/**
	 * Строит абсолютный путь к API
	 * @param {string} url Относительный или абсолютный путь к API
	 * @param {Object} body Параметры запроса
	 * @returns {string}
	 */
	function buildAbsoluteApiGetExUrl(url, body) {
		let urlWithParams = url;
		const serializedBody = serializeToQueryString(body);

		if (url.indexOf("?") !== -1) {
			urlWithParams += serializedBody;
		} else {
			urlWithParams += `?${serializedBody}`;
		}

		return getAbsoluteApiUrlBuilder(apiDomain)(urlWithParams);
	}

	return buildAbsoluteApiGetExUrl;
}

/**
 * Получает функцию добавляющую параметры из apiClientConfig в headers
 * @param {ApiClientConfig} apiClientConfig Конфигурация клиента к API
 */
function getAddHeadersBuilder(apiClientConfig) {
	function addHeaders(options) {
		const extendedOptions = Object.assign({}, options);

		extendedOptions.headers = Object.assign({}, extendedOptions.headers, {
			Accept: "application/json",
			Language: apiClientConfig.language,
			SessionId: apiClientConfig.sessionId
		});

		if (apiClientConfig.appDomain) {
			extendedOptions.headers.AppDomain = apiClientConfig.appDomain;
		}

		if (apiClientConfig.advertDomainName) {
			extendedOptions.headers.AdvertDomain = apiClientConfig.advertDomainName;
		}

		if (apiClientConfig.advertDomainId) {
			extendedOptions.headers.AdvertDomainId = apiClientConfig.advertDomainId;
		}

		if (apiClientConfig.accessToken) {
			extendedOptions.headers.Authorization = `Bearer ${apiClientConfig.accessToken}`;
		}

		return extendedOptions;
	}

	return addHeaders;
}

/**
 * Factory class to create a object that can send requests to server API.
 */
class ApiClient {

	/**
	 * @param {ApiClientConfig} apiClientConfig Конфигурация клиента к API
	 */
	constructor(apiClientConfig) {
		this.apiClientConfig = apiClientConfig;
	}

	/**
	 * Строит абсолютный url к api
	 * @param {string} url Относительный или абсолютный путь к API
	 */
	buildAbsoluteApiUrl(url) {
		const buildAbsoluteApiGetExUrlFunc = getAbsoluteApiUrlBuilder(this.apiClientConfig.apiDomain);
		return buildAbsoluteApiGetExUrlFunc(url);
	}

	/**
	 * Добавляет параметр языка к дополнительным параметрам запроса
	 * @param {Object} options Дополнительные параметры запроса
	 * @returns {Object}
	 */
	addHeaders(options) {
		const addHeadersFunc = getAddHeadersBuilder(this.apiClientConfig);
		return addHeadersFunc(options);
	}

	/**
	 * Строит GET запрос к api
	 * @param {string} url Относительный url к методу api
	 * @param {Object} body Параметры
	 * @returns {string}
	 */
	buildAbsoluteApiGetExUrl(url, body) {
		const buildAbsoluteApiGetExUrlFunc = getAbsoluteApiGetExUrlBuilder(this.apiClientConfig.apiDomain);
		return buildAbsoluteApiGetExUrlFunc(url, cutUndefinedProperties(body));
	}

	/**
	 * Выполняет POST запрос к api
	 * @param {string} url Относительный url к методу api
	 * @param {Object} body Параметры
	 * @param {Object} options Опции для header
	 * @returns {Promise<{}>}
	 */
	post(url, body, options = {}) {
		const extendOptions = this.addHeaders(options);
		return axiosClient.post(this.buildAbsoluteApiUrl(url), cutUndefinedProperties(body), extendOptions);
	}

	/**
	 * Выполняет GET запрос к api
	 * @param {string} url Относительный url к методу api
	 * @param {Object} options Опции для header
	 * @returns {Promise<{}>}
	 */
	get(url, options = {}) {
		const extendOptions = this.addHeaders(options);
		return axiosClient.get(this.buildAbsoluteApiUrl(url), extendOptions);
	}

	/**
	 * Выполняет GET запрос к api
	 * @param {string} url Относительный url к методу api
	 * @param {Object} body Параметры
	 * @param {Object} options Опции для header
	 * @returns {Promise<{}>}
	 */
	getEx(url, body = {}, options = {}) {
		const extendOptions = this.addHeaders(options);
		return axiosClient.get(this.buildAbsoluteApiGetExUrl(url, cutUndefinedProperties(body)), extendOptions);
	}
}

/**
 * Создает ApiClient
 * @param {ApiClientConfig} apiClientConfig apiClientConfig
 */
export default function createApiClient(apiClientConfig) {
	return new ApiClient(apiClientConfig);
}