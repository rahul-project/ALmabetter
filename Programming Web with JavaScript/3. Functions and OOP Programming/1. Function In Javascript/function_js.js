// 1. What are functions
// - set of statements[block of code]
// - resusable
// - used to perform a task
// 2. Function declaration
// a. what
// b. how
// 3. Calling of a function
// - by writing the name of the function followed by parathesis
// 4. Parameter & Arguments
// 5. Default parameter
// - values that will be used when nothing is passed
// 6. FUnction return
// - used to return a value from a function and exit the function
// => the control goes to the line from where the function was being

// // function decleration syntax :
// function nameOfFunction() {
//   // function body
// }

// // declaring a function named happyBirthday()
// function happyBirthday() {
//   console.log('Happy birthday!')  // Display a Text
// }

// Defining the function:
function sum(num1, num2) {
  let add = num1 + num2
  console.log(add) //
}
// Calling the function:
sum(10, 15) // 25
// function Calling
// happyBirthday()

// function sayThanks() {
//   console.log('Thank you for your purchase! We appreciate your business.')
// }
// sayThanks()
// sayThanks()
// sayThanks()

// // parameters
// function para_argu(width, height) {
//   console.log(width * height)
// }
// //arguments
// para_argu(2, 5)

// function user(fname, lname) {
//   console.log("'welcome to FB', " + fname + ' ' + lname)
//   console.log(`'welcome to FB', ${fname} ${lname}`)
// }
// user('rahul', 'mule')

// //Default Parameters
// function Default(name = 'To code Acadamy') {
//   console.log(`Welcome, ${name}!`)
// }
// Default('Ajinath') // Output: Hello, Rocky!
// Default() // Output: Hello, code Acadamy!

// // function to find total net income
// let netIncome = (annualIncome, taxRate = 7) => {
//   //   if (!taxRate) taxRate = 7 // another way to right default parameter
//   let netSalary = (annualIncome * taxRate) / 100
//   let netIncomeToHome = annualIncome - netSalary
//   console.log(netIncomeToHome)
// }
// netIncome(300000, 5) // 285000
// netIncome(300000) // 279000
//  // don't use null becase(null == 0)
// netIncome(300000, null) // 300000
// netIncome(300000, undefined) // 279000

// function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
//   console.log(`Remember to buy ${item1}`)
//   console.log(`Remember to buy ${item2}`)
//   console.log(`Remember to buy ${item3}`)
// }
// makeShoppingList('apple', 'orange', 'boubon')
// makeShoppingList()

// // Function Return
// function rectangleArea(width, height) {
//   let area = width * height
//   // console.log(`Area ${area}`)
// }
// // rectangleArea(5, 5)
// console.log(rectangleArea(5, 7)) // Prints undefined

// // let width,
// //   height,
// //   area = width * height
// function rectangleArea(width, height) {
//     let area = width * height
//   return area
// }
// let result = rectangleArea(5, 7)
// console.log(result)

// function monitorCount(rows, columns) {
//   return rows * columns
// }
// const numOfMonitors = monitorCount(5, 4)
// console.log(numOfMonitors)

// function rectangleArea(width, height) {
//   if (width < 0 || height < 0) {
//     return 'You need positive integers to calculate area!'
//   }
//   return width * height
// }
// console.log(rectangleArea(-3, 3)) //'You need positive integers to calculate area!'

// // Helper Functions
// function multiplyByNineFifths(number) {
//   return (number * 9) / 5
// }
// function getFahrenheit(celsius) {
//   return multiplyByNineFifths(celsius) + 32
// }
// let helper = getFahrenheit(5)
// console.log(helper) // Returns 41

// Types of Functions in JavaScript
// // Arrow Function (fat arrow ( => {} ))
// const rectangleArea = (width, height) => {
//   let area = width * height
//   return area
// }
// let result = rectangleArea(5, 4)
// console.log(result) // Returns

// // Concise Body Arrow Functions expression
// // Zero parameters are passed
// const functionName = () => {}
// // one parameters are passed
// const functionName1 = parameters => {}
// // two or more parameters are passed
// const functionName2 = (para1, para2) => {}

// const squareNum = (num) => num * num
// console.log(squareNum(5))

// const squareNum = (num) => {
//   return num * num
// }
// let square = squareNum(5)
// console.log(square)
// const squareNum2 = (num) => num * num
// let square2 = squareNum2(5)
// console.log(square2)

// // anonymous function
// let variableName = function () {
//   console.log('hii')
// }
// variableName()
// //Can call the anonymous function through this

// function countdown(num) {
//   let counter = setInterval(function () {
//     num--
//     if (num <= 0) {
//       clearInterval(counter)
//       console.log('DONE')
//     } else {
//       console.log(num)
//     }
//   }, 1000)
// }
// countdown(4)

// Call Stack  Functions
// Call-stack internally uses the stack data structure.
// It’s a LIFO data structure which stands for Last-In-First-Out.
// let stack = () => {
//   return stack()
// }
// stack() // ERROR :- Maximum call stack size exceeded

// // RECURSION: function call inside the function body
// //ex:
// function recursion(x) {
//   recursion(x)
// }
// recursion('name') // Maximum call stack size exceeded
// // if you want to avoide it use `recursion simple meyhod follow this
// function recursion(name) {
//   // add terminating condition
//   // process data
//   // return statements
//   recursion()
// }

// // Hoisting
// // vairable Hosting :- declarition moved to the top of the code
// // ex:
// console.log(variableHosting) // undefined
// var variableHosting
// variableHosting = 5
// //ex: using test before declaring
// var test
// console.log(test) // undefined
// //ex: program to display value
// a = 5
// console.log(a) // 5
// var a
// //ex: program to display value
// var a
// a = 5
// console.log(a) // 5
// //ex: program to display value
// console.log(a) // undefined
// var a = 5
//ex: program to display values
// var a
// console.log(a) // 5
// a = 5
// //ex: program to display value
// var a = 4
// function greet() {
//   b = 'hello'
//   console.log(b) // hello
//   var b
// }
// greet() // hello
// console.log(b) // Uncaught ReferenceError: b is not defined
// //ex: program to display value
// a = 5
// console.log(a)
// let a // ReferenceError: Cannot access 'a' before initialization
// // ex:
// var variableHosting
// console.log(variableHosting) // 5
// variableHosting = 5

// function Hosting
// ex: program to print the text
// greet()  // Hi, there.
// function greet() {
//   console.log('Hi, there.')
// }
//ex: program to print the text
// // let greet //greet is not a function
// greet() //Uncaught ReferenceError: greet is not defined
// let greet = function () {
//   console.log('Hi, there.')
// }
// ex: program to print the text

// // filter function
// const name = [
//   'Rahul',
//   'Rreet',
//   'Rncaught',
//   'Sunhandled',
//   'Araj',
//   'Sunny',
//   'Sunni',
// ]
// let filterFunc = (name) => {
//   return name.startsWith('R')
// }
// let filterFunct = name.filter(filterFunc)
// console.log(filterFunct) // [ 'Rahul', 'Rreet', 'Rncaught' ]
// let arrowFun = name.filter((item) => item.startsWith('S'))
// console.log(arrowFun) // [ 'Sunhandled', 'Sunny', 'Sunni' ]
// const doesInclude = name.includes('MULE')
// console.log(doesInclude) // false means MULE not includes inname arrays
// // replace function
// const str = 'rahul mule'
// str.replace('mule', 'hii')
// console.log(str.replace('mule', 'hii')) // only print output
// console.log(str) // its not change original string
