import random from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 50;
const progressionLength = 10;


const createProgression = (element, step, acc = []) => {
  if (acc.length >= progressionLength) {
    return acc;
  }
  return createProgression(element + step, step, acc.concat(element));
};

const getTaskData = () => {
  const initElement = random(minInteger, maxInteger);
  const stepProgression = random(minInteger, maxInteger / 10);
  const progressionList = createProgression(initElement, stepProgression);
  const startIndex = 0;
  const endIndex = progressionList.length - 1;
  const hidenIndex = random(startIndex, endIndex);
  const correctAnswer = `${progressionList[hidenIndex]}`;
  progressionList[hidenIndex] = '..';
  const question = progressionList.join(' ');
  return { question, correctAnswer };
};


const description = 'What number is missing in the progression?';

export default () => flow(getTaskData, description);
