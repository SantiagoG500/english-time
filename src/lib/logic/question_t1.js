export const QuestionT1 = () => {
	let question = '';
	let answers = new Set();

	let userAns = '';
	let correctAns = '';
	let ansIsCorrect = false;

	const setQuestion = (value) => (question = value);
	const setAswers = (value) => (answers = value);

	const setUserAns = (value) => (answers = value);
	const setCorrectAns = (value) => (answers = value);
	const setAnsIsCorrect = (value) => (answers = value);

	const getQuestion = () => question;
	const getAswers = () => answers;

	const getUserAns = () => userAns;
	const getCorrectAns = () => correctAns;
	const getAnsIsCorrect = () => ansIsCorrect;

	return {
		setQuestion,
		setAswers,
		setUserAns,
		setCorrectAns,
		setAnsIsCorrect,

		getQuestion,
		getAswers,
		getUserAns,
		getCorrectAns,
		getAnsIsCorrect
	};
};
