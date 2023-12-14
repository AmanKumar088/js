//-----------------------------function with arguments example-------------------------------

//----------------------(peramiter list pass)-------()group operator----------------------
/*argument:-
(The value of arguments is an array-like object corresponding to the arguments 
passed to a function)*/

//(1)
// var str ="hello"
// function display(str)
// { 
// console.log(str)
// }
// display(str)
// console.log(str)

//(2)  
// function sum(a,b,c){
//     var x = a+b+c;
//     console.log(x);
// }

// sum(10,20,40) //70
// sum(23,89) 
// sum(100021,123145) 

//(3)
// function foo(x) {
//     var sum = 0
//     for (let y of x) {
//         sum-=y   // sum = sum - y
//     }
//     console.log(sum)
// }
// foo([12])


//(4)
// function foo(arr){
//     arr[0] = 78;
//     arr[1] = 67;
//     delete arr[3]
// }

// var arr = [10,20,40,23];
// foo(arr)
// console.log(arr)


//(5)
// function foo(a,b,c){
//     a++
//     b = "new string"
//     c["key"] = "new value"
// }

// var a = 1,b= "old string",c={key:"old value"}
// foo(a,b,c)
// console.log(a,b,c);  //1, old string, {key:"new value"}

//-------------------------pratice------------------

//(1)
// (function f() {
//     if (Object.hasOwn(f, "arguments")) {
//       console.log(
//         "arguments is an own property with descriptor",
//         Object.getOwnPropertyDescriptor(f, "arguments")
//       );
//     } else {
//       console.log(
//         "f doesn't have an own property named arguments. Trying to get f.[[Prototype]].arguments"
//       );
//       console.log(
//         Object.getOwnPropertyDescriptor(
//           Object.getPrototypeOf(f),
//           "arguments"
//         ).get.call(f)
//       );
//     }
//   })();


















