import moment from "moment";
import "moment/locale/ru";
import "moment/locale/de";
import "moment/locale/zh-cn";

import {addZeroToFirstChar} from "../../utils/numberExtensions";
import {getLocale} from "../../utils/localization/localizationManager";

const appDateFormat = "DD.MM.YYYY";

/**
 * Создает дату из дня и месяца
 * @param  {number} day Номер дня
 * @param  {number} month Номер месяца
 */
export function createDate(day, month) {
	let year = today().year();
	if (month - 1 < today().month()) {
		year++;
	}
	return moment().year(year).month(month - 1).date(day);
}

/**
 * Преобразует дату в строку по формату с учетом локали
 * @param  {any} date Дата
 * @param  {string} format Формат
 */
export function formatDate(date, format) {
	return moment(date).format(format || "");
}

/**
 * Преобразует дату в строку по формату с учетом локали
 * @param  {any} date Дата
 * @param  {string} format Формат
 * @param  {string} language Язык
 */
export function formatDateWithLocale(date, format, language) {
	return moment(date).locale(getLocale(language)).format(format || "");
}

/**
 * Преобразует дату в строку в формате дд.мм.гггг
 * @param  {any} date Дата
 */
export function formatToAppDate(date) {
	return moment(date).format(appDateFormat);
}

/**
 * Преобразует дату в строку в формате дд.мм.гггг
 * @param  {any} date Дата
 * @param  {string} language Язык
 */
export function formatToAppDateWithLocale(date, language) {
	return moment(date).locale(getLocale(language)).format(appDateFormat);
}

/**
 * Парсит дату (date) по формату (format) с учетом локали
 * @param  {any} date
 * @param  {string} format
 */
export function parseDate(date, format) {
	return moment(date, format || "");
}

/**
 * Парсит дату из строки в формате дд.мм.гггг в moment
 * @param  {any} date Дата
 */
export function parseToAppDate(date) {
	return moment(date, appDateFormat);
}

/**
 * Парсит дату из строки в формате дд.мм.гггг в moment
 * @param  {any} date Дата
 * @param  {string} language Язык
 */
export function parseToAppDateWithLocale(date, language) {
	return moment(date, appDateFormat, getLocale(language));
}

/**
 * Парсит дату из строки в ISO формате в moment
 * @param  {any} date Дата
 */
export function fromIsoString(date) {
	return parseDate(new Date(date));
}

/**
 * Преобразует дату из строки в ISO формате в указанный формат
 * @param  {any} date Дата
 * @param  {string} format Формат
 */
export function formatFromIsoStringWithoutTimeZone(date, format) {
	return fromIsoString(date).utc().format(format);
}

/**
 * Парсит дату из строки в формате дд.мм.гггг в ISO формат
 * @param  {any} date Дата
 * @param  {string} format Формат
 */
export function toIsoStringByFormat(date, format) {
	if (!date) {
		return undefined;
	}

	if (typeof date.isValid === "function" && !date.isValid()) {
		return undefined;
	}

	return parseToAppDate(date).format(format);
}

/**
 * Парсит дату из строки в формате дд.мм.гггг в ISO формат
 * @param  {any} date Дата
 */
export function toIsoString(date) {
	return toIsoStringByFormat(date, undefined);
}

/**
 * Парсит дату из строки в формате дд.мм.гггг в ISO формат
 * @param  {any} date Дата
 */
export function toIsoStringWithoutTimeZone(date) {
	return toIsoStringByFormat(date, "YYYY-MM-DDTHH:mm:ss");
}

/**
 * Дата Сегодня
 */
export function today() {
	return moment();
}

/**
 * Дата Завтра
 */
export function tomorrow() {
	return moment().add(1, "day");
}

/**
 * Час даты
 */
export function hourDate(date) {
	return moment(date).hour();
}

/**
 * Преобразует час в формат hh:00
 * @param {number} hour Число
 * @returns {string}
 */
export function formatHour(hour) {
	if (typeof hour === "undefined") {
		return undefined;
	}

	return `${addZeroToFirstChar(hour)}:00`;
}

/**
 * Преобразует дату в количество миллисекунд
 * @param  {any} date Дата
 * @returns {number}
 */
export function getMilliseconds(date) {
	return moment(date).valueOf();
}

/**
 *	Преобразует TimeSpan в Duration
 * @param {any} value Значение
 */
export function parseDuration(value) {
	return moment.duration(value);
}