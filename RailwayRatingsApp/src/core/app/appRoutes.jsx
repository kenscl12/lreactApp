import React from "react";
import {Route, IndexRoute} from "react-router";

import AppContainer from "../../pages/appContainer";
import {Ratings, ratingsActions} from "../../pages/ratings";

// Роутинг приложения
function getRoutes(store, lang) {
	return (
		<Route path="/" component={AppContainer}>
			<Route
				path={lang}
				name="ratings"
				component={Ratings}
				onEnter={(nextState) => {
					console.log("on enter ratings");

					nextState.promise = store.dispatch(ratingsActions.initialize(
						Object.assign({}, nextState.location.query, nextState.location.state)
					));
				}} />

			<IndexRoute
				name="ratings"
				component={Ratings}
				onEnter={(nextState) => {
					console.log("on enter ratings");

					nextState.promise = store.dispatch(ratingsActions.initialize(
						Object.assign({}, nextState.location.query, nextState.location.state)
					));
				}} />

		</Route>
	);
}

export default getRoutes;