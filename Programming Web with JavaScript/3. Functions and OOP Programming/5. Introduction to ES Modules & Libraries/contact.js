// JavaScript import and export
let contact = (name, age) => {
  console.log(`hii ${name} your age is ${age}`)
}
let add = (x, y) => {
  let k = x + y
  console.log(k)
}
module.exports = { contact, add }
