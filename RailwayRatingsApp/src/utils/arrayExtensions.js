/**
 * Получает пересечение двух массивов или возвращает тот который не пустой
 * @param  {[]} arr1 Первый массив
 * @param  {[]} arr2 Второй массив
 * @returns {[]} Пересечение массивов
 */
export function intersectOrNotEmpty(arr1, arr2) {
	if (arr1 && !arr2) {
		return arr1;
	}

	if (!arr1 && arr2) {
		return arr2;
	}

	if (arr1.length > 0 && arr2.length === 0) {
		return arr1;
	}

	if (arr1.length === 0 && arr2.length > 0) {
		return arr2;
	}

	return arr1.filter((n) => arr2.indexOf(n) > -1);
}

/**
 * Исключает из первого массива значения второго
 * @param  {[]} arr1 Первый массив
 * @param  {[]} arr2 Второй массив
 * @returns {[]} Исключение массивов
 */
export function exceptArray(arr1, arr2) {
	if (!arr2) {
		return arr1;
	}

	if (!arr1) {
		return arr1;
	}


	return arr1.filter((n) => arr2.indexOf(n) === -1);
}

/**
 * Оставляет уникальные значения в массиве
 * @param  {[]} arr Массив
 * @returns {[]} Уникальные значения массива
 */
export function uniqueArray(arr) {
	const obj = {};

	for (let i = 0; i < arr.length; i++) {
		const str = arr[i];
		obj[str] = true;
	}

	return Object.keys(obj);
}

/**
 * Удаляет значение из массива
 * @param  {[]} arr Массив
 * @param  {string} value Значение
 * @returns {[]} Массив
 */
export function removeValueFromArray(arr, value) {
	const index = arr.indexOf(value);

	if (index > -1) {
		arr.splice(index, 1);
	};

	return arr;
}
