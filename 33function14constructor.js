// ----------------------------------------------------function constructor------------------------------------------------------------

/* definition:-

The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically,
but suffers from security and similar (but far less significant) performance issues as eval(). However, unlike eval
(which may have access to the local scope), the Function constructor creates functions which execute in the global scope only.

new :- instance create dynamic memory alocate

only use to simple function                                                                                   

Arrow function not a convert constructor

var arr = new Array()           [pridifined construtor calling]

*/  



//(1)
// function display(){
//     console.log(this)          //this current object [refences to call kis se ho rha hai]  
// }

// var f = new display()          // display new instance create  object constructor  
// f.a = 90

// console.log(f.a)

// f.my = function(){
//     console.log("hello world")
// }

// f.my()

// var arr = new Array()           // pridifined construtor calling



// (2)

// var makkan_vs_dukkan_jayenge_samsaan = new String("hello")     // constructor calling [variable name koch bhi rakh sakhte hai]  //new string() pridifined constructor

// //var f = new Function()             //bulit function constructor     



// function MitJayenge(pakan){ 
//     this.d = pakan;                               //this current object refernce to s calling
// } 

// var s = new MitJayenge("Bullet Raja")
// console.log(s.d)                                 // bullet raja




// (3)
// function Pen(){
//     this.color = "red"
// }

// var p1 = new Pen()
// p1.price = 0

// var p2 = new Pen()
// p2.price = 90


// p1 = p2  
// console.log(p1)

// p1.price = 89;
// console.log(p2.price)




// (4)

// function ff(x){
//     x.a = 67
// }

// function gg(){

// }

// var g = new gg()
// g.a = 78;
// ff(g)
// console.log(g.a)
// console.log()




// (5)  person ke prototype method mai add ki value [prototype ki help se]

// function Person(){

// }

// var p = new Person()

// var p1= new Person()

// Person.prototype.a = 90

// console.log(p1.a)

// Person.prototype.fun = function(){
//     return 30
// }

// console.log(p1.fun())



// (6)
/*
The prototype data property of a Function instance is used when the function is used as a constructor with the new operator.
It will become the new object's prototype.
*/

// var str = new String("hello")                

// String.prototype.kk = function(){    //js ka string bulit function jis ke prototype mai humne apne prototype add kiae hai kk function         
//     return "hello"
// }

// var s = "welcome"

// console.log(str.kk())

// console.log(s.kk())














