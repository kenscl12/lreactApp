/**
 * Преобразует строку в JSON с URL decode.
 * @param {string} value Значение
 * @returns {object}
 */
export function parseJson(value) {
	if (value && typeof value === "string") {
		try {
			return JSON.parse(decodeURIComponent(value));
		} catch (e) {
			return null;
		}
	}

	return value;
}