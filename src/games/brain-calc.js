import { randInteger, randIndex } from '../utils/randomization';

import flow from '../flow';

const minInteger = 1;
const maxInteger = 10;


const signs = ['+', '-', '*'];

const taskData = () => {
  const firstOperand = randInteger(minInteger, maxInteger);
  const secondOperand = randInteger(minInteger, maxInteger);
  const sign = signs[randIndex(signs)];
  const taskBody = `${firstOperand} ${sign} ${secondOperand}`;
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = `${firstOperand + secondOperand}`;
      break;

    case '-':
      correctAnswer = `${firstOperand - secondOperand}`;
      break;

    case '*':
      correctAnswer = `${firstOperand * secondOperand}`;
      break;

    default:
      break;
  }

  return { taskBody, correctAnswer };
};

// const calcAnswer = (taskValue) => {
//   const [first, sign, last] = normalizeAnswer(taskValue);
//   let exp;
//   switch (sign) {
//     case '+':
//       exp = `${first + last}`;
//       break;

//     case '-':
//       exp = `${first - last}`;
//       break;

//     case '*':
//       exp = `${first * last}`;
//       break;

//     default:
//       break;
//   }
//   return exp;
// };


const taskText = 'What is the result of the expression?';

export default () => flow(taskData, taskText);
