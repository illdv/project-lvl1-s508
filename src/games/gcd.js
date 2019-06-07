import random from '../utils/randomization';
import flow from '../flow';

const findGcd = (a, b) => (!b ? `${a}` : findGcd(b, a % b));

const minInteger = 1;
const maxInteger = 10;

const getTaskData = () => {
  const firstNum = random(minInteger, maxInteger);
  const secondNum = random(minInteger, maxInteger);
  const question = `${firstNum} ${secondNum}`;
  const correctAnswer = findGcd(firstNum, secondNum);
  return { question, correctAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => flow(getTaskData, description);
