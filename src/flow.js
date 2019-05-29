import readlineSync from 'readline-sync';

const roundGame = 3;

export default (taskData, taskText) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${taskText}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const circleGame = (circle) => {
    if (circle < 1) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const { taskBody, correctAnswer } = taskData();
    console.log(`Question: ${taskBody}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isRightAnswer = userAnswer === correctAnswer;
    if (!isRightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      return;
    }
    console.log('Correct!');
    circleGame(circle - 1);
  };

  circleGame(roundGame);
};
