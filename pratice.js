// let x = 5;
// let y = 3;

// addition
// console.log('x + y = ', x + y);  // 8

// subtraction
//console.log('x - y = ', x - y);  // 2

// multiplication
//console.log('x * y = ', x * y);  // 15

// division
// console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
// console.log('x % y = ', x % y);   // 2

// increment
// console.log('++x = ', ++x); // x is now 6
// console.log('x++ = ', x++); // prints 6 and then increased to 7
// console.log('x = ', x);     // 7

// decrement
// console.log('--x = ', --x); // x is now 6
// console.log('x-- = ', x--); // prints 6 and then decreased to 5
// console.log('x = ', x);     // 5

//exponentiation
// console.log('x ** y =', x ** y);


//Relation
// {
// let a=10;
// let b=20;
 
// console.log("Greater : ",a>b);  
// console.log("Lesser  : ",a<b);
// console.log("Greater Than Equal  : ",a>=b);
// console.log("Greater Than Equal  : ",a<=b);
// } 

//(Exatra Example)[1]

// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

//(2)

// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
//   }

  //(3)

//   const areEqualInUpperCase = (str1, str2) =>
//   str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase();

// areEqualInUpperCase("ß", "ss"); // true; should be false
// areEqualInLowerCase("ı", "I"); // false; should be true

//(4)

// const areEqual = (str1, str2, locale = "en-US") =>
//   str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

// areEqual("ß", "ss", "de"); // false
// areEqual("1", "I", "tr"); // true

//(5)

// const strPrim = "foo"; // A literal is a string primitive
// const strPrim2 = String(1); // Coerced into the string primitive "1"
// const strPrim3 = String(true); // Coerced into the string primitive "true"
// const strObj = new String(strPrim); // String with new returns a string wrapper object.

// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"

//(6)

// const s1 = "2 + 2"; // creates a string primitive
// const s2 = new String("2 + 2"); // creates a String object
// console.log(eval(s1)); // returns the number 4
// console.log(eval(s2)); // returns the string "2 + 2"

//(7)
/*
var a="hello"
var b=2;
var c=a*b;
console.log(c)//NAN[NOT A NUMBER]
console.log(type of a*b)//number[Data type bata hai number litrenal]reparsent fixed value
*/

//---------------------function argument pratice------------------------
//(1)
// var str="hello"
// function display(str){
//   console.log(str)//hello
// }
// display(str)
// console.log(str) //hello

//(2)
// function sum(a,b){
//   var x=a+b
//   console.log(x)
// }
// sum(20,40)
// sum(60,70)
// sum(40000087546725,735054260)

//(3)
// // function arr(x){
//   var sum=0
// //   for(let a of x){
//   sum+=a
// //   }
// //   console.log(sum)
// // }
// // arr([10,20,40000754785952])



