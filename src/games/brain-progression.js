import { randIndex, randInteger } from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 50;
const lengthProg = 10;


const createProgression = (startEl, step, acc = []) => {
  if (acc.length >= lengthProg) {
    return acc;
  }
  return createProgression(startEl + step, step, acc.concat(startEl));
};

const taskData = () => {
  const startProg = randInteger(minInteger, maxInteger);
  const stepProg = randInteger(minInteger, maxInteger / 10);
  const arrProg = createProgression(startProg, stepProg);
  const hideIndex = randIndex(arrProg);
  const correctAnswer = `${arrProg[hideIndex]}`;
  arrProg[hideIndex] = '..';
  const taskBody = arrProg.join(' ');
  return { taskBody, correctAnswer };
};


const taskText = 'What number is missing in the progression?';

export default () => flow(taskData, taskText);
