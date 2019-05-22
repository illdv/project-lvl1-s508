import readlineSync from 'readline-sync';


let gameСircle = 3;
const minInteger = 1;
const maxInteger = 20;
const YES = 'yes';
const NO = 'no';
const CORRECT = 'Correct!';
const answersList = [YES, NO];

const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const isEven = (n) => {
  const checkIsEven = n % 2 === 0;
  return checkIsEven ? YES : NO;
};

const outputChecking = (correctAnswer, userAnswer) => {
  const wrongAnswer = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`;
  const isRightAnswer = answersList.find(el => el === userAnswer) === correctAnswer;

  if (!isRightAnswer) {
    gameСircle = 0;
    return wrongAnswer;
  }
  gameСircle -= 1;
  return CORRECT;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"  \n');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);

  while (gameСircle > 0) {
    const integer = randomInteger(minInteger, maxInteger);
    console.log(`Question: ${integer}`);
    const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase();
    const correctAnswer = isEven(integer);
    const outputString = outputChecking(correctAnswer, userAnswer);
    console.log(`${outputString} \n`);
    const isSuccessRun = gameСircle < 1 && outputString === CORRECT;
    if (isSuccessRun) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
