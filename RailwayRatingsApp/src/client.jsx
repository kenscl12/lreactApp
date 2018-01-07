require("es6-promise").polyfill();
import "modernizr";

import React from "react";
import {render} from "react-dom";

import {Router} from "react-router";
import {Provider} from "react-redux";

import cookies from "./core/app/appCookie";

import {AppContext} from "./components";
import {initSettings} from "./core/app/appInitializer";
import {initHistory} from "./core/app/appHistory";
import {initConfig} from "./core/app/appConfig";
import {getInitializationParams} from "./core/app/appInitializationParams";
import {initStore} from "./core/app/appStore";
import getRoutes from "./core/app/appRoutes";
import {importCss} from "./core/assets/assetsClient";

const appConfig = initConfig(window.UfsRailwayRatingsAppConfig);
const store = initStore(window.UfsRailwayRatingsInitialState);
const appRoutes = getRoutes(store, appConfig.lang);
const history = initHistory(appConfig.lang, appConfig.baseUrlPath, appConfig.isHashUrl);

importCss(appConfig.assetsUrl);

const appInitializationParams = getInitializationParams(cookies, window.location.hostname, appConfig);

initSettings(store, appInitializationParams);

render((
	<Provider store={store}>
		<AppContext>
			<Router history={history} routes={appRoutes} />
		</AppContext>
	</Provider>
), document.getElementById(appConfig.rootElementId));