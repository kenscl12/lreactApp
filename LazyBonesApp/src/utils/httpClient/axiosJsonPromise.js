import axios from "axios";

/**
 * @function fetchJsonPromise
 * @description Make a request to the server and return a promise.
 * @param {string} url
 * @param {Object} options
 * @returns {promise}
 */
export function post(url, data, options) {
	return new Promise((resolve, reject) => {
		if (!url) {
			reject(new Error("There is no URL provided for the request."));
		}

		if (!options) {
			reject(new Error("There are no options provided for the request."));
		}

		axios.post(url, data, options)
			.then(response => {
				if (response.status >= 200 && response.status < 400) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch(error => {
				if (error.data && error.data.message) {
					reject(error.data);
				} if (error.response && error.response.data) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
}

/**
 * @function fetchJsonPromise
 * @description Make a request to the server and return a promise.
 * @param {string} url
 * @param {Object} options
 * @returns {promise}
 */
export function get(url, options) {
	return new Promise((resolve, reject) => {
		if (!url) {
			reject(new Error("There is no URL provided for the request."));
		}

		if (!options) {
			reject(new Error("There are no options provided for the request."));
		}

		axios.get(url, options)
			.then(response => {
				if (response.status >= 200 && response.status < 400) {
					resolve(response.data);
				} else {
					reject(response.data);
				}
			})
			.catch(error => {
				if (error.data && error.data.message) {
					reject(error.data);
				} if (error.response && error.response.data) {
					reject(error.response.data);
				} else {
					reject(error);
				}
			});
	});
}