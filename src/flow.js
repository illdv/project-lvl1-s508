import question from './utils/question';

let gameСircle = 3;

export default (task, correctAnswer, taskText) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${taskText}\n`);
  const name = question('May I have your name?');
  console.log(`Hello, ${name}!`);


  while (gameСircle > 0) {
    const currentTask = task();
    const currentAnswer = correctAnswer(currentTask);

    console.log(`Question: ${currentTask}`);
    const userAnswer = question('Your answer');
    const isRightAnswer = userAnswer === currentAnswer;
    if (!isRightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${currentAnswer}.`);
      break;
    }
    gameСircle -= 1;
    console.log('Correct!');
  }
  if (gameСircle <= 0) {
    console.log(`Congratulations, ${name}!`);
  }
};
