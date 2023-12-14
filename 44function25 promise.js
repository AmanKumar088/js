//-------------------------------------------------[satic method]promise object [background task]-----------------------------------------------

//---------------------santax:- var a=new promise()

/*
# promise three types result :-(1) sucess & resolve , (2) fail , (3) pending

# object from

# promise mai function pass hota hai or do perameter pass hote hai resolve & fail

# promise satic method :- promise.resolved

------------------------------static method----------------------------------------------------------


(1) Promise.resolve()      :-The Promise.resolve() static method "resolves" a given value to a Promise. If the value is a promise, that promise is returned; if the value is a thenable, Promise.resolve() will call the then() method with two callbacks it prepared; otherwise the returned promise will be fulfilled with the value.
(2) Promise.reject()       :-The Promise.reject() static method returns a Promise object that is rejected with a given reason.
(3) Promise.race()         :-The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
(4) Promise.all()          :-The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.
(5) Promise.any()          :-The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.
(6) Promise.allSettled()   :-The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.


----------------------------------------prototype method------------------------

(1) then() :-function pass hota hai and do perameter pass hote hai first resolve & second fail promise object ka data nikal ne ke liye then ka use hota , data recive kr ne ke liye bhi hota hai , then promise se call hoga

*/


// (1)

// var p = new Promise()


// var babu_promise = new Promise(function(resolve,failed){
//     var sum = 0;
//     for(var i = 0;i<BigInt(2345678);i++){
//         sum+=i
//     }
//     resolve(sum)

// })

// console.log("A")

// babu_promise.then((res)=>{
//     console.log(res)
// },(error)=>{

// })

// console.log("B")


// (2)

console.log("A")
var age = 16
var vote = new Promise(function (resolve, failed) {
    if (age >= 18) {
        resolve("Vote")
    }
    else {
        failed("Not Vote")
    }
})

vote.then((a) => {           //a resolve  ko difine kr rega
    console.log(a)
},
    (b) => { console.log(b) }   //b fail ko dinfine kr rega
)
console.log("B")




