//----------------------------------------------------------clearTimeout--------------------------------------------------

// (1)

// var age = 19
// var a = 6;
// var f= setTimeout(()=>{              //setTimeout background task
//     a = 12;
//     console.log(a);
// },5000)

// console.log(a);

// if(age >=18){
//     clearTimeout(f)               //agar condition ture hoo jaye gi clearTimeout stop ho jaye ga
// }


//(2)

// for(var i = 0; i< 9; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }                                //var global 9,9,9,9,9,9,9,9

// (3)

// var i =7
// setTimeout(()=>{
//     console.log(i)
// },0)

// console.log("hello")

//(4)
// for(let i = 0; i< 9; i++){      
//         setTimeout(()=>{
//             console.log(i)         //let local scop 0,1,2,3,4,5,6,7,8,
//         },1000)
//     }


//----------------------------------------------------setInterval [repeat hota rhe ta hai mai]----------------------------------------------------


// The setInterval() method, offered on the Window and Worker interfaces, repeatedly calls a function or executes a code snippet, with a fixed time
// delay between each call.

//(5)
// setInterval(()=>{
//     console.log("Counter Karo Na")
// },1000)


//(6)

// var i = 10

// var f = setInterval(()=>{
//     console.log(i);
//     i--;
//     if(i == 0){
//         clearInterval(f)
//     }
// },1000)



// (7)

// const friend1  = (name,time)=>{
//     console.log(`${name} tum kaise ho`)                                               
//         friend2(function(){ 
//             console.log(`Hi i am ${name} mai theek hoo`)
//         },time)
// }


// const friend2 = (res,time)=>{
//     setTimeout(res,time)
// }


// friend1("kunal",2000)
// friend1("rakesh",5000)
// friend1("rahul",1000)
// friend1("nandu",700)
// friend1("fool kumar",9000)
// friend1("dhool kumar",12000)

//--------------------------------------------------------------- Object assign qustion-----------------------------------------------------

//(8)

// var obj = {
//     a:10
// }

// var f = Object.assign(obj)  //var f=obj
// f.d=90                          
// console.log(obj)








