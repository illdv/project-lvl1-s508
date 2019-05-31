import random  from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;

const calcAnswer = (a, b) => (!b ? `${a}` : calcAnswer(b, a % b));


const getTaskData = () => {
  const firstOperand = random(minInteger, maxInteger);
  const secondOperand = random(minInteger, maxInteger);
  const question = `${firstOperand} ${secondOperand}`;
  const correctAnswer = calcAnswer(firstOperand, secondOperand);
  return { question, correctAnswer };
};


const description = 'Find the greatest common divisor of given numbers.';

export default () => flow(getTaskData, description);
