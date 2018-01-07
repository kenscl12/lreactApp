import createApiMethods from "./apiMethods";
import createApiClient from "./apiClient";

import {getAccessToken} from "../app/appAuth";

export default function apiMethodsBuilder() {
	return (dispatch, getState) => {
		/** @type {AppState} */
		const state = getState();
		const settings = state.settings;
		const appConfig = settings.config;
		const language = settings.language;
		const appDomain = settings.appDomain;
		const advertDomain = settings.advertDomain;
		const sessionId = settings.sessionId;

		/** @type {ApiClientConfig} */
		const apiClientConfig = {};
		apiClientConfig.accessToken = dispatch(getAccessToken());
		apiClientConfig.apiDomain = appConfig.apiDomain;

		if (appDomain) {
			apiClientConfig.appDomain = appDomain;
		}

		if (advertDomain) {
			if (advertDomain.name) {
				apiClientConfig.advertDomainName = advertDomain.name;
			}

			if (advertDomain.id) {
				apiClientConfig.advertDomainId = advertDomain.id;
			}
		}

		apiClientConfig.language = language;
		apiClientConfig.sessionId = sessionId;

		const apiClient = createApiClient(apiClientConfig);
		return createApiMethods(apiClient);
	};
}