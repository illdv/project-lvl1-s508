import random  from '../utils/randomization';

import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const getTaskData = () => {
  const firstOperand = random(minInteger, maxInteger);
  const secondOperand = random(minInteger, maxInteger);
  const variants = [
    {
      correctAnswer: `${firstOperand + secondOperand}`,
      question: `${firstOperand} + ${secondOperand}`,
    },
    {
      correctAnswer: `${firstOperand - secondOperand}`,
      question: `${firstOperand} - ${secondOperand}`,

    },
    {
      correctAnswer: `${firstOperand * secondOperand}`,
      question: `${firstOperand} * ${secondOperand}`,
    },
  ];
  const startIndex = 0
  const endIndex = variants.length-1
  const currectIndex = random(startIndex, endIndex);
  const { question, correctAnswer } = variants[currectIndex];
  return { question, correctAnswer };
};


const description = 'What is the result of the expression?';

export default () => flow(getTaskData, description);
