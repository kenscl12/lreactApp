/**
 * Проверяет есть ли значение у какого либо свойства в объекте
 * @param {Object} obj Объект
 * @param {Object} value значение
 * @returns {boolean}
 */
export function hasValue(obj, value) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] === value) {
			return true;
		}
	}

	return false;
}

/**
 * Получает название свойства по значению в объекте
 * @param {Object} obj Объект
 * @param {Object} value значение
 * @returns {string}
 */
export function getKeyByValue(obj, value) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] === value) {
			return key;
		}
	}

	throw new Error(`Unknown value: ${value}`);
}

/**
 * Удаляет свойство по dot notation name
 * @param {Object} obj Объект
 * @param {String} prop Имя свойства
 */
export function deleteProperty(obj, prop) {
	const parts = prop.split(".");
	const last = parts.pop();
	const l = parts.length;
	let i = 1;
	let current = parts[0];

	while ((obj = obj[current]) && i < l) {
		current = parts[i];
		i++;
	}

	if (obj) {
		delete obj[last];
	}
}

/**
 * Проверяет объект на null и наличие свойств
 * @param {Object} obj Объект
 */
export function isEmpty(obj) {
	return !obj || Object.getOwnPropertyNames(obj).length === 0;
}