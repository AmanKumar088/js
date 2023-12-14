// /*
// control statment and looping:- [helping keyword]

// keyword name :-

// (1)if
// (2)if-else [row no 131]
// (3)else
// (4)switch
// (5)next-if
// (6)vosted-if

// types of loop 5 types:-

// (1)while[predifend reservered keyword]
// (2)do-while
// (3)for
// (4)for-in
// (5)for-of

// (1)if:-[predifend reservered keyword]
// */

// //Example:-

// /*(1)

// var a=3;
// if(bolean type[true/false])
// {
//     console.log("even number")
// }
// */

// //(2)
// var a=4
// var b=a%2==0  //[kisi bhi tarike se likh sakh te ha]
// if(b){
//     console.log("even number")
// }else{
//     console("odd number") //[else if ke end mai lagta hai]
// }

//console.log("hello")[else mai nhi hona chaiye]

//(3)

// var gender="m"
// var age=20;
// if(gender=="m" && age >=21);{
//     console.log("your are illegible of marriage")
// }

//(4)

// var gender="f"
// var age=18;
// if(gender=="f"&&age>=18);{
//     console.log("your are illegible of marriage")
// }

//(5)
// var a=5;
// if(a%2==0){
//     console.log("number is even")//single satement
// }else
// console.log("number is odd")

//(6)single satement[example]
// /*
// jb satement mai ek satement hogi to
// koi jarurat nhi hai ki{} lgaye

// jaha par do satement hogi vahaa par
// {} laga na hai
// */
// var a=5;
// if(a%2==0)
// console.log("number is even")
// else
// console.log("number is odd")

//(7)
// var age=20;
// if(age>="50")
// console.log("a")
// console.log("b")
// //answer(b)

//(8)
// var age=20;
// if(age>="5"){
//     console.log("a")
//     console.log("b")
// }else
// console.log("c")
// console.log("d")
// //answer(d)

//(9)Error[let local scop]
// var a=5;
// if(a>2)
// {
//     let x=5;
//     console.log(a)
// }else{
//     console.log(x)
// }
// console.log(a);

//(10)
// var x=10;
// var a=5;
// if(a>10)//false
// {
//     let x=5
//     console.log(x)//5
// }else{
//     console.log(x)//10
// }
// console.log(a)//5

//(11)let [local example]
// var x=5;
// {
//     let x=10;
//     console.log(x)//10
// }
// console.log(x)//5

// if-else-if:-

//Example:-

//(1)
// var persentage=78;
// if(persentage>=90 && persentage<100)//false
// {
//     console.log("grade a")
// }
// if(persentage>=80 && persentage<90)//false
// {
//     console.log("grade b")
// }
// if(persentage>=70 && persentage<80)//true
// {
//     console.log("grade c")
// }

//(2)
// var persentage=78;
// if(persentage>=90 && persentage<100)//false
// {
//     console.log("grade a")
// }
// else if (persentage>=80 && persentage<90)
// {
//     console.log("grade b")
// }
// else if(persentage>=70 && persentage<80)
// {
//     console.log("grade c")
// }

//(1)
// var a=5;
// var b=6;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)


//(2)
// var a=2;
// var b=5;
// var c=9;
// if(b>a && c>b){
//     console.log('c is garter then b and a')
// }

//(3)
// var gender='M'||'F'
// var age=23||18
// if(gender=="M" && age>=21){
//     console.log("your are male illgible for marrage")
// }
// else if(gender=="F" && age>=21){
//     console.log("your are female illgible for marrage")
// }
// else{
//     console.log("you are not illgible for marrage")
// }

// //Extra Qustion

//
// var gender="m"
// var age=18
// if(gender=="m" && age<=20){
//     console.log("your are illgible for male marrage")
// }else{
//     console.log("your not are illgible for a marrage")
// }

// //
// var a=100;
// var b=120;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)

// //
// var gender="M"||"F"
// var age=25||19
// if(gender=="M"&&age>=21){
//     console.log("your male illgible for marrage")
// }
// else if(gender=="F"&&age>=18){
//     console.log("your illgible female for marrage")
// }
// else{
//     console.log("your not illgible for marrage")
// }