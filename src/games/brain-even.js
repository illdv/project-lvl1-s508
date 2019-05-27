import randomInteger from '../utils/randomInteger';
import normalizeAnswer from '../utils/normalizeAnswer';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 20;

const task = () => randomInteger(minInteger, maxInteger);

const calcAnswer = n => (normalizeAnswer(n) % 2 === 0 ? 'yes' : 'no');


const taskText = 'Answer "yes" if number even otherwise answer "no"';

export default () => flow(task, calcAnswer, taskText);
