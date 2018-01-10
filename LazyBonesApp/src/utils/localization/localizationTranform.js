module.exports = (source) => {
	const result = {};

	for (const key in source) {
		if (source.hasOwnProperty(key)) {
			for (const lang in source[key]) {
				if (source[key].hasOwnProperty(lang)) {
					if (!result[lang]) {
						result[lang] = {};
					}
					if (result[lang][key]) {
						throw new Error(`${key} is already exists in ${lang}`);
					}
					result[lang][key] = source[key][lang];
				}
			}
		}
	}

	return result;
};