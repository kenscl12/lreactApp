import * as types from "../../../types";

/**
 * Преобразует дела в представления дел
 * @param {Array<Thing>} things Дела
 * @returns {Array<ThingViewModel>}
 */
export function convertToViewModelThings(things) {
	if (!things) {
		return null;
	}

	return things.map(thing => convertThingToThingViewModel(thing));
}

/**
 * Преобразует дело в представление дела
 * @param {Thing} thing Дело
 * @returns {ThingViewModel}
 */
function convertThingToThingViewModel(thing) {
	return {
		thing: thing,
		editThing: thing,
		action: types.thingAction.NONE
	}
}