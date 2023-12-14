//(1)
// var obj = {    //object literals

// }

// obj.name = "Nk"       //object add key & value
// console.log(obj)      //nk
// obj.name = "mukesh"   //object modify
// console.log(obj.name) //mukesh


//(2)
// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(x){      // object mai daal sakhte hai function ko
//       return x
//     }
// }

// console.log(obj.firstName);    //nk
// console.log(obj.lastName)      //karan
// console.log(obj.fullName())    // function calling

// var f = obj.fullName;         

// console.log(f(20));          // hello

//(3) 
// var firstName = "nk";
// var lastName = "karan"

// var obj  = {
//     firstName,  // object enhancement is case mai firstName apne aap key and value bann jaata hai
//     lastName,   
//     fullName(){
//         return "hello"
//     },
//     sum(x,y){
//         return x+y
//     }
// }

// console.log(obj.firstName)  //nk
// console.log(obj.fullName()) //karan
// console.log(obj.sum(10,20)) //30



//-----------------------------this:-----refrence to current object--------------------
/*
Inside a function, the value of this depends on how the function is called. Think about 
this as a hidden parameter of a function — just like the parameters declared in the 
function definition, this is a binding that the language creates for you when the function 
body is evaluated.

For a typical function, the value of this is the object that the function is accessed on.
In other words, if the function call is in the form obj.f(), then this refers to obj. 

For example:-
*/

//(4)
/* 
fullName kis se call hoa hai obj.fullName likh rhe the iski jagha this(object use kr sakh te hai)
this.fullName use kr sakh te hai this:-----refrence to current object 
*/
// var obj  ={
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(){
//         return this.firstName + this.lastName  //obj.fullName + obj.lastName  //(this refrence)
//     }
// }

// var f = obj.fullName()

// console.log(f)
//console.log(obj.fullName())


//(5)
// let a = 30;
// function dd(){
//     var a = 67     //local variable
//     console.log(this.a)
// }

// dd()

// console.log(window)   //dont use to node js (window object jo ki var ki taraha gobal object hai jo html page ke liye hai)

//(6)
// var obj  = {
//     firstName:"nk",
//     lastName:"karan",
//     fullName:function(){
//         return this.firstName + this.lastName   // obj.FullName + obj.lastName   //nkkaran
//     }
// }

// var f = obj.fullName
// var g = f();                 // bind,call,apply  (function object)  var f = new Function()
// console.log(g)

// console.log(obj.fullName())


//(7)
var obj  = {
    firstName:"nk",
    lastName:"karan",
    fullName:()=>{
        return this.firstName + this.lastName  //  undefined + undefined = NAN
        
    }
}

console.log(obj.fullName())

