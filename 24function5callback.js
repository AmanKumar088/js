/*--------------------------------constructor-----------------------------------------

The constructor method is a special method of a class for creating and initializing an
 object instance(line by line) of that class.
 
*/
//(1)
// var abc = function(a,b){
//     console.log(a,b)
// }

// var a = 10 ,b = 20;
// abc(a,b) 

//---------------------------- method 1(peramiter arguments data nikal ne ka type)-------

//(2)
// function sum(a){
//     var s = 0;
//     for(let x of a)
//         s+=x
//     console.log(s)
// }
// sum([10,20,30,40,50,67,89,12,34])

//----------------------------- method 2-------------------------------------------------

//(3)
// function sum(){
//   var s = 0;
//   for(let x of arguments){
//     s+=x;
//   }

//   console.log(s);
// }
// sum(10,20,30,40,50,67,89,12,34)

//------------------------------method 3------------------------------------

//(4)
// function sum(y,...arr){
//   var s = 0;
//   for(let x of arr){
//     s+=x;
//   }
//   console.log(s);
// }
// sum(10,20,30,40,50,67,89,12,34)


//(5)
// function f(x){
//     x+=1
// }
// function g(x){
//     x.value= x.value*5
// }
// var a;
// var b =1
// var c = {value:2}
// var d = c
// f(a)
// f(b)
// g(d)
// console.log(a,b,c.value,d.value); // undefined,1,10,10


//---------------------------------callback-------------------------------------------

/*A callback function is a function passed into another function as 
an argument, which is then invoked inside the outer function to 
complete some kind of routine or action*/

//(6)
// function foo(x){
//     x(10,20)
// }

// function m(a,b){
//     console.log(a+b)
// }
// var f = m;
// foo(f)
// foo(m)

//(7)
// function foo(bar){
//     bar(10,20)
// }

// foo(function(a,b){
//     var x = a+b
//     console.log(x)
// })

//(8)
// function counter(){
//     var x = 0
//     x = x+1
//     console.log(x)

// }
// counter()
// counter()
// counter()
























