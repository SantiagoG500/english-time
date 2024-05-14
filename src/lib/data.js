import { QuestionT1 } from '$lib/logic/question_t1.js';

export const questionsT1 = [];
const firstQ = QuestionT1();
const secondQ = QuestionT1();
const thirdQ = QuestionT1();
const fourthQ = QuestionT1();

firstQ.setQuestion('¿Qué vino primero?');
firstQ.setAnswers(['El huevo 🥚', 'La gallina 🐔', 'Cristo Rey 🛐', 'Milton 🍔']);
firstQ.setCorrectAns(firstQ.getAnswers()[3]);
firstQ.setCategories('Filosofía');

secondQ.setQuestion('¿Todavía puedo cambiarme a sociales?');
secondQ.setAnswers(['No creo', 'Por supuesto!!!', 'Probablemente no', 'aguante Marx ⚒️⚒️']);
secondQ.setCorrectAns(secondQ.getAnswers()[3]);
secondQ.setCategories('Filosofía');

fourthQ.setQuestion('¿Cuál es el principio y el origen de todas las cosas?');
fourthQ.setAnswers(['Ivone', 'el mal', 'Ivone', 'Geovanni']);
fourthQ.setCorrectAns(fourthQ.getAnswers()[2]);
fourthQ.setCategories('Filosofía');

thirdQ.setQuestion('How do you feel today?');
thirdQ.setAnswers(['Yes, I do', 'I dunno', 'yes very well mondongo 🗿', 'good 🗽']);
thirdQ.setCorrectAns(thirdQ.getAnswers()[2]);
thirdQ.setCategories('Inglés', 'Filosofía');

questionsT1.push(firstQ);
questionsT1.push(secondQ);
questionsT1.push(thirdQ);
questionsT1.push(fourthQ);
