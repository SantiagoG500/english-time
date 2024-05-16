// import { limit } from 'firebase/firestore';
// import { questionsT1 } from '../data';

export const QuestionT2 = () => {
	let text = '';
	let textMatches = [];
	let textWithFormat = '';
	let textWithHTML = '';
	let categories = [];

	let options = [];
	let correctOptions = [];

	const setText = (rawText = '', correctChoices = []) => {
		text = rawText;
		correctOptions = [...correctChoices];
		__extractOptions();
		__formatText();
		__formatToHTML();
	};
	const setCategories = (...value) => (categories = [...value]);

	const getText = () => text;
	const getTextWithHTML = () => textWithHTML;
	const getTextWithFormat = () => textWithHTML;
	const getCategories = () => categories;
	const getCorrectOptions = () => correctOptions;
	const getOptions = () => options;

	const __extractOptions = () => {
		const regEx = /\[(.*?)\]/g;
		let matches = text.match(regEx);

		if (!matches) return;

		const geenrateKey = () => Math.floor(Math.random() * 1000);

		for (let i = 0; i < matches.length; i++) {
			const randKey = geenrateKey();

			correctOptions[i] = { [randKey]: correctOptions[i] };
			textMatches.push({ [randKey]: matches[i] });
			options.push({
				[randKey]: matches[i]
					.slice(1, -1) // cuts the brackets
					.split(',') // split the options separated by commas
					.map((m) => m.trim()) // trims in every option
			});

			// console.log({ textMatches, options, correctOptions });
		}
	};

	const __formatText = () => {
		textWithFormat = text;
		for (const match of textMatches) {
			const matchEntries = Object.entries(match).pop();
			textWithFormat = textWithFormat.replace(matchEntries[1], matchEntries[0]);
		}
	};
	const __formatToHTML = () => {
		const selectToHTML = options.map((optionObj) => {
			const key = Object.keys(optionObj).pop();
			let selectTemplate = '';
			for (const key in optionObj) selectTemplate = __createTemplateHTML(optionObj[key], key);
			return { [key]: selectTemplate };
		});
		textWithHTML = textWithFormat;
		for (const select of selectToHTML) {
			const objToArray = Object.entries(select).pop();

			const key = objToArray[0];
			const data = objToArray[1];

			textWithHTML = textWithHTML.replace(key, data);
		}
	};
	const __createTemplateHTML = (options = [], key) => {
		let optionsTemplate = '';

		console.log({ options, key });
		for (const option of options) {
			optionsTemplate += `<option value="${option}"> ${option} </option>`;
		}
		const selectTemplate = `<select name="${key}">${optionsTemplate}</select>`;

		return selectTemplate;
	};

	return {
		setText,
		setCategories,
		// setOptions,

		getText,
		getTextWithHTML,
		getTextWithFormat,
		getCategories,
		getOptions,
		getCorrectOptions
	};
};
