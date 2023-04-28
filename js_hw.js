// Section 1

// The acronym DRY stands for "Don't Repeat Yourself". The focus of the acronym is to
// create code that is legible to other developers who might work on my code by
// not repeating code (destructuring and consolidation). The biggest programming tool
// to use DRY code is mindset to keep code more consistent and less repetitive processes.

// The difference between "const", "var", and "let" is that const is a variable that does not
// change. An example of this would be if I set a "const" value of 100 in a for loop, that value
// would remain the same the entire process where as I'd set a let variable to a value lower
// than 100 that could change over time. "Var" is more of a outdated and unused definition and
// most projects now use "const" and "let" to define variables.

// Section 2

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "Kelvin";
// const f = false;
// let g = b + c

// a < b
// c > d
// 'Name'=='Name'
// a + b == c
// a * a == d
// e !== 'Kevin'
// 48 !== '48'
// f !== e

// const expression = g;
// console.log(expression);

// I chose to use "const" when I defined g = 0 as a constant value. I changed "const" to "let"
// when I defined "b + c" as proper terminology for more than one variable being defined. I did
// not use "var".

// When removing one of the 3 declarations, the results of my console.log stayed the same with no
// errors. I tried to break the code by removing the declarations to generate a error message. However,
// my values still showed true of whatever I set them to.

// When I changed the declaration to "10 = g", the terminal generated a error message aimed at the
// numerical value. A numerical value cannot be used as a declaration and can only be used as a value.

// Bonus 1

// const bonus = a < (b || f) === !f && e !== c
// console.log(bonus)

//Section 3

// while (true) {
//    console.log('Do not run this code');
//};

// This code would infinite loop because there is no argument parameter that will stop the code from
// running infinitely.

// const runProgram = true;

// while (runProgram) {
//    console.log("Do not run this code");
//    runProgram = false;
//};

// This code snippet would not run infinitely as there is a argument parameter in the loop that stops
// the loop from running infinitely being the "runProgram = false" line of code.

// Personal note: I did not test either of these two snippets of code and read the code only to determine my answers.

// let letters = "A";
// let i = 0;

// // The loop starts with i being less than 20
// while (i < 20) {
//     // All letters in the loop are the value of the variable "A"
// 	letters += "A";
//     // i increments from the lowest to the highest value
// 	i++;
// }
// // The letter "A" will be printed highest number of times as declared in the argument.
// console.log(letters);

// Section 4

// The similarities of a while loop and for loop operation is that a argument parameter is set
// to keep the loop from infinitely running. A difference is the for loop uses a more controlled
// method of setting parameters.

// The three components of the for loop control panel are the starting value of the loop, the
// argument parameter of the value versus the end result, or the stopping point, and the
// incrementing of the starting value in the loop.

// for (let i = 0; i < 1000; i++) {
//     console.log("The number is: " + i);
// }

// Bonus 2

// console.log('Without you, today\'s emotions are the scurf of yesterday\'s');

// console.log("Without you, today's emotions are the scurf of yesterday's");

// The \ (backslash) appears to not be doing anything manipulative to the string at all. I see the backslash
// as a sort of marker thats separating the 's from the perspective words to maybe make them more easily
//identifiable when a programmer, or developer is looking over code. Observation
// rather than not answering at all.

// for (let i = 999; i > 0; i--) {
//     console.log("the number is: " + i);
// }

// for (let i = 1; i < 11; i++){
//     console.log("The value of i is: " + i, "of 10")
// }

// Bonus 3

// for (let i = 1; i < 11; i++) {
//     console.log(`The value of i is: ${i} of 10`);
// }

//Iteration

// const starWars = ["Han", "C3P0", "R2D2", "Luke", "Leia", "Anakin"];

// for (let i = 0; i < starWars.length; i++) {
//     starWars[i] = starWars[i];
//     console.log(i, starWars[i])
// }

//Bonus 5

// for (let i = 0; i < starWars.length; i+=2) {
//    starWars[i] = starWars[i];
//    console.log(starWars[i]);
//}

// learned from a fellow student as below is my original solution

// OR

// for (let i = 0; i < starWars.length; i++) {
//     starWars[i] = starWars[i];
//     if (i%2 == 0) {
//         console.log(starWars[i])
//     }
// }
