/* 
Qusetion(1) java script in Error ?  "use strict"

a=5
console.log(a)


"use strict"
var a=5;
console.log(a)


"use strict" // ye use strict function mai work nhi kr rega kiyo ki uska function scop hai to use strict ko function ke ander likh na ho ga

function abc(){
    a=4
    console.log(a)
}
abc()



Qusetion(2) Array in dynamic memory ,static difrence between Explane:-

# dynamic :- runtime code length change by

# static :- runtime code length not changeing by length data 


Qusetion(3)


const arr=[10,20,30,40,"hello"]
const xyz=arr
xyz[0]=40;
arr[0]=90;

console.log(xyz) //[90,20,30,40,"hello"]
console.log(arr) //[90,20,30,40,"hello"]



# variable :- value copy

# Array    :- refence copy



Qusetion(4) Total sum

var obj=[
    {a:"20"},
    {a:"30"},
    {a:"40"},
    {a:"50"};
]

var sum=0
for(let x of obj.a){
    sum+=x
}
console.log(sum);


Qusetion(5) uniky data

var arr=[10,11,12,11,19,13,12,13]



Qusetion(6) object two types difrence method data change

var obj={a:20,b:40};

obj.a=50;
obj["b"]=60;


Qusetion(7) Error can not be speread operator in object



var obj={a:90,b:40}
var arr=[10,20,40]
var xyz=[...arr,...obj]

console.log(xyz) // Error


Qusetion(8)

var b={i:1};
var a={i:b.i++};
a=b
a.i=(b.i+=5);

console.log(a) //7
console.log(b) //7



Qusetion(9)

var a=["apple","bannan","cocount"]
var b=a;
var c=a.slice()
a.push("date");

a=
b=
c=



Qusetion(10)

console.log('1'==1)        //
console.log('1'===1)       //
console.log(false==0)      // 
console.log(false===0)     // 
console.log(false==0)      // 
console.log(false=='')     //true
console.log('abc'=='abc')   //
console.log([1,2,3]==[1,2,4]) //false













*/