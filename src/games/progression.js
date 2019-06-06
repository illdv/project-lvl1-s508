import random from '../utils/randomization';
import flow from '../flow';

const create = (element, step, acc) => {
  const progressionLength = 10;
  if (acc.length >= progressionLength) {
    return acc;
  }
  return create(element + step, step, acc.concat(element));
};

const getTaskData = () => {
  const minInteger = 1;
  const maxInteger = 50;
  const initElement = random(minInteger, maxInteger);
  const step = random(minInteger, maxInteger / 10);
  const init = [];
  const progression = create(initElement, step, init);
  const hiddenElementIndex = random(0, progression.length - 1);
  const correctAnswer = `${progression[hiddenElementIndex]}`;
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

export default () => flow(getTaskData, description);
