import readlineSync from 'readline-sync';
import getRedColor from './utils/colors';

const roundsCount = 3;

export default (getTaskData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (count) => {
    if (count < 1) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { question, correctAnswer } = getTaskData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      const wrongAnswer = `${getRedColor(`'${userAnswer}'`)} is wrong answer ;(.`;
      const rightAnswer = `Correct answer was ${getRedColor(`'${correctAnswer}'`)}.`;
      console.log(`${wrongAnswer} ${rightAnswer}`);
      console.log(`Let${getRedColor(`'s try again, ${name}!`)}`);
      return;
    }

    console.log('Correct!');
    iter(count - 1);
  };

  iter(roundsCount);
};
