import random from '../utils/randomization';

import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const getTaskData = () => {
  const firstOperand = random(minInteger, maxInteger);
  const secondOperand = random(minInteger, maxInteger);
  const Expressions = [
    {
      calcExpression: (firstArg, secondtArg) => `${firstArg + secondtArg}`,
      operation: '+',
    },
    {
      calcExpression: (firstArg, secondtArg) => `${firstArg - secondtArg}`,
      operation: '-',

    },
    {
      calcExpression: (firstArg, secondtArg) => `${firstArg * secondtArg}`,
      operation: '*',
    },
  ];
  const startIndex = 0;
  const endIndex = Expressions.length - 1;
  const currectIndex = random(startIndex, endIndex);
  const { operation, calcExpression } = Expressions[currectIndex];
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const correctAnswer = calcExpression(firstOperand, secondOperand);
  return { question, correctAnswer };
};


const description = 'What is the result of the expression?';

export default () => flow(getTaskData, description);
