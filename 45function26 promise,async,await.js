/*
--------------------------------------------------------------promise()---------------------------------------

(1) async function()  :- background mai parfrom karta hai , return mai promise object krta hai , ek resolve perameter hota 
(2) await             :- jaha par Async function ke saath hi kaam kr ta hai await , do async function ke liye hold ,       
(3) then()            :- The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
(4) resolve()         :-    
(5) promise.all()     :- 
*/



// (1)

// var p = new Promise(function(){

// })

// var p = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve("Ho gaya")
//         },5000)
// })

// console.log("A")
// console.log(p)
// console.log("B")


// (2)---------------------------------------------async function--------------------------------------------

// async function display(a,b){
//     return a+b
// }

// console.log("A")
// var p = display(10,20)
// p.then((x)=>{
// console.log(x)
// })
// console.log("B")




// (3)-----------------------------------------------async function & await-----------------------------------------

// async function sum(x,y){
//     return x + y
// }

// async function disp(){
//     return "kumar"
// }

// async  function display(){
//     const f =  await disp()
//     return "hello "+f
  
   
// }

// var g = await display()      //only for node js error aa jayega browser pe
// console.log(g)


//--------------------------------------------Arrow function mai santax kaise hoga asyns ka----------------------------------

//santax

// const f = async ()=>{

// }




// (4)


// var arr = [10,20,40,67,89]
// async function sum(x,y){
//     return x+y
// }
// let data = 0
// arr.forEach(async (val)=>{
//   data =  await sum(val,data)
// })
// console.log(data)



// (5)

// var arr = [10,20,40,67,89]


// var data = arr.map(async (val)=>{
//   return  val+5
// })

// Promise.all(data.slice(0,2)).then((res)=>{
//     console.log(res)
// })



// (6)

// var arr = [10,20,40,67,89]
// async function sum(x,y){
//     return x+y
// }
// let data =[]
// arr.forEach(async (val,index)=>{
//   data[index] =   sum(val,2)
// })

// Promise.all(data).then(ele=>{
//     console.log(ele.reduce((a,b)=>a+b))
// })


// (7)

// var f = Promise.resolve("hello world")
// var p = new Promise(function(resolve){
 
//         resolve("hello world")
   
// })
// var p1= new Promise(function(resolve){
//     setTimeout(()=>{
//         resolve("hello kumar")
//     },2000)
// })
 
// var f = Promise.all([p1,p])
// f.then(ele=>{
//     console.log(ele)
// })