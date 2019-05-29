import { randInteger } from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 20;

const calcAnswer = taskValue => (taskValue % 2 === 0 ? 'yes' : 'no');

const taskData = () => {
  const taskBody = randInteger(minInteger, maxInteger);
  const correctAnswer = calcAnswer(taskBody);
  return { taskBody, correctAnswer };
};


const taskText = 'Answer "yes" if number even otherwise answer "no"';

export default () => flow(taskData, taskText);
