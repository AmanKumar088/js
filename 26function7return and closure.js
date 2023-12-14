//----------------------------------------------return-------------------------------------------------------

//The return statement ends function execution and specifies a value to be returned to the function caller.

//(1) function return type
function display(a,b){
    var sum = a+b
    return {
        d:90,
        b:40,
        c:[10,20,40],
        s:sum
    }
}  

var f = display(10,20)
console.log(f.s)

//Example:-

function getRectArea(width, height) {
    if (width > 0 && height > 0) {
      return width * height;
    }
    return 0;
  }
  
  console.log(getRectArea(3, 4));  // Expected output: 12
  
  console.log(getRectArea(-3, 4)); // Expected output: 0


//-----------------------------------------------function closure------------------------------------------

//The binding which defines the scope of execution. In JavaScript, functions create a closure context.

//(2)
// function disp(){
//     var x = 0;           // lexical enviornment
//     return function(){
//         return x=x+1
//     }
// }

// var f = disp()

// console.log(f())  //1
// console.log(f())  //2
// console.log(f())  //3

 

//(3)
// function foo(x){

//     function bar(y){
//         return x+y
//     }
//     return bar
// }

//  var d = foo(10)
//  var g = d(4)
//  console.log(g)

// var total = foo(10)(3)
// console.log(total)









