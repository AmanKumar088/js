//(5)Tarnery operator[exp1 ? exp2 : exp3]

//note:{exp1 sahi hoga to exp2 Answer ho ga}
//{exp1 galt hoga to exp3 answer ho ga}

//Example:-

//(1)
console.log("a")
var a=5
var b=a==="5" ? 10:9
console.log(a)//5
console.log(b)//9

//(2)
var c=10;
var a=2;
var b=a>1 ? c==10 ? 10:2:5
console.log(b)//10

//(3)
var a=5
var b=a
b=10
console.log(a)//5
console.log(b)//10


