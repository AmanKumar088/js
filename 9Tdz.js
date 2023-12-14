// TDZ[Temaporal dead zone]:-

//note:-

/*
A let or const variable is said to be in a "temporal dead zone" (TDZ) from the 
start of the block until code execution reachesThis is still in the temporal 
dead zone as its declaration statement has not been reached and terminated. 
*/

//variable indentfiar:-
/*
var 20a(false)[ye condition hai aise likh sakh te hai iske alaava nhi]
var a20(true)
var -2(true)
var -a(true)
var $a(true)
var a-(true)
*/

//Example:-
//(1)
a=9;              //[TDZ Start]
console.log(a);  //[refence]
let(a);         //[TDZ end]