//---------------Array litrenals[colletion of any type data]:-object mutable--------------

//spacial array (for of loop)

// [] :-    Array,oparetor

//New Arry {dynamic Memory}

//dynamic memory:- runtime code length 

//static:- runtime code length is not change


//Array    [type of arr] // object

//(1)
var a = 10
var b = 20
console.log(a)  // 10  

var c = [10,20,30,40]
var a = [10]
console.log(c)  // [10,20,30,40]
console.log(a);// [10]

//(2)
// var arr = new Array()
// var arr = [10,"hello",20.5,true,{},new Array(),new String(),function(){},[10,30]]//(any type data)

//(3)
var arr = [10,20,30,40]
console.log(typeof arr) // Array

//(4)
var nahiHa = [10,20,40]
console.log(typeof nahiHa)
nahiHa = "Welcome"

console.log(typeof nahiHa) // strin

var nahiHa = [10,20,40]
console.log(nahiHa[0]);  // 10

console.log(nahiHa[1]) // [20]

//(5)
var len = nahiHa.length
console.log(len) // 3

//(6)
var arr = [10,20,30,40,"Welcome",true]
var b = arr[4]

console.log(b); // [welcome]

var f= arr[arr.length-1];
console.log(f); //  true

//(7)
var arr = [10,20,30,40,"Welcome",true]
console.log(arr) //ouput [10,20,30,40,"welcome",true]
arr[1] = 90     //postion change
console.log(arr) //output [10,90,30,40,"welcome",true]

//(8)
var arr = [10,[40,60],20,30,40,"Welcome",true]

var a = arr[1];
var netr = a[0]
console.log(netr) //40

//(9)
var arr = [10,20,30,40,"Welcome",true]

var f = arr[80]
console.log(f) //undefined

//(10)
var arr = [10,20,30,40]

arr[80] = "hello";
console.log(arr) //[10,20,30,40,<76 empty item>,hello]

//(11)
var arr = [10]
var arr1 = [10]

arr = arr1 //false
console.log(arr == arr1)//true

//(12)
var a = 5
var b = a
b = 90
console.log(`value of ${b}`)  // 90
console.log(`value of ${a}`)  // 5



//(13)
 var a = [10,20,30]
 let b = a
 b[2] = 90
 console.log(a) //[10,20,30]
console.log(b) //[10,90,30]

//(14)
const a = 5
a = 90
console.log(a) //90

//(15)
const arr = [10,20]
arr[0] = 90
console.log(arr); // [90,20]






















