// Transform *.localization.json from format A to B
// Format A:
// {
//	"Main": {
//		"ru": "Главная",
//		"en": "Main"
//	}
// }
// Fromat B:
// {
//	"ru": {
//		"Main": "Главная"
//	},
//	"en": {
//		"Main": "Main"
//	}
// }

const transform = require("./localizationTranform");
module.exports = (source) => {
	this.cacheable && this.cacheable();
	const oldFormat = typeof source === "string" ? JSON.parse(source) : source;
	const newFormat = transform(oldFormat);

	return `module.exports = ${JSON.stringify(newFormat, undefined, "\t")};`;
};