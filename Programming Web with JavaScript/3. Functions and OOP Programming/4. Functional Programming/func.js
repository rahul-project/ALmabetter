// let addNumber = (x, y) => {
//   return x + y
// }
// console.log(addNumber(2, 5))

// // pure function: which give predicatable function output on certain input
// let funDisName = (name) => {
//   console.log(`Hello ${name}!`)
// }
// funDisName('rahul')
// funDisName('mule') // output is predicatable

// // Impure function
// let imPureValue = 'Hey!!'
// let imPure = (imPureValue, name) => {
//   return `${imPureValue} ${name}`
// }
// console.log(imPure(imPureValue, 'rahul'))
// module.exports = { imPure, imPureValue }

// // First-Class Objects
// // JS function are First-Class citizens
// // working with function and variable are same
// // can be stored inside a variable
// let firstClass = (x, y) => {
//   let a = x + y
//   console.log(`Add ${x} + ${y} = ${a}`)
//   return x + y
// }
// firstClass(2, 3)
// let displayName = firstClass
// displayName(5, 5)
// //a==5 not a first class example it another thing
// let s = firstClass(2, 3)
// console.log(s)

// // Storage in a Variable
// // Function definition and invocation
// function speak(string) {
//   console.log(string)
// }
// speak('Hello') // logs "Hello"
// // Store in a variable
// var talk = speak
// talk('Hi') // logs "Hi"

// // Passage as an Argument to a Function; Return Value from a Function
// // Pass as an argument to a function
// // Return from a function
// function functionReturner(fn) {
//   return fn
// }
// var chat = functionReturner(talk)
// chat('Good Morning') // logs "Good Morning"

// // Storage in a Data Structure
// // Function definition and invocation
// function speak(string) {
//   console.log(string)
// }
// speak('Hello') // logs "Hello"
// // Store in a variable
// var talk = speak
// talk('Hi') // logs "Hi"
// // Store in a data structure
// var myFuncs = [talk]
// myFuncs[0]('Good Afternoon')

// // Owner of a Property
// // Function definition and invocation
// function speak(string) {
//   console.log(string)
// }
// speak('Hello') // logs "Hello"
// // Store in a variable
// var talk = speak
// talk('Hi') // logs "Hi"
// // Owns properties
// talk.myProperty = 'bananas'
// console.log(talk.myProperty) // logs "bananas"

// 20:10
let testArray = [chat]
console.log(testArray[0]('hello world'))
