// 1. what is oops?
// - object oriented programming languages
// - a way of programming languages
// - object play major roll in OOPs

// 2. class, object ,Instance
// - class - A JavaScript class is a blueprint for creating objects,
//  a template for creating objects ( have property and method)
// - constructor - its is a method whenever new object is created you can call constructor
//  to 'intialize the object' that why we use constructor
// - object - an object is a standalone entity, with properties and type
//  An Object is an instance of a class
// - Instance - identifiered of object name of object is called instance

// 3. Method Vs Function
// 4. this keyword
// 5. Method
// call() - borrow method or copy method from object
// apply() - passing a parameter in object by using list of parameters
// bind()

// class classCar {
//   constructor(mybrand, mycountry) {
//     // this is always refered to current object
//     this.brand = mybrand
//     this.country = mycountry
//   }
//   printDetails() {
//     console.log(`${this.brand} ${this.country}`)
//   }
// }
// // creating an object
// let tesla = new classCar('Series X', 'USA')
// let tataMotor = new classCar('Avinya', 'INDIA')
// tesla.printDetails()
// tataMotor.printDetails()

// // Let’s Create our First Object.
// let person = {
//   first_name: 'John',
//   last_name: 'Doe',
//   //method
//   getPersonDetails: function (homeTown, country) {
//     return `The name of the person is
// 				${person.first_name} ${person.last_name} from ${person.getPersonDetails.country}
//         ${person.getPersonDetails.homeTown}`
//   },
// }
// let person1 = {
//   first_name: 'Gohn',
//   last_name: 'Don',
// }
// // copy a code in another objects
// person.getPersonDetails.call(person1)
// console.log(person1)
// person.getPersonDetails.call(person1, 'dubai', 'USA')
// console.log(person1)
// console.log(person.first_name) // John
// console.log(person.getPersonDetails()) // The name of the person is "John Doe"

// let student = class {
//   constructor(name, no, add) {
//     this.myName = name
//     this.myNo = no
//     this.myAdd = add
//   }
//   // print() {
//   //   console.log(this.myName)
//   // }
// }
// let student1 = new student('rahul', 1234, 'hii')
// let student2 = new student('bala', 9878, 'ala')
// console.log(student1)
// console.log(student2)

// // Bind
// let pokemon = {
//   firstname: 'Pika',
//   lastname: 'Chu ',
//   getPokeName: function () {
//     let fullname = this.firstname + ' ' + this.lastname
//     return fullname
//   },
// }
// let pokemonName = function () {
//   console.log(this.getPokeName() + 'I choose you!')
//   // console.log(this.firstname + ' ' + this.lastname + 'I choose you!')
// }
// // bind allows pokemonName to access getPokeName?
// let logPokemon = pokemonName.bind(pokemon)
// // creates new object and binds pokemon.
// //'this' of pokemon = pokemon now
// logPokemon() // 'Pika Chu I choose you!!

// // Call & apply
// var pokemon = {
//   firstname: 'Pika',
//   lastname: 'Chu ',
//   getPokeName: function () {
//     var fullname = this.firstname + this.lastname
//     return fullname
//   },
// }
// var pokemonName = function (snack, hobby) {
//   console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby)
// }
// pokemonName.call(pokemon, 'sushi', 'algorithms')
// // Pika Chu loves sushi and algorithms
// pokemonName.apply(pokemon, ['bananna', 'chess'])
// // Pika Chu loves sushi and algorithms

// // JavaScript Prototype
// function Person(first, last, age, eyecolor) {
//   this.firstName = first
//   this.lastName = last
//   this.age = age
//   this.eyeColor = eyecolor
// }
// Person.prototype.nationality = 'English'
// Person.prototype.name = function () {
//   return this.firstName + ' ' + this.lastName
// }

// // JavaScript Inheritance
// // SuperType constructor function
// function SuperType() {
// 	this.name = "John"
// }
// //SuperType prototype
// SuperType.prototype.getSuperName = function(){
// 	return this.name
// }
// //SubType prototype function
// function SubType(){
// 	this.age 26
// }
// //Inherit the properties from SuperType
// SubType.prototype = new SuperType();
// // Add new property to SubType prototype
// SubType.prototype.getSubAge = function(){
// 	return this.age;
// }
// //Create a SubType object
// var subTypeObj = new SubType();
// console.log(subTypeObj.name); //Output: John
// console.log(subTypeObj.age); //Output: 26
// console.log(subTypeObj.getSuperName()); //Output: John
// console.log(subTypeObj.getSubAge()); //Output: 26

// // Class Extends
class Car {
  constructor(brand) {
    this.carname = brand
  }
  present() {
    return 'I have a ' + this.carname
  }
}
class Model extends Car {
  constructor(brand, mod) {
    super(brand)
    this.model = mod
  }
  show() {
    return this.present() + ', it is a ' + this.model
  }
}
myCar = new Model('Ford', 'Mustang')
document.getElementById('demo').innerHTML = myCar.show()
