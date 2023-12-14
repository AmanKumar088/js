//(6)Logical operator:-(&&,||,!)

// && :- and
// || :- or
// !  :- not 

//work :-

// &&,|| :-(left to right)

// ! :-right to left(oposite kr deta hai)

// ?? :-coscalure operator

// ?. :-opation chanalleg Question mark operator

//Example:-

//(1)
var a=10
a>5?console.log("true"):console.log("ture")

//(2)
var a=10
var c=!(a>5)
console.log(c)//true

//(3)
var a=10
var c=a>5 && a<10 //[Data type bolean]
console.log(c)//true

//4
var a=10
var c=a>5||a<20||a>25;
console.log(c)//ture

//(5)
var a=10;
var c=a>2 && false || false && a>=20 && a<15 || false || true && true
console.log(c)//true

//(6)
var c=0 && 1 || 1 && 0 && 0 || 1 && 1 ||0
console.log(c)//1

//(7)
var x=2
var y=4
x=((y>x || y++===4)&&++y===5)?1:4
console.log(x)//1
console.log(y)//5

//(8)
var a;
var b=a||"hello";
console.log(b)//hello

//(9)
console.log(a??20)//{error ko bachane ke liye is operator ka use hota hai}
//ager a mai output hoga to output lega[ager a mai output nhi hoga to 20 lega Answer]