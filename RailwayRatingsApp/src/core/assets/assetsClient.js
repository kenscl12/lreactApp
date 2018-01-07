import axiosClient from "../../utils/httpClient/axiosJsonClient";

function loadStyle(url) {
	for (let i = 0; i < document.styleSheets.length; i++) {
		if (document.styleSheets[i].href === url) {
			return;
		}
	}

	const head = document.getElementsByTagName("head")[0];
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	head.appendChild(link);
}

export function getAssets(assetsUrl) {
	return axiosClient.get(assetsUrl).then(assets => assets.css);
}

export function importCss(configAssetsUrl) {
	const assetsUrl = configAssetsUrl;

	axiosClient
		.get(assetsUrl)
		.then(assets => {
			loadStyle(assets.app.css);
		});
}