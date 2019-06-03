import random from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 20;

const isEven = taskValue => (taskValue % 2 === 0);

const getTaskData = () => {
  const question = random(minInteger, maxInteger);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};


const description = 'Answer "yes" if number even otherwise answer "no"';

export default () => flow(getTaskData, description);
