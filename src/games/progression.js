import random from '../utils/randomization';
import flow from '../flow';

const buildProgression = (element, acc, step, length) => {
  if (acc.length >= length) {
    return acc;
  }
  return buildProgression(element + step, acc.concat(element), step, length);
};

const minInteger = 1;
const maxInteger = 50;
const progressionLength = 10;

const getTaskData = () => {
  const initElement = random(minInteger, maxInteger);
  const step = random(minInteger, maxInteger / 10);
  const progression = buildProgression(initElement, [], step, progressionLength);
  const hiddenElementIndex = random(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default () => flow(getTaskData, description);
