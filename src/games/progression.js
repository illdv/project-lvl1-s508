import random from '../utils/randomization';
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

const getTaskData = () => {
  const startProg = random(minInteger, maxInteger);
  const stepProg = random(minInteger, maxInteger / 10);
  const arrProg = createProgression(startProg, stepProg);
  const startIndex = 0;
  const endIndex = arrProg.length -1
  const hideIndex = random(startIndex, endIndex);
  const correctAnswer = `${arrProg[hideIndex]}`;
  arrProg[hideIndex] = '..';
  const question = arrProg.join(' ');
  return { question, correctAnswer };
};


const description = 'What number is missing in the progression?';

export default () => flow(getTaskData, description);
