//(4)increment/decrment operator:{++,--}

//second name[uniery operator]:-(single type of)

//two type of:-
//(1)pre
//(2)post

//a++{post increment}

//++a{pre increment}

//Example:-
//(1)
var a=2;
a++;//a=a+1
console.log(a)

//(2)
var a=6
var b=a++;
console.log(a)//7
console.log(b)//6

//(3)
var a=6;
var b=++a;
console.log(a)
console.log(b)

//(4)
var a=6;
var b=a--;
console.log(a)//5
console.log(b)//6

//(5)
var a=29;
a--;
a-=++a
console.log(a)

//(6)
var a=29;
a--;
a-=a++
console.log(a)//0

//(7)
var a=5;
var b=a++ - --a - ++a +a ++ + a++ -a -- - --a
console.log(a)//6
console.log(b)//7