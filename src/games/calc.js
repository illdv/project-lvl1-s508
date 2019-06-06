import random from '../utils/randomization';

import flow from '../flow';

const getTaskData = () => {
  const minInteger = 1;
  const maxInteger = 10;
  const firstOperand = random(minInteger, maxInteger);
  const secondOperand = random(minInteger, maxInteger);
  const expressions = [
    {
      operation: '+',
      calculate: (a, b) => a + b
    },
    {
      operation: '-',
      calculate: (a, b) => a - b
    },
    {
      operation: '*',
      calculate: (a, b) => a * b
    }
  ];

  const currectIndex = random(0, expressions.length - 1);
  const { operation, calculate } = expressions[currectIndex];
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const correctAnswer = String(calculate(firstOperand, secondOperand));
  return { question, correctAnswer };
};

const description = 'What is the result of the expression?';

export default () =>
  flow(
    getTaskData,
    description
  );
