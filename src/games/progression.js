import random from '../utils/randomization';
import flow from '../flow';

const buildProgression = (initElement, step, length) => {
  const iter = (element, acc) => {
    if (acc.length >= length) {
      return acc;
    }
    return iter(element + step, acc.concat(element));
  };
  return iter(initElement, []);
};

const minInteger = 1;
const maxInteger = 5;
const progressionLength = 10;

const getTaskData = () => {
  const initElement = random(minInteger, maxInteger);
  const step = random(1, 5);
  const progression = buildProgression(initElement, step, progressionLength);
  const hiddenElementIndex = random(0, progression.length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default () => flow(
  getTaskData,
  description,
);
