
// var a = ()=>{
//     console.log("first")
// }

// a()

// function a(){                   //housting
//     console.log("second")
// }

// a() 


/*
hello world  = >   world hello

*/
// ------------string ka function banaya hai joki splite() jaisa hi function banaya hai joki splite ka hi kaam kr ta hai--------------------------

// function baanChalao(str){
//     let output = "",rev = ""
//     for(let i = str.length-1 ; i>=0 ;i--){
//         rev+=str[i]
//         if(str[i] === " " || i === 0){
//             for(let j=rev.length-1;j>=0;j--)
//                 output+=rev[j]
            
//             rev=""
//             output+=" "
//         }
//     }

//     return output
// }




// var str = baanChalao("hello world welcome Kuchha bhi marunga pitunga")
// console.log(str)



//-------------------------------------------Array prototype method pridifined function------------------------------------------

/*
(1) at()              :-position bata hai ,(-) mai right side se position bata dega 
(2) push()            :-perameter mai number ya koch bhi add krna ho to add ho jayega, last mai ek element ko add kr deta hai
(3) pop()             :-last vaale element ko remove kr deta hai
(4) unshift()         :-agar premeter mai "hello" hai to array ki starting mai hello ko daal dega, total number return krta hai
(5) shift()           :-is mai directly daal de hai os jagh 
(6) isArray()         :-check krta hai ki Array hai ya nhi hai, return mai boolean mai krta hai
(7) includes(30)      :-30 check kr rega ki Array mai 30 naam ka data hai ya nhi hai, return mai boolean mai krta hai
(8) indexof()         :-position bata hai 
(9) copyWithin()      :-(target,start,end)  
(10)sort()            :-only Array mai string mai use hota hai, Alphabet ke Accoding sort ho jayega,single charchert bhi lega number ko
(11)entries()         :-Array ko convert kr deta hai, return mai object [Array Itreator] 
*/


//------------------------------------------------------------Example-------------------------------------------------------------------


//(1) at()

// var arr = [10,20,30,40,50,60]

// var f = arr.at(-2)
// console.log(f)

// var kamchalao = arr[-2];
// console.log(kamchalao)



// (2) push() 

// var arr = [10,20,56]

// var d = arr.push(56)  //d posotion batye ga

// console.log(arr)



// (3) pop()

// var arr = ["hello",true,function(){},()=>{},"diifew",{}]


// var arr = [10,20,30,23]
//arr.pop()                     // remove last element
// console.log(arr)


// (4) shift()

// var arr = ["apple","mango","banana","grapes"]
// var f = arr.shift()
// console.log(f)
// console.log(arr)


// (5) isArray()

// var arr  = [20,30,40,56,78];

// var f = Array.isArray(arr);  // static 
// console.log(f);

// (6) includes()

// var arr = [10,20,30,56,45]
// var f = arr.includes(78)
// console.log(f)

// (7) indexOf()

// var arr = [10,20,45,12,45]

// var f = arr.indexOf(45,3)
// console.log(f)


// (8) copyWithin()

// var arr = [10,20,56,12,45,13,5]


// var f = arr.copyWithin(2,3,5)
// console.log(f)


//-------------------Example----------------------

// const array1 = ['a', 'b', 'c','d', 'e'];

// // Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
// // Expected output: Array ["d", "b", "c", "d", "e"]

// // Copy to index 1 all elements from index 3 to the end
// console.log(array1.copyWithin(1, 3));
// // Expected output: Array ["d", "d", "e", "d", "e"]


// (9) sort()


// var arr = ["manogo","apple","kumar","next","rahu","ketu","sani"]
// arr.sort()

// console.log(arr)


// var arr = [1,2,5,3]
// arr.sort()
// console.log(arr)


// (10) entries()    convert to etreble object 

// var arr = [10,20,45,12,34]
// var f = arr.entries()
// console.log(f.next().value)

// for(let [x,y] of f){
//     console.log(x,y) 
// }











