// Synchronous & asynchronous operations
// Synchronous operations = its sequential order
// Asynchronous operations = not sequential order
// JavaScript is a (MAIN) single-threaded programming language & its Synchronous
// js not run independetly its required support of programming
// 1. client side :- use browser side is hosting environment
// 2. server side :- use nodejs is hosting environment

// ex: Synchronous operations
// console.log('delay called function createDealy')
// function createDealy() {
//   let n = 10000000000
//   while (n > 0) n--
//   console.log('createDealy called')
// }
// createDealy()
// console.log('delay done')

// console.log('Start script... 1')
// function task(message) {
//   // emulate time consuming tasklet
//   let n = 10000
//   while (n > 0) {
//     n--
//   }
//   console.log(message)
// }
// console.log('Start script... 2')
// task('Download a file. 3')
// console.log('Done! 4')

// ex: Asynchronous operations when js behaves Asynchrones below
// 1. Asynchronous method setTimeout and setInterval
// 2. I/O opertion in database, fetching, network

// Asynchronous method setTimeout and setInterval
//  setTimeout ( () => { task , time}

// console.log('Start script... 1')
// function task(message) {
//   console.log(message)
// }
// setTimeout(() => {
//   task('Download a file. 3')
// }, 1000)
// console.log('Done! 2') // Asynchronous opertion

// ****************************************************************//
// let f1 = () => {
//   console.log('synchronous task')
//   f2()
// }
// let f2 = () => {
//   console.log('synchronous task')
//   f3()
// }
// let f3 = () => {
//   setTimeout(() => {
//     console.log('Asynchronous task')
//     // f3 go to hosting environment side
//     // f3 go to call back queue side after delay completed
//     // only display after call stack is finished (last in first out)
//   }, 3000)
//   f4()
// }
// let f4 = () => {
//   console.log('synchronous task')
// }
// f1()
//**************************************************************************//

// console.log('Hi! 1')
// setTimeout(() => {
//   console.log('Execute immediately. 3')
// }, 0)
// console.log('Bye! 2')

// setTimeout(function, milliseconds);
//  setTimeout( () => { task , time}  &  setInterval( () => { task , time}
// let timeout = (name) => {
//   console.log(name)
// }
// // only fix delay time its display rahul
// setTimeout(timeout, 3000, 'rahul')
// passing argument inside a setTimeout function
// // after every time delay its display rahul
// setInterval(timeout, 3000, 'rahul')
// passing argument inside a setInterval function

// // program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }
// setTimeout(greet, 3000);
// console.log('This message is shown first');

// // program to display a text using setTimeout method
// function greet() {
//     console.log('Hello world');
// }
// let intervalId = setTimeout(greet, 3000);
// console.log('Id: ' + intervalId);

// // program to display time every 3 seconds
// function showTime() {
//     // return new date and time
//     let dateTime= new Date();
//     // returns the current local time
//     let time = dateTime.toLocaleTimeString();
//     console.log(time)
//     // display the time after 3 seconds
//      setTimeout(showTime, 3000);
// }
// // calling the function
// showTime();

// // clearTimeout(intervalID);
// // program to stop the setTimeout() method
// let count = 0
// // function creation
// function increaseCount() {
//   // increasing the count by 1
//   count += 1
//   console.log(count)
// }
// let id = setTimeout(increaseCount, 3000)
// // clearTimeout
// clearTimeout(id)
// console.log('setTimeout is stopped.')

// // program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }
// // passing argument to setTimeout
// setTimeout(greet, 1000, 'John', 'Doe');

// // program to display a text using setInterval method
// function greet() {
//     console.log('Hello world');
// }
// setInterval(greet, 1000);

// // program to display time every 5 seconds
// function showTime() {
//   // return new date and time
//   let dateTime = new Date()
//   // return the time
//   let time = dateTime.toLocaleTimeString()
//   console.log(time)
// }
// let display = setInterval(showTime, 5000)

// clearInterval(intervalID);
// program to stop the setInterval() method after five times

// let count = 0;
// // function creation
// let interval = setInterval(function(){
//     // increasing the count by 1
//     count += 1;
//     // when count equals to 5, stop the function
//     if(count === 5){
//         clearInterval(interval);
//     }
//     // display the current time
//     let dateTime= new Date();
//     let time = dateTime.toLocaleTimeString();
//     console.log(time);
// }, 2000);

// // setInterval(function, milliseconds, parameter1, ....paramenterN);
// // // program to display a name
// function greet(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }
// // passing argument to setInterval
// setInterval(greet, 1000, 'John', 'Doe');

// function add(num1, num2) {
//   return num1 + num2
// }
// let callAdd = add(5, 4) //not IO task
// // IO task is task mthat not comunicate with other task not dependent on any external resouses
// console.log(callAdd)

// function callDB() {
//   setTimeout(() => {
//     console.log('delay out put')
//     return 62
//   }, 4000)
// }

// let result = callDB() // asynchronous operation
// console.log(result) // not waiting to finish previous once

// JavaScript is a single-threaded language, which means it has only one call stack that is used to execute the program.
// by using event loop
// javascript does not support parallel program to run
// js not run independetly its required support of programming
// 1. client side :- use browser side is hosting environment
// 2. server side :- use nodejs is hosting environment

function callDB(printCB) {
  setTimeout(() => {
    console.log('delay output')
    printCB('call back')
  }, 4000)
}
function print(data) {
  console.log('print call back function":return', data)
}
let result = callDB(print) // asynchronous operation
