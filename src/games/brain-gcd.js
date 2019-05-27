import randomInteger from '../utils/randomInteger';
import normalizeAnswer from '../utils/normalizeAnswer';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 50;

const task = () => `${randomInteger(minInteger, maxInteger)} ${randomInteger(minInteger, maxInteger)}`;

const calcAnswer = (taskValue) => {
  const [firstOperand, secondOperand] = normalizeAnswer(taskValue);
  const calc = (a, b) => (!b ? `${a}` : calc(b, a % b));
  return calc(firstOperand, secondOperand);
};


const taskText = 'Find the greatest common divisor of given numbers.';

export default () => flow(task, calcAnswer, taskText);
