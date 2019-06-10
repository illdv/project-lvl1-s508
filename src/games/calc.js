import random from '../utils/randomization';
import flow from '../flow';

const operations = [
  {
    sign: '+',
    operation: (a, b) => a + b,
  },
  {
    sign: '-',
    operation: (a, b) => a - b,
  },
  {
    sign: '*',
    operation: (a, b) => a * b,
  },
];

const minInteger = 1;
const maxInteger = 10;

const getTaskData = () => {
  const firstOperand = random(minInteger, maxInteger);
  const secondOperand = random(minInteger, maxInteger);


  const randomIndex = random(0, operations.length - 1);
  const { sign, operation } = operations[randomIndex];
  const question = `${firstOperand} ${sign} ${secondOperand}`;
  const correctAnswer = operation(firstOperand, secondOperand).toString();
  return { question, correctAnswer };
};

const description = 'What is the result of the expression?';

export default () => flow(getTaskData, description);
