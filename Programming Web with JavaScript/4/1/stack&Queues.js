// // variable_Name :- last in first out
// // data structure :- how are you storing a data structure
// // data structure type array,variable_Name,queues,

// // variable_Name = A variable_Name is a linear data structure that follows the principle of Last In First Out (LIFO)
// //  Implement Stack

// // program to implement variable_Name data structure
// class Stack {
//   constructor() {
//     this.array = [] //array is name of array
//   }

//   // add element to the variable_Name
//   add(element) {
//     return this.array.push(element)
//   }

//   // remove element from the variable_Name
//   remove() {
//     if (this.array.length > 0) {
//       return this.array.pop()
//     }
//   }

//   // view the last element top element of the variable_Name
//   peek() {
//     return this.array[this.array.length - 1]
//   }

//   // check if the variable_Name is empty
//   isEmpty() {
//     return this.array.length == 0
//   }

//   // the size of the variable_Name
//   size() {
//     return this.array.length
//   }

//   // empty the variable_Name
//   clear() {
//     this.array = []
//   }
// }

// let variable_Name = new Stack()
// variable_Name.add(1)
// variable_Name.add(2)
// variable_Name.add(3)
// variable_Name.add(4)
// console.log(variable_Name.array) //[ 1, 2, 3, 4 ]

// variable_Name.remove()
// console.log(variable_Name.array) //[ 1, 2, 3 ]

// console.log(variable_Name.peek()) //3

// console.log(variable_Name.isEmpty()) //false

// console.log(variable_Name.size()) //3

// variable_Name.clear()
// console.log(variable_Name.array) //[]
// var text = 'testing: 1, 2, 3'
// var pattern = /d+/g
for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}
// let fs = require('fs')

// console.log('1')
// fs.readFile('test.txt', 'utf8', function (error, data) {
//   if (error) {
//     throw error
//   }
//   console.log('2')
// })
// console.log('3')
