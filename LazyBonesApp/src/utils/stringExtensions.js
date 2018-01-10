/**
 * Первая буква в слове заглавная, остальные какие были
 * @param {string} str Строка
 * @returns {string}
 */
export function capitalizeFirstLetter(str) {
	if (!str) {
		return str;
	}

	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Только первая буква в слове заглавная, остальные маленькие
 * @param {string} str Строка
 * @returns {string}
 */
export function capitalizeOnlyFirstLetter(str) {
	if (!str) {
		return str;
	}

	return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

/**
 * Проверяет значение на пустоту
 * @param {string} value Значение
 * @returns {boolean}
 */
export function isEmpty(value) {
	return typeof(value) === "undefined" || value === "";
}

/**
 * Удаляет пробелы
 * @param {string} str Строка
 * @returns {string}
 */
export function removeWhitespaces(str) {
	if (!str) {
		return str;
	}

	return str.replace(/\s/g, "");
}