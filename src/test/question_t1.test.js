import { QuestionT1 } from '../lib/logic/question_t1';
import { it, expect, expectTypeOf, test } from 'vitest';

test('Question should be a Class: ', () => {
	const newQuestion = QuestionT1;
	expectTypeOf(newQuestion).toBeObject();
});
