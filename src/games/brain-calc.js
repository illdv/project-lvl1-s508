import randomInteger from '../utils/randomInteger';
import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const signs = ['+', '-', '*'];
const rand = Math.floor(Math.random() * signs.length);

const task = () => `${randomInteger(minInteger, maxInteger)} ${signs[rand]} ${randomInteger(minInteger, maxInteger)}`;

const calcAnswer = (first, sign, last) => {
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

const correctAnswer = (stringExp) => {
  const [first, sign, last] = stringExp.split(' ');
  return calcAnswer(+first, sign, +last);
};

const taskText = 'What is the result of the expression?';

export default () => flow(task, correctAnswer, taskText);
