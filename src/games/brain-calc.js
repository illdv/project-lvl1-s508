import { randInteger, randIndex } from '../utils/randomization';

import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const taskData = () => {
  const firstOperand = randInteger(minInteger, maxInteger);
  const secondOperand = randInteger(minInteger, maxInteger);
  const variants = [
    {
      correctAnswer: `${firstOperand + secondOperand}`,
      taskBody: `${firstOperand} + ${secondOperand}`,
    },
    {
      correctAnswer: `${firstOperand - secondOperand}`,
      taskBody: `${firstOperand} - ${secondOperand}`,

    },
    {
      correctAnswer: `${firstOperand * secondOperand}`,
      taskBody: `${firstOperand} * ${secondOperand}`,
    },
  ];

  const currectIndex = randIndex(variants);
  const { taskBody, correctAnswer } = variants[currectIndex];
  return { taskBody, correctAnswer };
};


const taskText = 'What is the result of the expression?';

export default () => flow(taskData, taskText);
