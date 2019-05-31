import random  from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const isPrime = (number, acc = 2) => {
  const numberHalf = Math.floor(number / 2);
  if (number < 2) {
    return 'no';
  } if (number === 2 || acc > numberHalf) {
    return 'yes';
  }
  if (number % acc === 0) {
    return 'no';
  }


  return isPrime(number, acc + 1);
};

const getTaskData = () => {
  const question = random(minInteger, maxInteger);
  const correctAnswer = isPrime(question);
  return { question, correctAnswer };
};


const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => flow(getTaskData, description);
