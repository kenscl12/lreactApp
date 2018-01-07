/**
 * Проверяет является ли значение числом
 * @param {string} value Значение
 * @returns {boolean}
 */
export function isNumber(value) {
	return /^\d+$/.test(value);
}

/**
 * Извлекает число из строки (15Ж -> 15)
 * @param {string} value Значение
 * @returns {number}
 */
export function extractNumber(value) {
	if (!value && value !== 0) {
		return undefined;
	}

	if (isNumber(value)) {
		return getNumberOrUndefined(value);
	}

	return getNumberOrUndefined(value.replace(/\D+/g, ""));
}

/**
 * Получает число или undefined
 * @param {string} value Значение
 */
export function getNumberOrUndefined(value) {
	if (!value && value !== 0) {
		return undefined;
	}

	if (!isNumber(value)) {
		return undefined;
	}

	return parseInt(value, 10);
}

/**
 * Получает число или ноль
 * @param {string} value Значение
 */
export function getNumberOrZero(value) {
	if (!value) {
		return 0;
	}

	if (!isNumber(value)) {
		return 0;
	}

	return parseInt(value, 10);
}

/**
 * Проверяет является ли значение римским числом
 * @param {string} value Значение
 * @returns {boolean}
 */
export function isRomanNumber(value) {
	const romanNumbers = ["M", "D", "C", "L", "X", "V", "I", "m", "d", "c", "l", "x", "v", "i"];

	for (let i = 0, len = value.length; i < len; i++) {
		if (romanNumbers.indexOf(value[i]) === -1) {
			return false;
		}
	}

	return true;
}

/**
 * Преобразует римское число в number (Алгоритм из интернета)
 * @param {string} str Римское число
 * @returns {boolean}
 */
export function parseRoman(str) {
	const upperStr = str.toUpperCase();
	const validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
	const token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
	const key = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
	let num = 0;
	let m;

	if (!(upperStr && validator.test(upperStr))) {
		return false;
	}

	do {
		m = token.exec(upperStr);
		if (m) {
			num += key[m[0]];
		}
	} while (m);

	return num;
}

/**
 * Добавляет ноль если цифр 1
 * @param {number} number Число
 * @returns {string}
 */
export function addZeroToFirstChar(number) {
	const numberString = number.toString();

	if (numberString.length === 1) {
		return `0${numberString}`;
	}

	return numberString;
}

/**
 * Функция для склонения существительного в зависимости от количества элементов
 * @param {number} num Число
 * @param {string} oneName Название одного элемента (1 "ответ")
 * @param {string} twoName Название двух элементов (2 "ответа")
 * @param {string} fiveName Название пяти элементов (5 "ответов")
 */
export function getNumberCase(num, oneName, twoName, fiveName) {
	const absNum = Math.abs(num);
	const i = (absNum % 100 > 20) ? absNum % 10 : absNum % 20;

	switch (i) {
		case 1:
			return oneName;

		case 2:
		case 3:
		case 4:
			return twoName;

		default:
			return fiveName;
	}
}

/**
 * Округление числа
 * @param {number} value Число
 * @param {number} digits Кол-во знаков после запятой
 * @returns {number} Общая стоимость заказа.
 */
export function roundNumber(value, digits = 2) {
	return Number(value.toFixed(digits));
}

/**
 * Преобразование цены в формат 0 000
 * @param {number} value Число
 * @param {boolean} displayHundredths Признак округления до сотых. По дифолту = false (десятые)
 * @returns {string} Строка в формате 0 000
 */
export function makeBeautyNumber(value, displayHundredths = false) {
	const newValue = value % 1 !== 0 ? value.toFixed(displayHundredths ? 2 : 1) : value;
	const parts = newValue.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");

	return parts.join(".");
}

/**
 * Проверяет является ли число нечётным
 * @param {number} value Число
 */
export function isOdd(value) {
	if (!isNumber(value)) {
		return false;
	}

	if (value % 2 !== 0) {
		return true;
	}

	return false;
}

/**
 * Проверяет является ли число чётным
 * @param {number} value Число
 */
export function isEven(value) {
	if (!isNumber(value)) {
		return false;
	}

	if (value % 2 === 0) {
		return true;
	}

	return false;
}