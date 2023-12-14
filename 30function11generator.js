//(1)closuer Example:-
// var counter = (function(){     //self invoking function second name:-Immediately Invoked Function Expression (IIFE)
//     var myCounter = 0;        //lexical enveroment
//     function changeBy(val){  
//         myCounter+=val        //myConuter=myCounter+val
//     }
//     return {                    //return mai object return kr rha hai 
//         increment:function(){
//             changeBy(1)
//         },
//         decrement:function(){
//             changeBy(-1)
//         },
//         value:function(){
//             return myCounter
//         }
//     }
// })()

// console.log(counter.value())  // 0
// counter.increment()
// counter.increment()
// console.log(counter.value())   // 2
// counter.decrement()
// console.log(counter.value())  // 1
// //counter.changeBy(2)                      //TypeError: counter.changeBy is not a function
// console.log(counter.value())  // 1





//(2)
// function A(x){
//     function B(y){
//         function C(z){
//             console.log(x+y+z)
//         }
//         C(3)
//     }
//     B(2)
// }
// A(1)



//(3)
// function xyz(z){
//     return {
//         dd(){
//             return z+5
//         },
//         kk(){
//             return z*5
//         }
//     }
// }


// const {dd , kk} =  xyz(10)    //destructuring

// console.log(dd())

// const f = xyz(10)
// f.dd()



//------------------------------------GENERATOR FUNCTION*--------------------------------

//The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

// [Interable Object]  
//function* () convert interable object
//yield operator 1 by 1 
//next() predifined object 


//(4)
// function* display(){               //convert to Interable object
//     yield "hello"                 //yield operator use only generator function step to step 
//     yield "world"                //one time use
//     yield "kumar"
// }

// var f = display()

// console.log(f.next().value)         // next predifined object
// console.log(f.next().value) 
// console.log(f.next().value)
// console.log(f.next().value)

//Example:-
// function* dd(){
//     yield "hello"
// }
// console.log(dd().next().value)


//(5)
// function* generator(i){
//     yield i;
//     yield i+10
// }

// const gen = generator(20)        // GeneratorObject
// console.log(gen.next().value)   //20
// console.log(gen.next().value)  //30



//(6)
// function* generator(i){
//     yield i;
//     yield i+10
//    return i
// }


// for(const val of generator(10)){
//     console.log(val)
// }


//(7)
// const abc =  ()=>{   //dont use to arrow function mai generator function ka use nhi kr sakh te hai only for simple function to generator
//     yield 2
// }

// console.log(abc.next().value) //SyntaxError: Unexpected number

//(8)
// function* dd(){
//     yield* [10,20,30,40]
// }

// for(const d of dd()){
// console.log(d)
// }









