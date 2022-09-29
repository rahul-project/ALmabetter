// <--- Using an array LITERAL value METHOD --->
// let number=[1,2,3,4,5,6,7,8,9,10];
// let string=["rahul",true,null,underfined]; 
// console.log(number);
// <--- Using the NEW keyword METHOD --->
// const array2 = new Array("eat", "sleep");
// console.log(array2.length);

// <--Array length-->
// const dailyActivities0 = [ 'eat', 'sleep'];
// // this gives the total number of elements in an array
// console.log(dailyActivities0.length); // 2

// <--- empty array --->
// const myList = [ ];
// <-- array of numbers -->
// const numberArray = [ 2, 4, 6, 8];
// <-- array of strings -->
// const stringArray = [ 'eat', 'work', 'sleep'];
// <-- array with mixed data types -->
// const newData = ['work', 'exercise', 1, true];

// <-- array content objrct ,function,array,stringArray -->
// const newData = [
//     {'task1': 'exercise'},
//     [1, 2 ,3],
//     function hello() { console.log('hello')}
// ];

// <-- Access Elements of an Array -->
// const myArray = ['h', 'e', 'l', 'l', 'o'];
// <-- first element -->
// console.log(myArray[0]);  // "h"
// <-- second element -->
// console.log(myArray[1]); // "e"
// let a=['Almabetter'];
// console.log(a.indexOf('Almabetter'));

// <-- Add an Element to an Array of Elements --> push & unshift
// let dailyActivities = ['eat', 'sleep'];
// // add an element at the end
// dailyActivities.push('exercise'); // push()
// console.log(dailyActivities);  //  ['eat', 'sleep', 'exercise']

// let dailyActivities2 = ['eat', 'sleep'];
// //add an element at the start
// dailyActivities2.unshift('work'); //unshift();
// console.log(dailyActivities2); // ['work', 'eat', 'sleep']

// <-- Change the Elements of an Array by using index -->
// let dailyActivities3 = [ 'eat', 'sleep'];
// // this will add the new element 'exercise' at the 2 index
// dailyActivities3[2] = 'exercise';
// console.log(dailyActivities3); // ['eat', 'sleep', 'exercise']

// let dailyActivities4 = [ 'eat', 'sleep'];
// this will add the new element 'exercise' at the 3 index
// dailyActivities4[3] = 'exercise';
// console.log(dailyActivities4); // ["eat", "sleep", undefined, "exercise"]

// <-- Remove an Element from an Arrays -->
// let dailyActivities5 = ['work', 'eat', 'sleep', 'exercise'];
// remove the last element
// dailyActivities5.pop();
// console.log(dailyActivities5); // ['work', 'eat', 'sleep']
// // remove the last element from ['work', 'eat', 'sleep']
// const removedElement1 = dailyActivities5.pop();
// //get removed element
// console.log('remove the last element by using pop()');
// console.log(removedElement1); // 'sleep'
// console.log(dailyActivities5);  // ['work', 'eat']

// let dailyActivities6 = ['work', 'eat', 'sleep'];
// // remove the first element
// dailyActivities6.shift();
// // const removedElement2 = dailyActivities6.shift();
// console.log('remove the first element by using shift()');
// // console.log(removedElement2); // 'work'
// console.log(dailyActivities6); // ['eat', 'sleep']

// <-- JavaScript Array Methods -->

// let dailyActivities = ['sleep', 'work', 'exercise']
// let newRoutine = ['eat'];
// let ages = [4, 9, 16, 25, 36, 49];

// // sorting elements in the alphabetical order
// dailyActivities.sort();
// console.log(dailyActivities); // ['exercise', 'sleep', 'work']

// //finding the index position of string
// const position = dailyActivities.indexOf('work');
// console.log(position); // 2

// // slicing the array elements
// const newDailyActivities = dailyActivities.slice(1);
// console.log(newDailyActivities); // [ 'sleep', 'work']

// // concatenating two arrays
// const routine = dailyActivities.concat(newRoutine);
// console.log(routine); // ["exercise", "sleep", "work", "eat"]

// // filter an array
// const adults = ages.filter(checkAdult);
// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(adults); // [25, 36, 49]

// //map a function to an array
// const ages_sqrt = ages.map(Math.sqrt)
// console.log(ages_sqrt); // [2, 3, 4, 5, 6, 7]

// <-- Working of JavaScript Arrays-->
// let arr0 = ['h', 'e'];
// let arr1 = arr0;
// arr1.push('l');
// console.log(arr0); // ["h", "e", "l"]
// console.log(arr1); // ["h", "e", "l"]

// let arr = ['h', 'e'];
// arr.name = 'John';
// console.log(arr); // [ 'h', 'e', name: 'John' ]
// console.log(arr.name); // "John"
// console.log(arr['name']); // "John"

// <-- Create a Multidimensional Arrays -->
// let student1 = ['Jack', 24];
// let student2 = ['Sara', 23];
// let student3 = ['Peter', 24];
// // multidimensional array
// let studentsData = [student1, student2, student3];

// <--Access Elements of an Arrays -->
// let x = [
//   ['Jack', 24],
//   ['Sara', 23],
//   ['Peter', 24]
//   ];
//   // access the first item
//   console.log(x[0]); // ["Jack", 24]
//   // access the first item of the first inner array
//   console.log(x[0][0]); // Jack
//   // access the second item of the third inner array
//   console.log(x[2][1]); // 24

// <-- Adding Element to the Outer Array -->
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData.push(['Peter', 24]);
// console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]

// using index notation
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1][2] = 'hello';
// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// // using push()
// let studentsData = [['Jack', 24], ['Sara', 23],];
// studentsData[1].push('hello');
// console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]

// <-- Array's splice() method to add an element at a specified index-->
// let studentsData = [['Jack', 24], ['Sara', 23],];
// // adding element at 1 index
// studentsData.splice(1, 0, ['Peter', 24]);
// console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]

// var a = [];
// a.push(["1", "2"]);
// a.push(["1", "2"]);
// a.push(["1", "2"]);
// for(var i = 0; i < a[i].length; i++) {
// for(var z = 0; z < a.length; z++) {
// console.log(a[z][i]);
// }
// }

// var a = "AlmaBetter"; var result = a.substring(2, 4); document.write(result);
// a = 5 + "9";
// document.write(a);
// console.log(typeof(NaN));  //number
// console.log(NaN === NaN);  //false

// let a= 10;
// let b=2;
// let add=a+b;
// console.log(add);
// let sub=b-a;
// console.log(sub);
// let mul=a*b;
// console.log(mul);
// let div=a/b;
// console.log(div);
// let preInc =++a;
// console.log(preInc);
// let preDec=--a;
// console.log(preDec);

// var test = "Learning Javascript with AlmaBetter";
// console.log(test.length);   // 35
// console.log(test.slice(25,35));  // AlmaBetter
// console.log(test.replace("Javascript", "Web3.0")); //Learning Web3.0 with AlmaBetter
// console.log(test.toUpperCase()); // LEARNING JAVASCRIPT WITH ALMABETTER
// console.log(test.concat("Web3.0 is future")); // Learning Javascript with AlmaBetterWeb3.0 is future

// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.join());
// console.log(myColor.join('+'));

// let strings = ["avengers", "captain america", "ironman", "black panther"];
// console.log(strings.map(string => string.toUpperCase()));

// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const longWords = inputWords.filter(word => word.length > 6);
// console.log(longWords);

// const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
// const arr = heros.map((hero, index) => {
//     return { id: index, hero: hero.name }
// });
// console.log(arr);

// const emojis = [1, 2, 3];
// emojis.map(x => x + 1);
// console.log(emojis);
// emojis.filter(x => x !== 2);
// console.log(emojis);
// emojis.find(x => x !== 2);
// console.log(emojis);
// emojis.reduce((acc, cur) => acc + 1);
// console.log(emojis);
// emojis.splice(1, 2, 1);
// console.log(emojis);

// console.log(emojis.map(num => { 
//     if (typeof num === 'number') return; 
// return num * 2; }));

// console.log([[0, 1], [2, 3]].reduce( (acc, cur) => { return acc.concat(cur); }, [1, 2], ));

// const config = { 
//     languages: [], set language(lang) { 
//         return this.languages.push(lang);
//     }, 
// }; 
// console.log(config.language);

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
// let newList = [1, 2, 3].push(4); 
// console.log(newList.push(5));

// const emojis = ['a', 'b', 'c', 'd'];
// console.log(emojis.push('e'));
// console.log(emojis.splice(0, 2));
// console.log(emojis.length = 0);

// const nums = [1, 2, 3];
// nums.slice(0, 1)
// nums.splice(0, 1)
// nums.unshift(4)
// console.log(nums);

// let num =15;
// let num1= 12;
// // ternary operator exercise
// num<num1 ? console.log(num) : console.log(num1);
// console.log(num1 <= num);

// let ageOfPerson = 20;
// let citizensOfPerson = "India";
// let canVote = (ageOfPerson > 18 && citizensOfPerson == "India") ? true :false; 
// let canVote2 = (canVote == true) ? "your eligible for votes" : "your not eligible for votes";
// console.log(canVote2);

// AND operator truth table = MULTIPLICATION
// {false} && false = {false}
// {false} && true  = {false}
// true  && [false] = [false]
// true  && [true]  = [true]

// OR operator truth table = ADDITION
// false || {false} = {false}
// false || {true}  = {true}
// [true]  || false = [true]
// [true]  || true  = [true]