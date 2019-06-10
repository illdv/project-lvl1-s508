import random from '../utils/randomization';
import flow from '../flow';
import getRedColor from '../utils/colors';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  const iter = (acc) => {
    if (number % acc === 0) {
      return false;
    }
    if (acc > Math.floor(number / 2)) {
      return true;
    }
    return iter(acc + 1);
  };
  return iter(2);
};

const minInteger = 1;
const maxInteger = 10;

const getTaskData = () => {
  const question = random(minInteger, maxInteger);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const description = `Answer ${getRedColor('"yes"')} if given number is prime. Otherwise answer ${getRedColor('"no"')}`;

export default () => flow(getTaskData, description);
