// /*
// types of loop 5 types:-[Itirration]second name:-

// In java script five types of loop:-

// (1)while [predifend resever keyword](Entry control loop)[32]
// (2)do-while(Exit control loop)[224]
// (3)for    [124]
// (4)for-in [class19object3 row 35](spaical object)
// (5)for-of [287](spaical array)

// top three loop is standard 

// condision boolean type hoti hai [ture & fluse]

// agar condision ture hogi to andar satement check kr re ga 

// fluse hogi to while ke adar na jaake bhar chala jaye ga 

//---------------------------------------syntax:-----------------------------------------

// console.log("hello")
// while(condision){
//     satement;
// }
// console.log("b")
// */

//--------------------------------for loop syntax---------------------------------------------

// for (initialization; condition; increment)  
// {  
//     code to be executed  
// }  

//---------------------------------while loop syntax--------------------------------

// while (condition)  
// {  
//     code to be executed  
// }  
//--------------------------------do while loop syntax---------------------------------
// do{  
//     code to be executed  
// }while (condition);  

//-------------------------------for in ----------------------------------------------
// The JavaScript for in loop is used to iterate the properties of an object. We will discuss about it later

// //Example:-(1)

// /*
// var a=1;
// while(a<=5)
// {
//     console.log(a);
// }
// */

// //(2)

// var a=1;
// while(a<=5)
// {
//     console.log(a)
//     a++
// }//output 1,2,3,4,5

// //(3)
// var a=1
// while(a<=100){
//     console.log(a)
//     a++
// }

// //(4)
// var a=100
// while(a>=1){
//     console.log(a)
//     a--
// }

// //(5)[1 to 100 even number output]
// var a=1
// while(a<=100)
// {
//     if(a%2==0){
//         console.log(a);
//     }
//     a++
// }

// //(6)
// var a=1
// while(a<=4)
// {
//     var b=1
//     while(b<=4)
//     {
//         console.log(b)//
//         b++
//     }
//     a++
// }

// //(7)same Question condision difrecne

// var a=1
// var b=1
// while(a<=4)
// {
//     while(b<=4)
//     {
//         console.log(b)
//         b++
//     }
//     a++
// }

// //(8)table 39

// var a=1
// var b=39
// while(a<10)
// {
//     console.log(`${b}*${a}=${a*b}`)
//     a++
// }+


// //(9)
// var a=5
// while(a<=15)
// {
//     var b=1
//     while(b<=10)
//     {
//         console.log(b*a)
//         b++
//     }
//     a++
// }

// /*

// (3)

// for(keyword)

// formate:-

// for( ; ; ){
//     console.log("first loop")
// }

// (2)
// for(inlization only one time value 1;condition dekh khe ga true hai ya fulse 2;incariment/decariment 4)
// {
//     satement;true 3
// }
// agar condition fulse exit kr de ga
// */

// //Example:-(1)

// for(var x=1;x<=3;x++){
//     console.log(x)
// }

// //(2)

// for(var x=1;x<=3;x=x+2){
//     console.log(x)
// }

// //(3)

// for(var x=1;x<=5;x++){
//     console.log(x)
// }
// console.log(x)
// /*output 
// 1
// 2
// 3
// 4
// 5
// 6
// */

// //(4)
// var x,y,z;
// for(x=1,y=2,z=3;x<=3;x=x+2,y=y+3,z=z+9){
//     console.log(x,y,z)
// }
// /*
// output
// 1,2,3
// 3,5,12
// */

// //(5)
// for(var x=1;x<=3;x++){
//     for(var y=1;y<=2;y++){
//         console.log(x)
//     }
// }//1,2,1,1,2,2,1,2,3

// //(6) 11 ka table nhi show hoga

// for(var x=1;x<=100;x++){
//     if(x%11!=0){
//         console.log(x)
//     }
// }

// //kis ka bhi data daal ne liye condition:-

// var string="wellcome";                 //lenth mai 1 se start hoga data daal ne ke liye
// var s=string[0]                       //position mai 0 se start hoti hai
// console.log(s)                       // 0 ka jo data hai vo s mai dal jaye ga output mai W aye ga
// //var l=string lenth

// //(1)
// var string="wellcome";
// for(let i=0;i<=7;i++){
//     console.log(string[i])
// }

// //(2)
// var string="helloword";
// var s="";
// for(let i=string.length-1;i>=0;i--){
//     s=s+string[i];
// }
// console.log(s)//dlrow olleh

// //(3)
// var string="ABCD";//output:- ABCD BCD CD D (1234 234 34 4)
// for(let i=0;i<string.length;i++){
//     var counter="";
//     for(let j=i;j<string.length;j++){
//         counter=counter+string[j]
//     }
//     console.log(counter)
// }

// do while[Exit control loop]

// Example:-(1)

// do{
//     console.log(i)
//     i=i+2
// }while(i<=5);// is do while loop mai ek baar output aye ga 1,3,5

// //(2)same Q 1

// var i=1;
// while(i<=5){
//     console.log(i)
//     i=i+2
// }//1,3,5

// //(3) 3 satement table 5 to 8

// var i=5
// do{
//     var j=1;

// do{
//     console.log(j*i);
//     j++;
// }while(j<=10);
// i++;
// }while(i<=8);

// //(4) convert to do while Q 5

// let prime=15;
// let counter=0
// for(let i=1;i<=prime;i++){
//     if(prime%i==0){
//         counter=counter+1
//     }if(counter>2){
//         console.log("not a prime number")
//         break
//     }
// }if(counter==2){
//     console.log("prime number");
// }

// //(5)

// let pri=15;
// let counter=0
// let i=1
// do{
//     if(prime%i==0){
//         counter=counter+1;
//     }if(counter>2){
//         break
//     }
//     i++
// }while(i<=pri);
// if(counter==0){
//     console.log("prime number")
// }


// //topic:- for of
// //(1)

// //var arr = [10,20,30,40]
// // for(let x of arr)
// // {
// //     console.log(x);
// // }

// // (2)

// // var arr = [
// //     {name:"Jhunjhunwala"},
// //     {name:"warsi"},
// //     {name:"krisnamurthy"},
// //     {name:"prabhas"},
// //     {name:"allu arjun"},
// //     {name:"ravi teja"}
// // ]

// // for(const x of arr){
// //     console.log(x.name)
// // }

//(1)count
// var v = [1, 3, 5, 4, 3, 0, 0, 1, 1];    
//     var count = 0;

//         for (var i = 0; i < v.length; i++){
//             if(v[i] === 1){
//                 count++;
//             }
//         }
//           console.log (count);


//table question:-

// var num1=1;
// var num2=10;
// for(let i=num1;i<=num2;i++){
// for(let j=num1;j<=10;j++){
// console.log(`${i}X${j}=${i*j}`)
// }
// }