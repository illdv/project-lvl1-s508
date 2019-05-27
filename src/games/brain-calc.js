import randomInteger from '../utils/randomInteger';
import normalizeAnswer from '../utils/normalizeAnswer';

import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const signs = ['+', '-', '*'];
const rand = Math.floor(Math.random() * signs.length);

const task = () => `${randomInteger(minInteger, maxInteger)} ${signs[rand]} ${randomInteger(minInteger, maxInteger)}`;

const calcAnswer = (taskValue) => {
  const [first, sign, last] = normalizeAnswer(taskValue);
  let exp;
  switch (sign) {
    case '+':
      exp = `${first + last}`;
      break;

    case '-':
      exp = `${first - last}`;
      break;

    case '*':
      exp = `${first * last}`;
      break;

    default:
      break;
  }
  return exp;
};


const taskText = 'What is the result of the expression?';

export default () => flow(task, calcAnswer, taskText);
