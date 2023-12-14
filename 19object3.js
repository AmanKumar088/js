//(1)
var obj={
    name:"nk",
    email:"km@gg.com"
}
var {emaill}= obj
console.log(emaill)

//(2)
//const [m,x] = [10,20];

//(3)
var {a,b,...l} = {a:10,b:20,c:30,d:90}
console.log(l) //30,90

//(4)
var {a:x,b:y} = {a:10,b:20}
console.log(x)

// topic:- object enhancement

//(5)
var a = 10;
var b = 20;
var c = 30;
var d = 40;
var g = "hello"
var obj = {
    a,b,c,d,g
}

var f = obj.a;
console.log(f);

//Topic:- for - in (loop) spaical object

//(6)
var obj = {
    empName:"Kumar",
    empEmail:"fulkumar@gmail.com",
    empAddress:"Mangal grah",
    empJob:"Alian",
} 

// in operator

var a = "empName"
console.log(a in obj)

//(7)
var obj = {
    empName:"Kumar",
    empEmail:"fulkumar@gmail.com",
    empAddress:"Mangal grah",
    empJob:"Alian",
}
var f = obj["empJob"]

for(let x in obj){
    console.log(obj[x])
}
