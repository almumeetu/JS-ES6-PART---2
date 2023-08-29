
// problem 89. Write a JavaScript program to negates a predicate function.

const negate = func => (...args) => !func(...args);
console.log([1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0))); //[ 1, 3, 5 ]