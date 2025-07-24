import generateName from 'sillyname';
import superheroes from 'superheroes';
import {randomSuperhero} from 'superheroes';
import generateStupidName, { randomNoun, randomAdjective, test } from './node_modules/sillyname/index.js';
import {catNames, randomCatName} from 'cat-names';

var test22 = generateName();
// var test3 = generateStupidName();

console.log(`My name is ${test22}`);
var randomNumber = Math.floor(Math.random() * 1800);
var test2 = superheroes[randomNumber];
console.log(`My name is: ${test2}`);

var test3 = randomSuperhero();

console.log(`My name is: ${test3}`);

console.log(generateStupidName());
console.log(randomNoun());
console.log(randomAdjective());
console.log(test());

console.log(catNames);
//=> ['Abby', 'Angel', …]

console.log(randomCatName());
//=> 'Max'