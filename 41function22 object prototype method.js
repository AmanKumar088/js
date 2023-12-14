// var obj = {}
// var obj = new Object()

/*
in :- operator hai jo bata ta hai ki keys hai ya nhi check kr rega 

-----------------------------------------static method in object-------------------------------------------------

(1) creat()          :- New object creat kr dega Same object ko se creat hota hai                                 
(2) Assign()         :- object ka new copy kr deta hai, variable ke ander obj ka reference dega                                    
(3) seal()           :- object ko seal kr dega jis ke ander se data ko Add nhi kr sakhte hai, modify ho jata hai                                   
(4) keys()           :- keys ko variable mai store kr deta hai, Array from mai store kr ta hai                         
(5) values()         :- object ke andar ki value mil jaye gi                     
(6) freeze()         :- new Data Add nhi kr sakhte hai, delete bhi nhi kr sakh te hai                          
(7) entries()        :- map() ki tarah data ko rhakh ta hai ,retrun mai Itreble object kr ta hai                              
(8) Fromentries()    :- Itreble se vaapas se object mai convert kr deta hai , entries ko vaapas se object mai convert krna hoga                                    
(9) set()            :- new ke sath difine krna hota hai,position base par data nhi nikal sakhte hai ,duplicate data nhi rakh sakh te hai , only uniqe data element                                 
(10)hasown()         :- return mai true & false , prototype method hai , object mai bata ta hai ki property hai ya nhi.               



-----------------------------------------Data rakh ne ke liye--------------------------------------------

(1) object{} :- key & value base rakhuga data ko
(2) Array[]  :- data ko position base pase par rakhuga
(3) map()    :- data ko map mai multi dimension from mai rakhuga
(4) set()    :- Array ko utha kr set mai daal dege, set mai data ko position base par nhi nikal sakhte hai, only for loop base par data ko nikal sakhte hai, return mai Itreble object krta hai, set mai only for unique data ko rakh ta hai
0
*/

//  -----------------------------------------static method------------------------------------------------------

// (1) create()

// // var obj = {a:10,b:20,c:30}
// // var f = Object.create(obj)
// // // f.a = 89
// console.log(f.a)
// // // console.log(obj.a)
// // // console.log(obj == f)
// // // console.log(f)
// // f.dd = "hello"
// // console.log(f.c)
// // console.log(obj.dd)



// (2) assign()

// var obj = {a:10,b:20}
// var f = Object.assign(obj)
// f.j =90
// console.log(obj)

// console.log(obj == f)


// (3)seal()

// var obj = {a:10,b:20}
// Object.seal(obj)
// obj.g =78
// console.log(obj.g)


// (4) keys()

// var obj = {sara:"a",kara:"b",chara:"d",lara:"e"}
// Object.keys(obj).forEach(e=>{
//     console.log(e)
// })


// (5) values()

// var obj = {sara:"a",kara:"b",chara:"d",lara:"e"}
// Object.values(obj).forEach(e=>{
//     console.log(e)
// })


// (6) freeze()

// var obj = {a:10,b:20}
// Object.freeze(obj)
// delete obj.a
// console.log(obj.a)

//--------------------0r---------------
//---------freeze ko unfreeze() consept---------

// var obj = {a:10,b:20}
// Object.freeze(obj)
// var f = Object.create(obj)
// f.h = 23
// console.log(f.a)


// (7) seal()

// var obj = {a:10}
// Object.seal(obj)
// delete obj.a
// console.log(obj)


// (8) entries()

// var obj = {a:10,b:20}
// console.log('u' in obj)


// var obj = {
//     a:10,
//     b:20,
//     c:30
// }

// var jana_na_jana = Object.entries(obj)
// console.log(jana_na_jana)
// for(const [a,b] of jana_na_jana){
//     console.log(b)
// }


// (9) fromEntries()

// var g = Object.fromEntries(jana_na_jana)
// console.log(g)


//(10) map()

// var m = new Map([ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ])
// var gika_virus = Object.fromEntries(m)
// console.log(gika_virus)


// (11) set()

// var s = new Set([10,20,40,56,79,79])                       // only unique element
// for(let f of s){
//     console.log(f)
// }


// (12) hasOwnproperty()

// var ajay_gan_man_dhan = {
//     a:10,b:20
// }
// var f = ajay_gan_man_dhan.hasOwnProperty('a')
// console.log(f)







