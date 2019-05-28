import { randInteger } from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 20;

const taskData = () => {
  const taskBody = randInteger(minInteger, maxInteger);
  const correctAnswer = taskBody % 2 === 0 ? 'yes' : 'no';
  return { taskBody, correctAnswer };
};


const taskText = 'Answer "yes" if number even otherwise answer "no"';

export default () => flow(taskData, taskText);
