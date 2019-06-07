import random from '../utils/randomization';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;

const getTaskData = () => {
  const firstOperand = random(minInteger, maxInteger);
  const secondOperand = random(minInteger, maxInteger);
  const operations = [
    {
      operation: '+',
      calculate: (a, b) => a + b,
    },
    {
      operation: '-',
      calculate: (a, b) => a - b,

    },
    {
      operation: '*',
      calculate: (a, b) => a * b,
    },
  ];

  const randomIndex = random(0, operations.length - 1);
  const { operation, calculate } = operations[randomIndex];
  const question = `${firstOperand} ${operation} ${secondOperand}`;
  const correctAnswer = String(calculate(firstOperand, secondOperand));
  return { question, correctAnswer };
};

const description = 'What is the result of the expression?';

export default () => flow(getTaskData, description);
