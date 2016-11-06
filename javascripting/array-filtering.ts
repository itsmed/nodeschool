'use strict';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered: number[] = numbers.filter(num => num % 2 === 0);

console.log(filtered); 