//Three types of variable:-[tino ka power alag alag hai (power full var)]

//(1) var a=5;  [gobal scop] [agar fanction mai var ka use ho rha hai to os var ka function scop ho jayega]
//(2) let a=5;  [local scop]
//(3) const a=5;[fanction scop]

//let and const [same behaviour]

//const [const modify nhi ho shakta]

//Example:-

//(1)(SyntaxError: Identifier 'a' has already been declared)[error aa jaye ga same a ko nhi rakh sakhte hai]

/*{
    let a=2
    console.log(a)
    var a=2
    console.log(a)
}*/

//(2)let and const[same behaviour]

// let const a=2

//(3)[const modify nhi ho shakta](error)

/*{
const a=5
a=10;
console.log(a)
}*/

//(4)
{
    let a=10;
    a=5;
    console.log(a)
}//5



