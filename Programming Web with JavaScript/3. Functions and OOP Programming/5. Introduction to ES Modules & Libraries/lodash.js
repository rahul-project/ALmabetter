// Lodash = Libary (material that we can use to perform certain task)
//  Lodash is high performance
// let lodashImp = require('Lodash')

// // Array method of lodash
// let arrayNumber = [1, 2, 3, 4, 5, 6, 7]
// // concat method of lodash
// let newArray = lodashImp.concat(arrayNumber, [8, 9])
// console.log(newArray.length) // 9
// console.log(newArray) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// // fill method of lodash
// // newArray=lodashImp.fill(newArray,"what you want to fill "0,[start index=1],[end index=6])
// newArray = lodashImp.fill(newArray, 0, 1, 6)
// console.log(newArray) // [ 1, 0, 0, 0, 0, 0, 7, 8, 9 ]

// // collections method of lodash
// let list = [
//   { user: 'joe', age: 10, actice: false },
//   { user: 'jacke', age: 80, actice: true },
// ]
// let check = lodashImp.every(list, ['active', true])
// // check every array element if both enter is true is output id true
// console.log(check) // false
// // https://www.tutorialspoint.com/lodash/index.htm

// // Date method of lodash
// let date = lodashImp.now() // now return date in milli second
// console.log(date) // return date in milli second from 1st january 1970

// // function method of lodash
// let functionLodash = (name) => {
//   console.log(`you are recevied a scratch card ${name}`)
// }
// functionLodash('rahul')
// functionLodash('rahul')
// functionLodash('rahul')
// // its print three time but we reuire it only for once a day we can use below method
// let generateOnce = lodashImp.once(functionLodash('Mule'))
// generateOnce()
// generateOnce()
// generateOnce()
