/* eslint-disable arrow-parens */
const sortArrAsc = arr => [...arr].sort((a, b) => a - b);

const sortArrDesc = arr => [...arr].sort((a, b) => b - a);

export { sortArrAsc, sortArrDesc };
