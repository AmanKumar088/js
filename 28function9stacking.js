//(1)
// function asd(arr){
//     var dataArr = []
//     for(let i = 0; i< arr.length;i++){
//         dataArr[i] = sqrt(arr[i]);
//     }
//     return dataArr
// }

// var sqrt = (value)=>value**2 //single statement mai return 
// var arr = [2,3,5,1,7]
// var myArr = asd(arr);
// console.log(myArr)


//(2)
// const f = a(20)     //ReferenceError: Cannot access 'a' before initialization only for delaraction move hoti hai
// console.log(f);

// const a = (b)=>b*2


//const a = (b)=>b*2
// const f = a(20)
// console.log(f);

//(3)
// const a = {}           //object literals
// const b = {key:'b'}  //object
// const c = {key:'c'}  //object
// a[b] = 123          //a["object"]
// a[c] = 456         //a["object"]
// console.log(a[b]); //456

//(4)
// var obj = {name:"mukesh"}
// var n = "name"
// obj[n] = "rahul"



//(5)
// let person = {name:'nk'}  // mutable
// const mem = [person]     // [{name:"nk"}]
// person.name = "m"
// console.log(mem) 


// var a = null

// console.log(typeof a );



//--------------------------stacking:- last in frist out-----------------------------------------


//(6)
// function xyz(n){
//     if(n < 0){
//         return
//     }

//     console.log(`start ${n}`)  //start 3,start2,start 1 ,start 0
//     xyz(n-1)
//     console.log(`end ${n}`)   //end 2, end 1, end 0,

// }

// xyz(3)




//(7)
// function fact(n){
//     if(n==1){
//         return  1
//         }

//     return n*fact(n-1) 
// }

// var d = fact(3)
// console.log(d);











