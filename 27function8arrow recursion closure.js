//--------------------------------function closure-----------------------------

/*
A closure is the combination of a function bundled together (enclosed) with references
 to its surrounding state (the lexical environment). In other words, a closure gives 
 you access to an outer function's scope from an inner function. In JavaScript, closures
 are created every time a function is created, at function creation time.
*/   

//--------------------------------syntax---------------------------
// function outer(){       // outer function
//     var x = 2;          // lexcial environment
//     function inner(){   // inner function
//         var y =3;
//     }
// }

//(1)
// var x = function(){       //without function name is anonymous function
//     console.log("hello")
// }

//(2)
// var out = (function(){
//             var x = 1
//             return function(){
//                 return x=x+1
//             }
//     })()

// var x = out()
// var y = out()
// var z = out()
// console.log(x,y,z)



//-----------------------------Arrow function---------------------------

/*An arrow function expression is a compact alternative to a traditional 
function expression, with some semantic differences and deliberate limitations in usage:
*/


//(1)
// function disp(){
//     console.log("hello")
// }

//(2)
// const fun = function disp(){  //Expression function

// }

//(3)

// const f = function(){

// }


//(4)

// const d = ()=>{
// console.log("hello")
// }

// d()

// const  d = ()=>{
// }

//(5)
// const gt = (a,b)=>{
//     return a+b
// }

// console.log(gt(10,20))

//(6)
// const  gt = (a,b)=>a+b

// console.log(gt(10,20))


//-----------------------------------**recursion function------------------------------   

/* 
The act of a function calling itself, recursion is used to solve problems that contain
smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion)
or a recursive case (resumes recursion).
*/

//(7)
// function disp(a){
//         if(a==3){
//             return a
//         }
//         console.log("hello")
// }

// var a = disp(1);  // hello
// var b = disp(2)   // hello
// var c = disp(3)
// console.log(a,b,c)


//(8)
// function sum(a,b){
//     kk(10,20)
//     return a+b
// }

// function kk(a,b){
//    var d =  sum(a,b)
//    console.log(d)
// }

// sum(10,20)


//(9)
// function dd(a){
//     console.log("hello")
//     if(a == 1){
//         return
//     }
//     dd(a-1)
// }

// dd(10)


//parctice Qusetion:-

// 1 copy , 1 pen , 2 copy , 2 pen , 3copy , 3pen , 4 copy
// var x= fun()
// function fun(){
//     var i = 1;
//     while(i){
//         console.log(i+ 'copy')      
//         if(i==4){
//             return;
//         }
//         console.log(i+ 'pen')
//         i++
//     }
//     console.log("hello world")
// }
















