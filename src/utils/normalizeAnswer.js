const strToNum = value => value.split(' ').map(el => (Number.isInteger(+el) ? +el : el));

export default taskValue => (Number.isInteger(taskValue)
  ? taskValue : strToNum(taskValue));
