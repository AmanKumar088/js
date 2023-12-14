//-----------------------Topic:-object (mutable)----------------------

// var pen;

// pen = {}   // object literals

//var pen = new Object()

// var pen = ["hello",20,30]

//Example:-

//(1)

// var car = {
//     brand_name:"maruti suzuki", // left side key and right side value
//     price:1000000,
//     color:"black",
//     drive:"3 wheel",
// }

//(2)
// var television = {
//     brand:"lg",
//     model_no:"1234567"
// }

//(3)

// var person = {
//     name:"Abhishek",
//     height:165,
//     unit:"cm",
//     pincode:["110089","110034","110023"],
//     address:{
//         house_no:125,landmark:"Sansad Bhawan"
//     }
// }

//(4)

// var person1 = {
//     name:"one"
// }
// var person2 = {
//     name:"two"
// }
// console.log(person1 == person2)  // false

//(5)

// var a = 10
// var arr = [{name:"one"},{name:"two"}]

// var x = arr[1];
// console.log(x);

// arr[1] = 90;
// console.log(x);
// console.log(arr[1])



//--------------------------- Topic:- array [] and object {}  mutable object----------

//(1)

// var person= {
//     name:"Abhishek",
//     height:165,
//     unit:"cm",
//     pincode:["110089","110034","110023"],
//     address:{
//         house_no:125,landmark:"Sansad Bhawan"
//     }
// }

//(2)

// var vegi = {
//     productName:"Potato",unit:"1 kg",price:8
// }

//console.log("hello")

//console.log(vegi.productName)
// var a = vegi.productName  // object ka data variable mai store 
// console.log(a) //potato

//(3)

// var person ={
//     name:"Abhishek",
//     height:165,
//     unit:"cm",
//     pincode:["110089","110034","110023"],
//     address:{
//         house_no:125,landmark:"Sansad Bhawan"
//     }
// }
// var a = person.pincode[0];
// console.log(a); //110089

// var b = person.address.landmark
// console.log(b) //sansad Bhawan

// var n = person['name']

// console.log(n)

// console.log(person)

//(4)

// var person = {
//     name:"Abhishek",
//     height:165,
//     unit:"cm",
//     pincode:["110089","110034","110023"],
//     address:{
//         house_no:125,landmark:"Sansad Bhawan"
//     }
// }

// var a = person['landmark']
// console.log(a)


// topic:- update

//(1)

// var person = {firstName:"Harry",lastName:"Potter"}
// var name =  "mukesh"
// person.firstName = name
// var f = person.firstName
// console.log(f)

// new insert

// person.age = 123

// console.log(person)

