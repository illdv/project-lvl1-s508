import { randInteger } from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;

const calcAnswer = (a, b) => (!b ? `${a}` : calcAnswer(b, a % b));


const taskData = () => {
  const firstOperand = randInteger(minInteger, maxInteger);
  const secondOperand = randInteger(minInteger, maxInteger);
  const taskBody = `${firstOperand} ${secondOperand}`;
  const correctAnswer = calcAnswer(firstOperand, secondOperand);
  return { taskBody, correctAnswer };
};


const taskText = 'Find the greatest common divisor of given numbers.';

export default () => flow(taskData, taskText);
