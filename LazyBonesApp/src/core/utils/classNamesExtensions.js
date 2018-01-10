/**
 * Объединяет имена css классов
 * @param {string} classes1 Первый набор css классов
 * @param {string} classes2 Второй набор css классов
 */
export function combineClassNames(classes1, classes2) {
	if (!classes1) {
		return classes2;
	}

	if (!classes2) {
		return classes1;
	}

	const additionalClasses = classes1.split(" ");
	const mainClasses = classes2.split(" ");
	mainClasses.push.apply(mainClasses, additionalClasses);
	return mainClasses.join(" ");
}