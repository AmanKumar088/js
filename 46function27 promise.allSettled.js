// (1) allsettled()  :- kitne solve & reject hoye hai bata hai 

// var p = Promise.resolve("Solved")
// var p1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         reject("Rejected")
//     },2000)
// })

// var p2 = new Promise(function(){
//     for(;;){

//     }
// })


// Promise.allSettled([p,p1]).then(res=>{
//     res.forEach(e=>{
//         console.log(e.status)
//     })
// })



// (2)


// async function ff(){
//     return "hello"
// }
// async function dd(){
//     return "world"
// }

// var f = Promise.resolve(ff())
// f.then(ele=>{
//     console.log(ele)
// })
// Promise.allSettled([ff(),dd()]).then(ele=>{
//     console.log(ele.status)
// })