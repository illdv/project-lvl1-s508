import question from './utils/question';

let gameСircle = 3;

export default (taskData, taskText) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${taskText}\n`);
  const name = question('May I have your name?');
  console.log(`Hello, ${name}!`);


  while (gameСircle > 0) {
    const { taskBody, correctAnswer } = taskData();

    console.log(`Question: ${taskBody}`);
    const userAnswer = question('Your answer');
    const isRightAnswer = userAnswer === correctAnswer;
    if (!isRightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      break;
    }
    gameСircle -= 1;
    console.log('Correct!');
  }
  if (gameСircle <= 0) {
    console.log(`Congratulations, ${name}!`);
  }
};
