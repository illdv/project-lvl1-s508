const redColor = '\x1b[31m';
const defaultColor = '\x1b[0m';

export default string => `${redColor}${string}${defaultColor}`;
