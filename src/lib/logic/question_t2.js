export const QuestionT2 = () => {
	let rawText = '';
	let textWithFormat = '';
	let textWithHTML = '';
	let correctText = '';

	const options = {};
	const questionId = returnRandN(10000);

	const setRawText = (value = '') => {
		rawText = value;
		formatText();
		console.log({ rawText, textWithFormat, textWithHTML, correctText, options });
	};
	const setCorrectText = (replaceCode, value) => {
		// console.log({ replaceCode, value });
		// console.log(options);
		// console.log(options[replaceCode]);

		if (!correctText) correctText = textWithFormat;
		correctText = correctText.replace(replaceCode, value);
	};
	const getRawText = () => rawText;
	const getTextWithFormat = () => textWithFormat;
	const getTextWithHTML = () => textWithHTML;
	const getCorrectText = () => correctText;
	const getOptions = () => options;
	const getQuestionId = () => questionId;

	const formatText = () => {
		const regEx = /\[(.*?)\]/g;
		const matches = rawText.match(regEx);

		if (!matches) return;

		textWithFormat = rawText;
		for (const match of matches) {
			const randKey = returnRandN(1000);
			options[randKey] = match.slice(1, -1);
			textWithFormat = textWithFormat.replace(match, randKey);
		}
		formatHTML();
	};
	const formatHTML = () => {
		textWithHTML = textWithFormat;

		for (const key in options) {
			const optionsValue = options[key];
			if (!textWithHTML.includes(key)) return;

			const selectTEmplate = createTemplateHTML(optionsValue, key);
			textWithHTML = textWithHTML.replace(key, selectTEmplate);
		}
	};
	const createTemplateHTML = (optionsValue, optionsKey) => {
		const options = optionsValue.split(',').map((str) => str.trim());

		let optionsTemplate = '';
		for (const option of options) {
			optionsTemplate += `<option value="${option}">${option}</option>`;
		}
		const selectTemplate = `<select name="${optionsKey}" id="${questionId}">${optionsTemplate}</select>`;

		return selectTemplate;
	};

	function returnRandN(limit) {
		return Math.round(Math.random() * limit);
	}

	return {
		getRawText,
		getTextWithFormat,
		getTextWithHTML,
		getCorrectText,
		getOptions,
		getQuestionId,

		setRawText,
		setCorrectText
	};
};

// const xd = QuestionT2();
// xd.setRawText('Hola, [esto, es un, ejemplo]');

// console.log('------------ datos ------------');
// console.log('raw text: ' + xd.getRawText());
// console.log('Options ' + JSON.stringify(xd.getOptions()));
// console.log('Correct Text ' + xd.getCorrectText());
// console.log('Text with html ' + xd.getTextWithHTML());
// console.log('Text with Format ' + xd.getTexttWithFormat());
// console.log();
