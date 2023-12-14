//1


//Getting property values
// let person = {    
//     name: "Mukul", // By key "name" store value "Mukul"
//     age: 22       // by key "age" store value 22
// };
// console.log(person.name);
// console.log(person['age']);


//2

// an object
// let person = {    
//     name: "Mukul", // By key "name" store value "Mukul"
//     age: 22     // By key "age" store value 22
// };
// // Adding values to the person object
// person.isHappy = 'false';
// console.log(person.isHappy);


//3

// an object
// let person = {    
//     name: "Mukul", // By key "name" store value "Mukul"
//     age: 22     // By key "age" store value 22
// };
// // adding values to the person object
// delete person.age;
// console.log(person.age);


//4


// An object
// let person = {    
//     name: "Mukul", // By key "name" store value "Mukul"
//     age: 22     // By key "age" store value 22
// };
// // Looping using for..in loop
// for( let key in person ) {
//     console.log(key);
//     console.log(person[key]);
// }


//5

// Function definition
// function welcomeMsg(name) {
//     console.log("Hello " + name + " welcome to GeeksforGeeks");
// }

// // creating a variable
// var nameVal = "Admin";

// // calling the function
// welcomeMsg(nameVal);


//6

// function sum() { 
//     var val1 = 2; 
//     var val2 = 3;
//   return val1 + val2;
// }
// document.write(val1);


//7

// console.time() and console.timeEnd() method
// console.time('abc');
// let fun = function(){
// 	console.log('fun is running');
// }
// let fun2 = function(){
// 	console.log('fun2 is running..');
// }
// fun(); // calling fun();
// fun2(); // calling fun2();
// console.timeEnd('abc');


//8

// // console.count() method
// for(let i=0;i<5;i++){
// 	console.count(i);
// }


//9

// function gfg() {
//     var geek = Boolean(1);
//     var geeks = Boolean(0);

//     var string = String(geek)
//     var string2 = String(geeks);

//     console.log(string);
//     console.log(string2);
// }
// gfg();


//10

// function func() {

//     // Original string
//     var a = true;

//     var value = Number(a);
//     console.log(value);
// }
// func();


//11

// var monthNumber = 14;

// if (monthNumber < 1 || monthNumber > 12) {

// 	// Assigning monthNumber NaN as
// 	// month number is not valid
// 	monthNumber = Number.NaN;

// 	console.log("Month number should be"
// 				+ " between 1 and 12");
// }
// else {
// 	console.log(monthNumber);
// }


//12

// console.log(5 + NaN);


//13(--------------------------------SKIPPED--------------------------------)

// a = parseInt("100");
// console.log('parseInt("100") = ' +
// a);

// // It returns a Integer until
// // it encounters Not a Number character
// b = parseInt("2018@geeksforgeeks");
// console.log('parseInt("2018@geeksforgeeks") = ' +
// b);

// // It returns NaN on Non numeral character
// c = parseInt("geeksforgeeks@2018");
// console.log('parseInt("geeksforgeeks@2018") = ' +
// c);

// // It returns Integer value of a Floating point Number
// d = parseInt("3.14");
// console.log('parseInt("3.14") = ' + d);

// // It returns only first Number it encounters
// e = parseInt("21 7 2018");
// console.log('parseInt("21 7 2018") = ' +
// e);


//14(--------------------------------SKIPPED--------------------------------)

// // Base 10
// a = parseInt("100",10);
// console.log('parseInt("100",10) = ' +
// a);

// // Base 8
// b = parseInt("8",8);
// console.log('parseInt("8",8) = ' +
// b);

// // Base 8
// c = parseInt("15",8);
// console.log('parseInt("15",8) = ' +
// c);

// // Base 16
// d = parseInt("16",16);
// console.log('parseInt("16",16) = ' +
// d);

// // Leading and trailing spaces are ignored
// // in parseInt() function
// e = parseInt(" 100 ");
// console.log('parseInt(" 100 ") = ' +
// e);

// // Base 16(hexadecimal)
// f = parseInt("0x16");
// console.log('parseInt("0x16") = ' +
// f);


//15


// // JavaScript to illustrate toString() method
// function func() {

//     // Original array
//     var arr = ["Geeks", "for", "Geeks"];

//     // Creating a string
//     var str = arr.toString();
//     console.log(str);
// }
// func();




// var arr=["aman","vinay","yash"]
// var a=arr[0]
// console.log(a)

//3
// var x = 10;
// function createFunction1() {
//   const x = 20;
//   return new Function("return x;"); // this `x` refers to global `x`
// }

// function createFunction2() {
//   const x = 20;
//   function f(){
//     return x; // this `x` refers to the local `x` above
//   }
//   return f;
// }

// const f1 = createFunction1();
// console.log(f1()); 
// const f2 = createFunction2();
// console.log(f2()); 




//4
// const func1 = function() {};

// const object = {
//   func2: function() {}
// };

// console.log(func1.name);
// // Expected output: "func1"

// console.log(object.func2.name);




