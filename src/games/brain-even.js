import randomInteger from '../utils/randomInteger';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 20;

const task = () => randomInteger(minInteger, maxInteger);

const isEven = n => n % 2 === 0;
const correctAnswer = n => (isEven(n) ? 'yes' : 'no');

const taskText = 'Answer "yes" if number even otherwise answer "no"';

export default () => flow(task, correctAnswer, taskText);
