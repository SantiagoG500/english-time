export const QuestionT1 = () => {
	let question = '';
	let answers = [];

	let userAns = '';
	let correctAns = '';
	let ansIsCorrect = false;
	let categories = [];

	const setQuestion = (value) => (question = value);
	const setAnswers = (value) => (answers = [...value]);

	const setUserAns = (value) => (answers = value);
	const setCorrectAns = (value) => (correctAns = value);
	const setCategories = (...value) => {
		categories = [...value];
	};
	// const setAnsIsCorrect = (value) => (answers = value);

	const getQuestion = () => question;
	const getAnswers = () => answers;

	const getUserAns = () => userAns;
	const getCorrectAns = () => correctAns;
	const getAnsIsCorrect = () => ansIsCorrect;
	const getCategories = () => {
		return categories;
	};

	return {
		setQuestion,
		setAnswers,
		setUserAns,
		setCorrectAns,
		setCategories,
		// setAnsIsCorrect,

		getQuestion,
		getAnswers,
		getUserAns,
		getCorrectAns,
		getAnsIsCorrect,
		getCategories
	};
};
