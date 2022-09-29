// const a = 5,
//   b = 2,
//   c = 'hello'
// // equal to operator
// console.log(a == 5) // true
// console.log(b == '2') // true
// console.log(c == 'Hello') // false

// const a = 3,
//   b = 'hello'
// // not equal operator
// console.log(a != 2) // true
// console.log(b != 'Hello') // true

// const a = 2
// // strict equal operator
// console.log(a === 2) // true
// console.log(a === '2') // false

// const a = 2,
//   b = 'hello'
// // strict not equal operator
// console.log(a !== 2) // false
// console.log(a !== '2') // true
// console.log(b !== 'Hello') // true

// const a = 3
// // greater than operator
// console.log(a > 2) // true

// const a = 3
// // greater than or equal operator
// console.log(a >= 3) //true

// const a = 3,
//   b = 2
// // less than operator
// console.log(a < 2) // false
// console.log(b < 3) // true

// const a = 2
// // less than or equal operator
// console.log(a <= 3) // true
// console.log(a <= 2) // true

// const a = true,
//   b = false
// const c = 4
// // logical AND multiplication
// console.log(a && a) // true
// console.log(a && b) // false
// console.log(c > 2 && c < 2) // false

// const a = true,
//   b = false,
//   c = 4
// // logical OR addition
// console.log(a || b) // true
// console.log(b || b) // false
// console.log(c > 2 || c < 2) // true

// const a = true,
//   b = false
// // logical NOT
// console.log(!a) // false
// console.log(!b) // true

// // if Statement
// // check if the number is positive
// // const number = prompt('Enter a number: ')//vscode not understood
// const number = 2
// // check if number is greater than 0
// if (number > 0) {
//   // the body of the if statement
//   console.log('The number is positive')
// }
// console.log('The if statement is easy')

// // if…else Statement
// // check if the number is positive or negative/zero
// // const number = prompt('Enter a number: ')//vscode not understood
// const number = 2
// // check if number is greater than 0
// if (number > 0) {
//   console.log("The number is positive");
// }
// // if number is not greater than 0
// else {
//   console.log("The number is either a negative number or 0");
// }
// console.log("The if...else statement is easy");

// // if...else if Statement
// // check if the number if positive, negative or zero
// // const number = prompt('Enter a number: ')//vscode not understood
// const number = 2
// // check if number is greater than 0
// if (number > 0) {
//   console.log('The number is positive')
// }
// // check if number is 0
// else if (number == 0) {
//   console.log('The number is 0')
// }
// // if number is neither greater than 0, nor zero
// else {
//   console.log('The number is negative')
// }
// console.log('The if...else if...else statement is easy')

// // Nested if...else Statement
// // check if the number is positive, negative or zero
// // const number = prompt('Enter a number: ')//vscode not understood
// const number = -2
// if (number >= 0) {
//   if (number == 0) {
//     console.log('You entered number 0')
//   } else {
//     console.log('You entered a positive number')
//   }
// } else {
//   console.log('You entered a negative number')
// }

// // Simple Program Using switch Statement
// // program using switch statement
// let a = 1
// switch (a) {
//   case 1:
//     a = 'one'
//     break
//   case 2:
//     a = 'two'
//     break
//   default:
//     a = 'not found'
//     break
// }
// console.log(`The value is ${a}`)

// // Type Checking in switch Statement
// // program using switch statement
// let a = 1
// switch (a) {
//   case '1':
//     a = 1
//     break
//   case 1:
//     a = 'one'
//     break
//   case 2:
//     a = 'two'
//     break

//   default:
//     a = 'not found'
//     break
// }
// console.log(`The value is ${a}`)

// // program for a simple calculator
// let result
// // take the operator input
// // const operator = prompt('Enter operator ( either +, -, * or / ): ')
// const operator = '*' //'Enter operator ( either +, -, * or / ): '
// // take the operand input
// // const number1 = parseFloat(prompt('Enter first number: '))
// const number1 = 25
// // const number2 = parseFloat(prompt('Enter second number: '))
// const number2 = 2
// switch (operator) {
//   case '+':
//     result = number1 + number2
//     console.log(`${number1} + ${number2} = ${result}`)
//     break
//   case '-':
//     result = number1 - number2
//     console.log(`${number1} - ${number2} = ${result}`)
//     break
//   case '*':
//     result = number1 * number2
//     console.log(`${number1} * ${number2} = ${result}`)
//     break
//   case '/':
//     result = number1 / number2
//     console.log(`${number1} / ${number2} = ${result}`)
//     break

//   default:
//     console.log('Invalid operator')
//     break
// }

// // code still run step by step desied output not comes
// // switch With Multiple Case
// // multiple case switch program
// let fruit = 'apple'
// switch (fruit) {
//   case 'apple':
//   case 'mango':
//   case 'pineapple':
//     console.log(`${fruit} is a fruit.`)
//     break
//   default:
//     console.log(`${fruit} is not a fruit.`)
//     break
// }

// // What happens if I forgot a break[?] =>code still run step by step desied output not comes
// var foo = 0
// switch (foo) {
//   case -1:
//     console.log('negative 1')
//     break
//   case 0: // foo is 0 so criteria met here so this block will run
//     console.log(0)
//   // NOTE: the forgotten break would have been here
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1)
//     break // it encounters this break so will not continue into 'case 2:'
//   case 2:
//     console.log(2)
//     break
//   default:
//     console.log('default')
// }

// // Can I put a default between cases?
// var foo = 5
// switch (foo) {
//   case 2:
//     console.log(2)
//     break // it encounters this break so will not continue into 'default:'
//   default:
//     console.log('default')
//   // fall-through
//   case 1:
//     console.log('1')
// }
