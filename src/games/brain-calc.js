import randomInteger from '../utils/randomInteger';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 20;


const signs = ['+', '-', '*'];
const rand = Math.floor(Math.random() * signs.length);

const task = () => `${randomInteger(minInteger, maxInteger)} ${signs[rand]} ${randomInteger(minInteger, maxInteger)}`;


const correctAnswer = (n) => {
  const [first, sign, last] = n.split(' ');

  switch (sign) {
    case '+':
      return `${+first + +last}`;
    case '-':
      return `${+first - +last}`;
    case '*':
      return `${+first * +last}`;

    default:
      break;
  }
};

const taskText = 'What is the result of the expression?';

export default () => flow(task, correctAnswer, taskText);
