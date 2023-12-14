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


(12)  forEach()       :- argument mai function pass hota joki call back function hota hai , three perameter pass hote hai (value,position,Array), return nhi deta hai undifined  
(13)  map()           :- argument mai functon pass hota hai , function ke andar satement mai return krta hai jo ek variable mai store kr leta hai , call back function pass hota hai 
(14)  filter()        :- argument mai functon pass hota hai,return mai Array krta hai boolean mai ture & false ,  three perameter pass hote hai (value,position,Array)  
(15)  every()         :-    
(16)  findIndex()     :-   
(17)  find()          :-  
(18)  reduce()        :-   
(19)  reduceRight()   :-    
(20)  fill()          :-   

*/



//(1) foeEach()


// var arr = [10,20,30,40,50,12]   


// var f = arr.forEach((value,position,array)=>{                 
//     console.log(`${value} ${position} ${array}`) 
// })

// console.log(f)



// (2) map() 


// var arr = [
//     {name:"mukesh",num:3},
//     {name:"Pinkesh",num:2},
//     {name:"Jono",num:12},
//     {name:"Pono",num:23},
//     {name:"Khono",num:25}
// ]
// var f = arr.map(function(x,y,z){
//     if(y <=2)
//         x.age = x.num + 20
//     return x
// })
// console.log(f);


// (3) filter()

// var arr = [10,20,30,40,56]
// var f = arr.filter((x,y,z)=>{
//     return x > 30                        //return mai humasha boolean mai ture and false mai return kr rega
// })
 
// console.log(f)



// (4) filter()


// var arr = ["Banana","Apple","App","Kela","Akela","Khao Kela","Marunga Akela","Jaunga Akela","Kela Zebra"]
// var str = "k"

// var f = arr.filter((value)=>{
//     return value.toLowerCase().includes(str.toLowerCase())
// })


// console.log(f)























