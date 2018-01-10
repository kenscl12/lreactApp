import {get, post} from "./axiosJsonPromise";

// Default options used for every request
const defaultOptions = {
	headers: {
		Accept: "application/json"
	}
};

/**
 * @object httpClient
 * @description Factory function to create a object that can send
 * requests to a specific resource on the server.
 * @param {string} resource The resource used for config
 */
const axiosJsonClient = {
	/**
	 * @function post
	 * @description Make a POST request.
	 * @param {string} url
	 * @param {Object} body
	 * @param {Object} options
	 * @returns {promise}
	 */
	post: (url, body, options = {}) => {
		const copiedDefaultOptions = Object.assign({}, defaultOptions);

		return post(url, body, Object.assign(
			copiedDefaultOptions,
			options
		));
	},

	/**
	 * @function url
	 * @description Make a GET request.
	 * @param {string} path
	 * @param {Object} options
	 * @returns {promise}
	 */
	get: (url, options = {}) => {
		const copiedDefaultOptions = Object.assign({}, defaultOptions);

		return get(url, Object.assign(
			copiedDefaultOptions,
			options
		));
	}
};

export default axiosJsonClient;