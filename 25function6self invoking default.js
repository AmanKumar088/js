//--------------------------------self invoking function--------------------------------
/*
A JavaScript function that runs as soon as it is defined. Also known as an IIFE 
(Immediately Invoked Function Expression)
*/

//(1)
// (function(){ 
//     console.log("hello")
// })();

// (function(){
//     console.log("world")
// })();


//(2)

// (function(...arr){
//     var s = 0;
//     for(i of arr)
//         s+=i
//     console.log(s)
// })(10,20,30)


// example 1

// function reverseStr(str){
//     var output="";
//     for(let i = str.length-1;i>=0;i--){
//         output+=str[i]
//     }
//     console.log(output)
// }

// reverseStr("welcome")
// reverseStr("hello")


// example 2


// function countStr(str,chars){
//     let counter = 0;
//     for(let i = 0;i<str.length;i++)
//         str[i]===chars?counter++:null
//     console.log(counter)
// }

// countStr("welcome hello","p")


//--------------------------------------default arguments--------------------------------

//(3)
// function  sum(a=0,b=0){
//     var c = a+b;
//     console.log(c);
// }

// sum(10,20)
// sum()
// sum(14)

//(4) debugger:- use to output step to step by use to node inspect file name (only for node js use)
 
// debugger
// console.log("hello")
// for(let i = 1;i<=3;i++){
//     console.log(i)
// }
// console.log("world")




