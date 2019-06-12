import random from '../utils/randomization';
import flow from '../flow';

const findGcd = (a, b) => (!b ? a : findGcd(b, a % b));

const minInteger = 1;
const maxInteger = 10;

const getTaskData = () => {
  const a = random(minInteger, maxInteger);
  const b = random(minInteger, maxInteger);
  const question = `${a} ${b}`;
  const correctAnswer = findGcd(a, b).toString();
  return { question, correctAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => flow(
  getTaskData,
  description,
);
