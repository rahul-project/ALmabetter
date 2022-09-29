// The syntax of the FOR LOOP is:
// for (initialExpression; condition; updateExpression) {
//   // for loop body
// }

// for (let i = 0; i < 5; i++) {
//   // for loop body
//   let condition = 'condition Expression'
//   console.log('loop body: ' + condition)
// }

// // program to display text 5 times
// const n = 5
// // looping from i = 1 to 5
// for (let i = 1; i <= n; i++) {
//   console.log(`I love JavaScript.`)
// }

// // program to display numbers from 1 to 5
// const n = 5
// // looping from i = 1 to 5
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//   console.log(i) // printing the value of i
// }

// // program to display the sum of natural numbers
// let sum = 0
// const n = 5
// // looping from i = 1 to n
// // in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
//   sum += i // sum = sum + i
// }
// console.log('sum:', sum) // 15 = 0+1+2+3+4+5

// // program to display the sum of n natural numbers
// let sum = 0
// const n = 5
// // looping from i = n to 1
// // in each iteration, i is decreased by 1
// for (let i = n; i >= 1; i--) {
//   // adding i to sum in each iteration
//   sum += i // sum = sum + i
// }
// console.log('sum:', sum) // 15 = 5+4+3+2+1+0

// // infinite for loop
// for (let i = 1; i > 0; i++) {
//   // block of code
//   console.log('block of code:', i) //
// }

// The syntax of the FOR...IN loop is:
// for (key in object) {
//     // body of for...in
// }

// // Iterate Through an Object
// const student = {
//   name: 'Monica',
//   class: 7,
//   age: 12,
// }
// // using for...in
// for (let key in student) {
//   // display the properties
//   console.log(`${key} => ${student[key]}`)
// }

// // Update Values of Properties
// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// }
// // using for...in
// for (let i in salaries) {
//   // add a currency symbol
//   // let salary = '$' + salaries[i]
//   // display the values
//   console.log(`${i} : ${'$'}${salaries[i]}`)
//   console.log(i + ' ' + '=>' + ' $' + salaries[i])
// }

// // for...in with Strings
// const string = 'code'
// // using for...in loop
// for (let i in string) {
//   console.log(string[i])
// }

// // for...in with Arrays
// // define array
// const arr = [ 'hello', 1, 'JavaScript' ];
// // using for...in loop
// for (let x in arr) {
//     console.log(arr[x]);
// }

// // JavaScript for...of loop
// for (element of iterable) {
//   // body of for...of
// }

// // array
// const students = ['John', 'Sara', 'Jack'];
// // using for...of
// for ( let element of students ) {
//     // display the values
//     console.log(element);
// }

// // for...of with Strings
// // string
// const string = 'code'
// // using for...of loop
// for (let i of string) {
//   console.log(i)
// }

// // for...of with Sets
// // define Set
// const set = new Set([1, 2, 3])
// // looping through Set
// for (let i of set) {
//   console.log(i)
// }

// // for...of with Maps
// // define Map
// let map = new Map()
// // inserting elements
// map.set('name', 'Jack')
// map.set('age', '27')
// // looping through Map
// for (let [key, value] of map) {
//   console.log(key + ' - ' + value)
// }

// // User Defined Iterators
// // creating iterable object
// const iterableObj = {
//   // iterator method
//   [Symbol.iterator]() {
//     let step = 0
//     return {
//       next() {
//         step++
//         if (step === 1) {
//           return { value: '1', done: false }
//         } else if (step === 2) {
//           return { value: '2', done: false }
//         } else if (step === 3) {
//           return { value: '3', done: false }
//         }
//         return { value: '', done: true }
//       },
//     }
//   },
// }
// // iterating using for...of
// for (const i of iterableObj) {
//   console.log(i)
// }

// // for...of with Generators
// // generator function
// function* generatorFunc() {
//   yield 10
//   yield 20
//   yield 30
// }
// const obj = generatorFunc()
// // iteration through generator
// for (let value of obj) {
//   console.log(value)
// }

// while and do...while Looping
// while (condition) {
//     // body of loop
// }

// // program to display numbers from 1 to 5
// // initialize the variable
// let i = 1,
//   n = 5
// // while loop from i = 1 to 5
// while (i <= n) {
//   console.log(i)
//   i += 1
// }

// // program to find the sum of positive numbers
// // if the user enters a negative numbers, the loop ends
// // the negative number entered is not added to sum
// const prompt = require('prompt-sync')
// let sum = 0
// // take input from the user
// let number = parseInt(prompt('Enter a number: '))
// while (number >= 0) {
//   // add all positive numbers
//   sum += number
//   // take input again if the number is positive
//   number = parseInt(prompt('Enter a number: '))
// }
// // display the sum
// console.log(`The sum is ${sum}.`)
