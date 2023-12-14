// Hoisting:-

//note:-

/*
JavaScript Hoisting refers to the process whereby the interpreter[line by line] 
appears to move the declaration of functions, variables or classes to the top of 
their scope, prior to execution of the code
*/

/*Jitne variable hai classes and fanction decalartion apne scop ke top 
mai move only exation se phele top mai move kr deta hai
*/

//Example:-

//(1)
a = 5;
console.log(a)
var a;//[move to top]

//(2)
var a;//[only decalaration move]
console.log(a)
var a = 5;