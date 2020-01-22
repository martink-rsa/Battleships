/* eslint-disable arrow-parens */
const sortArrAsc = arr => [...arr].sort((a, b) => a - b);

const sortArrDesc = arr => [...arr].sort((a, b) => b - a);

const genRandNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export { sortArrAsc, sortArrDesc, genRandNum };
