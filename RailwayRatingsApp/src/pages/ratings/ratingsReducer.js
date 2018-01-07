import * as ratingsActionTypes from "./ratingsActionTypes";

/**
 * Аггрегирующий reducer для страницы Ratings
 * @param {AppState} state Текущее состояние приложения
 * @param {Object} action Действие
 * @returns {AppState}
 */
export default function (state = {}, action) {
	switch (action.type) {
		case ratingsActionTypes.INITIALIZE: {
			return Object.assign({}, state, {
				ratings: action.data
			});
		}

		case ratingsActionTypes.SET_RATING_FORM: {
			const newState = Object.assign({}, state);

			newState.ratings = Object.assign({}, state.ratings);
			newState.ratings = Object.assign({}, state.ratings, {
				ratingForm: action.data
			});

			return newState;
		}

		case ratingsActionTypes.DISPLAY_RATING_ERROR_POPUP: {
			const newState = Object.assign({}, state);

			newState.ratings = Object.assign({}, newState.ratings, {
				displayRatingErrorPopup: action.data
			});

			return newState;
		}

		case ratingsActionTypes.DISPLAY_SENDING_BUTTON: {
			const newState = Object.assign({}, state);

			newState.ratings = Object.assign({}, newState.ratings, {
				sendingForm: action.data
			});

			return newState;
		}

		case ratingsActionTypes.DISPLAY_SUCCESS_FORM: {
			const newState = Object.assign({}, state);

			newState.ratings = Object.assign({}, newState.ratings, {
				successForm: action.data
			});

			return newState;
		}

		default:
			return state;
	}
}