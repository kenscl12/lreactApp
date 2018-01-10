import * as appActions from "./appActions";

/**
 * Инициализация настроек приложения
 * @param {Store<AppState>} store Хранилище состояния приложения
 * @param {AppInitializationParams} initParams Инициализационные параметры приложения
 */
export function initSettings(store, initParams) {
	store.dispatch(appActions.initSettings());
	store.dispatch(appActions.initConfig(initParams.appConfig));
	store.dispatch(appActions.initLanguage(initParams.appConfig.lang));
	store.dispatch(appActions.initAppDomain(initParams));
	store.dispatch(appActions.initSession(initParams.sessionId));
	store.dispatch(appActions.initAccessToken(initParams.accessToken));
}