/**
 * Преобразует string в boolean
 * @param {string} str Строка
 * @returns boolean
 */
export function stringToBoolean(str) {
	if (!str) {
		return false;
	}

	switch (str.toLowerCase().trim()) {
		case "true":
		case "yes":
		case "1":
			return true;

		case "false":
		case "no":
		case "0":
			return false;

		default:
			return Boolean(str);
	}
}

/**
 * Преобразует string в boolean
 * @param {string} str Строка
 * @returns boolean
 */
export function stringToBooleanOrUndefined(str) {
	if (str === undefined || str === "") {
		return undefined;
	}

	return stringToBoolean(str);
}