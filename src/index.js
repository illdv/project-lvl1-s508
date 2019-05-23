import readlineSync from 'readline-sync';


let gameСircle = 3;
const minInteger = 1;
const maxInteger = 20;


const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const isEven = n => n % 2 === 0;
const answerCalc = n => (isEven(n) ? 'yes' : 'no');


export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"  \n');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  while (gameСircle > 0) {
    const questionValue = randomInteger(minInteger, maxInteger);
    console.log(`Question: ${questionValue}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = answerCalc(questionValue);

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
