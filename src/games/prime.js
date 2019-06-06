import random from '../utils/randomization';
import flow from '../flow';

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

const getTaskData = () => {
  const minInteger = 1;
  const maxInteger = 10;
  const question = random(minInteger, maxInteger);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => flow(getTaskData, description);
