import random from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 50;
const progressionLength = 10;


const createProgression = (element, step, acc) => {
  if (acc.length >= progressionLength) {
    return acc;
  }
  return createProgression(element + step, step, acc.concat(element));
};

const getTaskData = () => {
  const initElement = random(minInteger, maxInteger);
  const progressionStep = random(minInteger, maxInteger / 10);
  const progressionInit = [];
  const progression = createProgression(initElement, progressionStep, progressionInit);
  const indexHiddenElement = random(0, progression.length - 1);
  const correctAnswer = `${progression[indexHiddenElement]}`;
  progression[indexHiddenElement] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};


const description = 'What number is missing in the progression?';

export default () => flow(getTaskData, description);
