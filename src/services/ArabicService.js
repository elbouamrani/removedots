import CharacterMap from "./../characterMap.json";

const ArabicService = {
	process(text) {
		return text
			.split("")
			.map((character) => {
				return CharacterMap[character] ?? character;
			})
			.join("");
	},
};

export default ArabicService;
