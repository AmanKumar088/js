//------------------------------------------------constructor Question---------------------------------------------

// Example:-

// function Person(){

// }
// var p1 = new Person();


// p1.name = "kumar"
// console.log(p1.name)


//  var p = new Promise()


// personal.prototype.ll = new NahiPadhunga()


//---------------------------------------string pridifined prototype method--------------------------------------


//(1) charAt()      :- is mai position se data nikal sakhte hai [return srting kr rega] 
//(2) concat()      :- do string ki value ko add kr dega 
//(3) replace()     :- single ko replace and add bhi kr dega 
//(4) replaceAll()  :- sab ko replace kr dega 
//(5) toUpperCase() :- capital word 
//(6) tolowercase() :- small word 



//(1)charAt()   [Example]:-

// var str = "Welcome"
// var f = str.charAt(2)  // return string
// console.log( typeof f) //string
// console.log(f)

// function Person(){

// }

// var p = new Person()
// p.a=90
// console.log(p.a);



// (2)concat()  [Example]

// var str = "Welcome"
// var str1 = "world"
// var str3 = str.concat(str1);
// console.log(str3)



// (3)replaceAll()  [Example]

// var str = "welcome Kumar"
// var f = str.replaceAll("e","Blog Dekhunga Use less Blog")   //e ki jagha pe Blog Dekhunga Use less Blog [add ho jaye ga]
// console.log(f)



// (4)touppercase() [Example]

// var str = "welcome";
// var f = str.toUpperCase()  //capital mai welcome print hoga
// console.log(f)




// (5)tolowercase()  [Example] 

// var str = "WELCOME";
// var f = str.toLowerCase()      //small mai welcome prit hoga
// console.log(f)


// var str = "WELCOME";
// var f = str.toLowerCase()     
// console.log(f)




// (6) ek function banaya jis ke prototype mai function dala jis se saare word [touppercase] aa jaye ge
// var str = "welcome";
// String.prototype.netrpalConvertor = function(){                        //ek function banaya jis ke prototype mai function dala jis se saare word [touppercase] aa jaye ge   
//     return this.replace(this.charAt(0),this.charAt(0).toUpperCase())
// }
 

// var f = str.netrpalConvertor()
// console.log(f)

//-------------------------------------------second type------------------------------------

// (7)
// function netrpalConvertor(kjfgfjfdsjf){
//     return kjfgfjfdsjf.replace(kjfgfjfdsjf.charAt(0), kjfgfjfdsjf.charAt(0).toUpperCase())
// }

// var str = "welcome";
// var d =  netrpalConvertor(str)
// console.log(d)



