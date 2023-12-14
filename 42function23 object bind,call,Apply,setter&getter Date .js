//-----------------------------------------------------bind,call ,apply---------------------------------------------

/*
(1) bind()    :-object ko bind kr deta hai or variable mai store kr deta hai,peramenter bhi pass kr sakh te hai function mai (obj,20,30) 20 ,30 peramenter hai, return mai function return krta hai
(2) call()    :-agar function ko return nhi krna hai to call ka use kr lege , only function call krta hai , return mai variable mai store kr deta hai
(3) Apply()   :-Apply ke peramenter mai pass krne ke liye Array from mai kr rege (obj,[20,30]) 
(4) set & get :-peroperty ke base par call kr sakh te hai , obj.a is se function call ho jayega
(5) date      :-litrals ka from nhi hai , santax var a= new date()
*/

// (1) bind()

//var fun = new Function()


// var obj = {
//     firstName:"Nk",
//     lastName:"Jnk", 
//     fun:function(a,b){
//         return this.firstName + " "+this.middleName+" "+this.lastName+" "+a+" "+b
//     }
// }

// // var f = obj.fun()
// // console.log(f)

// var kk = {
//     firstName:"Mai",
//     middleName:"College",
//     lastName:"Jaunga"
// }

// var foo = obj.fun.bind(kk,"Corona","Virus");
// var g = foo

// var j = g()
// console.log(j)



// (2)  call()

// var obj = {
//     firstName:"babu",
//     middleName:"tum",
//     lastName:"kaise ho",
//     fun:function(a,b){
//         console.log(a,b)
//         return this.firstName + " "+this.middleName+" "+this.lastName
//     }
// }


// var kk ={
//     firstName:"Babuu",
//     middleName:"tum",
//     lastName:"kaha ho"
// }

// var f = obj.fun.call(kk,20,30)
// console.log(f)
//bind , call ,apply





// (3) Apply()

// var obj = {
//     firstName:"babu",
//     middleName:"tum",
//     lastName:"kaise ho",
//     fun:function(a,b){
//         console.log(a,b)
//         return this.firstName + " "+this.middleName+" "+this.lastName
//     }
// }


// var kk ={
//     firstName:"Babuu",
//     middleName:"tum",
//     lastName:"kaha ho"
// }

// var f = obj.fun.apply(kk,[20,30])
// console.log(f)




//-------------------------------------------------------------setter and getter set get------------------------------------------------------

// set & get   :- peroperty ke base par call kr sakh te hai , obj.a is se function call ho jayega


// (4) set()  &   get()

// var g = {
//     d:90
// }
// g.d = 90

// var obj = {
//     set name(per_name){
//         this.per_name = per_name;
//     },
//     get myname(){
//         return this.per_name
//     }
// }

// obj.name = "Pora Hosa"
// console.log(obj.myname)


//number,map,array,set,function,string,boolean,date
// var a = 20.5467
// console.log(a.toFixed(2))



// (5) Date()

// setInterval(()=>{
//     var d = new Date()
//     console.log(d)
//     console.log(d.getFullYear())
//     console.log(d.getSeconds())
// },1000)



