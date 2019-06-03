import readlineSync from 'readline-sync';

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
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return;
    }
    console.log('Correct!');
    iter(count - 1);
  };

  iter(roundsCount);
};
