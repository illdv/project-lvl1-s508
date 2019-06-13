import random from '../utils/randomization';
import flow from '../flow';
import getRedColor from '../utils/colors';

const isEven = num => num % 2 === 0;

const minInteger = 1;
const maxInteger = 20;

const getTaskData = () => {
  const question = random(minInteger, maxInteger);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const description = `Answer ${getRedColor(
  '"yes"',
)} if number even otherwise answer ${getRedColor('"no"')}`;

export default () => flow(getTaskData, description);
