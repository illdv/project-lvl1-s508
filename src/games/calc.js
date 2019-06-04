import random from '../utils/randomization';

import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const getTaskData = () => {
  const firstOperand = random(minInteger, maxInteger);
  const secondOperand = random(minInteger, maxInteger);
  const expressions = [
    {
      operation: '+',
      calculateExpression: (firstArg, secondtArg) => `${firstArg + secondtArg}`,
    },
    {
      operation: '-',
      calcExpression: (firstArg, secondtArg) => `${firstArg - secondtArg}`,

    },
    {
      operation: '*',
      calcExpression: (firstArg, secondtArg) => `${firstArg * secondtArg}`,
    },
  ];

  const currectIndex = random(0, expressions.length - 1);
  const { operation, calculateExpression } = expressions[currectIndex];
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const correctAnswer = calculateExpression(firstOperand, secondOperand);
  return { question, correctAnswer };
};


const description = 'What is the result of the expression?';

export default () => flow(getTaskData, description);
