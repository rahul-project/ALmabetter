//Arrays.prototype
// let Array = [1, 2, 3, 4, 5, 6, 7]

//object.prototype
// object with keys and values of the same type.
// let person = {
//   fname: 'Aahul',
//   lname: 'Bahul',
//   adress: 'Aahul',
// }
//to add them to the object prototype
// person['keys'] = 'values'
// //why its showing this because object is present but keys not present.
// console.log('its show underfined : ', person.fullname)
// console.log('its showinhg a ERROR :', xyz.lname)
// console.log(person)
// let fname = person['fname']
// console.log(person['fname'])

// console.log(person.fname)
// console.log(person['adress'])

// let student = {
//   fname: 'Rahul',
//   lname: 'mule',
//   adress: 'Aahul',
//   marks: {
//     englidh: 52,
//     marathi: 58,
//     sanskrit: 52,
//     hindi: {
//       geammer: 52,
//       literature: 52,
//     },
//   },
//   add: function add(a, b) {
//     console.log(a + b)
//   },
//   person: {
//     fname: 'Aahul',
//     lname: 'Bahul',
//     adress: 'Aahul',
//     fullName1: function fulName() {
//       return this.fname + ' ' + this.lname
//       // return student.fname + ' ' + student.lname
//     },
//   },
//   fullName: function fulName() {
//     return this.fname + ' ' + this.lname
//     // return student.fname + ' ' + student.lname
//   },
// }
// console.log(student['marks'])
// console.log(student['marks']['englidh'])
// console.log(student.add(1, 2))
// console.log(student.person.fullName1())
// console.log(student.fullName())

// const obj1 = { first: 20, second: 30, first: 50 }
// console.log(obj1)
// var obj = { length: 20, height: 35 }
// if ('breadth' in obj === false) {
//   obj.breadth = 12
// }
// console.log(obj.breadth)

// var values = ['Three', 'two', 'one']
// var ans = values.shift()
// // document.writeln(ans)
// console.log(ans)

// var arr = [4, 3, 2, 1]
// var rev = arr.reverse()
// // document.writeln(rev)
// console.log(rev)

// var string1 = 'Fee'
// var intvalue = 10000
// alert(string1 + intvalue)

// var a = []
// a.unshift(5)
// console.log(a)
// a.unshift(22)
// console.log(a)
// a.shift()
// console.log(a)
// a.unshift(3, [4, 5])
// console.log(a)
// a.shift()
// console.log(a)
// a.shift()
// console.log(a)
// a.shift()
// console.log(a)

// //set example : - inserting elements into set
// let Array = [1, 2, 3, 4, 5, 6, 7]
// //array allows duplicate elements
// let setObj = new Set('howtorun')
// // set present unique (not allows duplicate) elements
// setObj.add('student')
// setObj.add('person')
// setObj.add('howtorun')
// // console.log(setObj)
// // setObj.forEach((Element) => console.log(Element))
// console.log(typeof setObj)
// let object = {}
// console.log(typeof object)
// console.log(typeof Array)
// let string = 'rahul'
// console.log(typeof string)

// Map example with object property
// let mapObj = new Map()
// mapObj.set('name', 'rahul')
// // set name in object MAP
// // console.log(mapObj.get('name'))
// // get name in object MAP
// // mapObj.delete('name')
// // delete name in object MAP
// // console.log(mapObj)
// mapObj.set('value', 2523)
// console.log(mapObj)

// different between Map and Object
// JS OBJECTS
// let personObj = {
//   firstName: 'Aahul',
//   lastName: 'mule',
//   address: 'xyz',
//   fullName: 'abcxyz',
//   array: [
//     {
//       studentName: 'jayhind',
//       rollCall: 1947,
//     },
//     {
//       parentName: 'indian',
//       rollCall: 1951,
//     },
//   ],
// }
// console.log(personObj.array[0].rollCall)
// console.log(personObj.array[1].parentName)
// personObj['age'] = 20
// console.log(personObj)
// console.log(personObj.firstName)
// console.log(personObj.size)
// // its show underfined function size not present in Object
// console.log(Object.keys(personObj))

// // MAP
// let personMap = new Map()
// personMap.set('firstName', 'rahul')
// personMap.set('lastName', 'mule')
// personMap.set('address', 'xyz')
// personMap.set('fullName', 'abcxyz')
// console.log(personMap)
// console.log(
//   personMap.get('firstName') +
//     ' ' +
//     personMap.get('lastName') +
//     ' ' +
//     personMap.get('address') +
//     ' ' +
//     personMap.get('fullName'),
// )
// console.log(personMap.size)
// console.log(personMap.keys())

// // JSON OBJECTS
// let personObj = {
//   firstName: 'Aahul',
//   lastName: 'mule',
//   address: {},
//   fullName: [],
//   // function not pass in json objects
// }

// // convert js object into json objects
// console.log(JSON.stringify(personObj))
// let str =
//   '{"firstName":"Aahul", "lastName":"mule","address":"xyz","fullName":"abcxyz"}'
// // convert js string into json object
// console.log(JSON.parse(str))
