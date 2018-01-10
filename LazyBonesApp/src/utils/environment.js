import {deviceFrameType} from "../types";

/**
 * Возвращает признак наличия window.
 * @return {boolean}
 */
function isWindowUndefined() {
	return (typeof window === "undefined");
}

/**
 * Признак серверного рендеринга.
 * @type {boolean}
 */
export const isServer = isWindowUndefined();

/**
 * Признак мобильности устройства.
 * @type {boolean}
 */
export function detectMobile() {
	const deviceType = getDeviceFrameType();

	return deviceType === deviceFrameType.MOBILE_WIDTH;
}

/**
 * Получение типа устройства
 * @return {number}
 */
export function getDeviceFrameType() {
	const width = window.innerWidth;

	if (width < 768) {
		return deviceFrameType.MOBILE_WIDTH;
	} else if (width >= 768 && width < 1024) {
		return deviceFrameType.TABLET_WIDTH;
	} else if (width >= 1024 && width < 1180) {
		return deviceFrameType.DESKTOP_WIDTH;
	}

	return deviceFrameType.DESKTOP_WIDE;
}