// // block-scoped.
// // variable declared using let
// let name = 'Sara'
// {
//   // can be accessed only inside
//   let name = 'Peter'
//   console.log(name) // Peter
// }
// console.log(name) // Sara

// // name declared with const cannot be changed
// const name = 'Sara'
// name = 'aray' //
// console.log(name) // Error: Assignment to constant variable.

// // function expression JavaScript Arrow Function
// let y = function (x, y) {
//   return x * y
// }
// console.log(y(2, 5)) // 10
// // OR we can use like this
// // function expression using arrow function
// let x = (x, y) => x * y
// console.log(x(2, 5)) // 10

// // JavaScript Classes
// class Person {
//   constructor(name) {
//     this.name = name
//   }
// }
// const person1 = new Person('John')
// console.log(person1.name) // John

// // Default Parameter Values
// function sum(x, y = 5) {
//   // take sum
//   // the value of y is 5 if not passed
//   console.log(x + y)
// }
// sum(5) // 10
// sum(5, 15) // 20

// // JavaScript Template Literals
// const first_name = 'Jack'
// const last_name = 'Sparrow'
// console.log('Hello ' + first_name + ' ' + last_name)
// // ES6 Template
// const first_name = 'Jack'
// const last_name = 'Sparrow'
// console.log(`Hello ${first_name} ${last_name}`)

// JavaScript Destructuring
// // before you would do something like this
// const person = {
//   name: 'Sara',
//   age: 25,
//   gender: 'female',
// }
// let name = person.name
// let age = person.age
// let gender = person.gender
// console.log(name) // Sara
// console.log(age) // 25
// console.log(gender) // female

// // Using ES6 Destructuring syntax,
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'
// }
// let { name, age, gender } = person;
// console.log(name); // Sara
// console.log(age); // 25
// console.log(gender); // female

// JavaScript import and export
// look sample present in contact and home file
// where we export the contact information  to the home page

// // JavaScript Promises
// // returns a promise
// // Promises are used to handle asynchronous tasks
// let countValue = new Promise(function (resolve, reject) {
//   reject('Promise rejected')
// })
// // executes when promise is resolved successfully
// countValue.then(function successValue(result) {
//   console.log(result) // Promise resolved
// })

/*
A promise is a building object of JavaScript, using it we can easily do 
asynchronous tasks. Also, the concept that is used to create clean code 
basically promises.
*/
// //Promise
// let firstPromise = new Promise((resolved, reject) => {
//   let fullName = 'Rahul mule '
//   setTimeout(() => resolved(fullName), 3000)
//   // we need to use setTimeout()
// }).then((name) => {
//   console.log('I am ' + name) // Rahul mule
// })

// const myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success!') // Yay! Everything went well!
//   }, 250)
// })
// myFirstPromise.then((successMessage) => {
//   console.log(`Yay! ${successMessage}`)
// })

// var promise = new Promise(function (resolve, reject) {
//   reject('Promise')
// })
// promise.then(
//   function (successMessage) {
//     console.log('resolve' + successMessage)
//   },
//   function (errorMessage) {
//     //error handler function is invoked
//     console.log('reject' + errorMessage)
//   },
// )

// // JavaScript Rest Parameter and Spread Operator
// // if you use ...vari is called rest in parameter
// // if you call ...variCall is spread
// // You can use the rest parameter to represent an indefinite number of arguments as an array
// function show(a, b, ...args) {
//   console.log(a) // one
//   console.log(b) // two
//   console.log(args) // ["three", "four", "five", "six"]
// }
// show('one', 'two', 'three', 'four', 'five', 'six')
// let arr1 = ['one', 'two']
// let arr2 = [...arr1, 'three', 'four', 'five']
// console.log(arr2) // ["one", "two", "three", "four", "five"]
