//---------------------------------Array Function pridifined prototypes method------------------------------------------

/*
(1)  pop()            :- last vaale element ko remove kr deta hai                 
(2)  push()           :- perameter mai number ya koch bhi add krna ho to add ho jayega, last mai ek element ko add kr deta hai  
(3)  isArray()        :- check krta hai ki Array hai ya nhi hai, return mai boolean mai krta hai     
(4)  shift()          :- is mai directly daal de hai os jagh   
(5)  unshift()        :- agar premeter mai "hello" hai to array ki starting mai hello ko daal dega, total number return krta hai     
(6)  at()             :- position bata hai ,(-) mai right side se position bata dega 
(7)  indexOf()        :- position bata hai      
(8)  includes()       :- 30 check kr rega ki Array mai 30 naam ka data hai ya nhi hai, return mai boolean mai krta hai      
(9)  sort()           :- only Array mai string mai use hota hai, Alphabet ke Accoding sort ho jayega, single charchert bhi lega number ko  
(10) entries()        :- Array ko convert kr deta hai, return mai object [Array Itreator]     
(11) copyWithIn()     :- (target,start,end)        


console.log(`${f} ${f}`):- Templeat string


(12)  forEach()        :- argument mai function pass hota joki call back function hota hai , three perameter pass hote hai (value,position,Array), return nhi deta hai undifined  
(13)  map()            :- argument mai functon pass hota hai , function ke andar satement mai return krta hai jo ek variable mai store kr leta hai , call back function pass hota hai 
(14)  filter()         :- argument mai functon pass hota hai,return mai Array krta hai boolean mai ture & false ,  three perameter pass hote hai (value,position,Array) 



(15)  slice()          :- data ko kaat deta hai or nikal sakhte hai
(16)  splice()         :- three argument pass (index,delet,new data add) kr ne ke liye
(17)  fill()           :- perameter mai pass (value,position,) value ke baad jo bhi daal lege data fill ho jayega
(18)  join()           :- array ko string mai convert kr ta hai,jo string mai data hoga usko space ke base par join kr dega       
(19)  some()           :- argument mai call back function pass hota hai, return mai boolean krta hai
(20)  every()          :- call back function pass ,return mai boolean krta hai   
(21)  find()           :- is mai hum condition bhi likh sakh te hai,jaah par condition ture hogi value ko print kr dega , return mai value , agar condition false hogyi to undifined     
(22)  findIndex()      :- jaah par condition ture hogyi value ko print kr dega , return mai Index ki position de dega          
(23)  reduce()         :- function pass hota , total sum bata dega        
(24)  redueceRight()   :- Right side se sum kr dega            
(25)  reverse()        :- back side se print kr dega , return mai variable mai store kr deta hai pura array           
(26)  keys()           :- return mai Itreble object krta hai       
(27)  values()         :- saari vaule ko Itreble object mai kr deta hai       
(28)  flat()           :- perameter mai kit ni baar Array ko remove krna hai, Array ke ander Array ko remove kr deta hai
*/

// (1) slice()

// var arr = [10,20,30,40,50,60]
// // var f = arr.slice(-5,-2)
// var f = arr.slice(1);
// console.log(f)

// (2) splice()

// var arr = [10,20,30,12,34,11]

// arr.splice(1,3,23)                  //(index,delete, new data add)
// console.log(arr)

// (3) splice()


// var arr1 = [10,45,67]
// var arr = [10,20,34,12]

// arr.splice(1,2,...arr1)
// console.log(arr)

// (4) fill()

// var arr = [10,20,34,89,90,67]
// arr.fill(12,1,3)                      //(value,position,position end)
// console.log(arr)


// (5) join()

// var arr = ["installement" ,"dedo","bhai" ,"mere"]
// var f = arr.join(" ");
// console.log(f)


// (6) some()

// var arr = [10,20,40,29,45,22];

// var f = arr.some((value)=>value%23===0)
// console.log(f);


// (7) every()      sigle line satement  

// var arr = [10,20,34,12,13]
// var f = arr.every((value)=>value%2===0)
// console.log(f)


// (8) every()     long type method

// var arr = [10,20,34,12,13]
// var f = arr.every(function(value){
//     return value%2===0
// })
// console.log(f)


// (9) every()

// var arr = [
//     {a:10},
//     {a:90},
//     {a:45},
//     {a:12}
// ]

// console.log(arr.every((value) => value.a%2 === 0))


// (10) find()

// var arr = [10,20,40,20,12,"maara","kaara","jaara","khara","pani","kanu","money"]
// var f = arr.find((val)=>val == "panii")
// console.log(f)


// (11) findIndex()

// var arr = [10,20,34,56]
// var f = arr.findIndex((value)=>value === 34)
// console.log(f)


// (12) reduce()

// var arr = [10,20,30,45,12]
// var receveKaroNa = arr.reduce((total,s)=>{
//     return total+s
// })
// console.log(receveKaroNa)


// (13) reduceRight()

// var arr = [10,20,30,45,12]
// var pakdona = arr.reduceRight((total,s)=>{
//     return total+s
// })
// console.log(pakdona)


// (14) reduce()

// var arr = [10,20,30,45,12,"hello"]
// var ghatao = arr.reduce((total,s)=>{
//     return total - s
// })
// console.log(ghatao)


// (15) reverse()

// var arr = [10,23,67,12,89]

// var ff = arr.reverse()
// console.log(arr)


// (16) keys()

// var arr = [10,20,30,12,56,78]
// var f = arr.keys()
// for(const pakadbhai of f)
//     console.log(pakadbhai)


// (17) values()

// var arr = [10,20,30,12,56,78]
// for(const vola_mera_jhola of arr.values())
//     console.log(vola_mera_jhola)


// (18) flat()

// var arr = [0,1,4,5,6,[[[3,2]]]]
// var f = arr.flat(4)

// console.log(f)



//Example :- copyWithin(target,start,end)

// var arr = [1,2,3,4,5]
// arr.copyWithin(2,0,2)
// console.log(arr)

