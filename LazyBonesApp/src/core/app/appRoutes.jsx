import React from "react";
import {Route, IndexRoute} from "react-router";

import AppContainer from "../../pages/appContainer";
import {Main, mainActions} from "../../pages/main";

// Роутинг приложения
function getRoutes(store, lang) {
	return (
		<Route path="/" component={AppContainer}>
			<Route
				path={lang}
				name="main"
				component={Main}
				onEnter={(nextState) => {
					console.log("on enter main");

					nextState.promise = store.dispatch(mainActions.initialize(
						Object.assign({}, nextState.location.query, nextState.location.state)
					));
				}} />

			<IndexRoute
				name="main"
				component={Main}
				onEnter={(nextState) => {
					console.log("on enter main");

					nextState.promise = store.dispatch(mainActions.initialize(
						Object.assign({}, nextState.location.query, nextState.location.state)
					));
				}} />

		</Route>
	);
}

export default getRoutes;