/*
(1) charAt()      :- is mai position se data nikal sakhte hai [return srting kr rega] 
(2) concat()      :- do string ki value ko add kr dega 
(3) replace()     :- single ko replace and add bhi kr dega 
(4) replaceAll()  :- sab ko replace kr dega 
(5) toUpperCase() :- capital word 
(6) tolowercase() :- small word 


(7) split()       :- function ko convert kr deta hai array mai         
(8) includes()    :- return mai boolean kr ta hai, or is mai bata de gi string mai word hai ya nhi hai
(9) indexOf()     :- index se position bata deta hai , only for one time (retrun mai number karta hai), agar data nhi hoga to (-1) lega automatcily , (e,2) e ke baad 2 ki position ke baad star hoga 
(10)lastIndexOf() :- hamesha last se start hoga 
(11)startsWith()  :-  (wel) se start ho rha hai ya nhi check kr re ga
(12)endsWith()    :- ismai end se start hoga
(13)trim()        :- Extra white space ko hata deta hai ,only left and right side ke space ko hata hai 
(14)trimStart()   :- start se space ko hata dega 
(15)trimend()     :- end se space ko hata dega 
(16)charCodeAt()  :- asiicode comupter laguage samjh ta hai  capital (A to Z 65-90) small (a to z 97- )
(17)padStart()    :- (2,5) only 2 bar repeat hoga variable mai var str="3" , output mai 3535
(18)padend()      :- (2,3) end se start hoga 53,53 aye ga 
(19)repeat()      :- argument mai kitni baar repeat krna hai
(20)substring()   :- (3,5) 3 position , aati hai 5 1kam lege, -1 mai kaam nhi krega
(21)slice()       :- (-4,-1) back side se kr rega output, is mai -1 mai hoga 
(22)subStr()      :- hata deta hai, accoding to mdn browser recommend ,security reason
(23)valueof()     :- new string ko litranls mai convert kr deta hai
*/


// (1) split()

// var str = "Hello World Kumar"

// var st = str.split(" ")               //convert to array space bhi count kr rega

// console.log(st);


// for(let i = st.length-1 ; i>=0 ;i--){
//     console.log(st[i]);
// }


// (2) split()

// var str = "Hello Wor;ld Kumar"

// var st = str.split(";")

// console.log(st);

// (3) includes()   return boolean type data krta hai, argument mai string ke andar come hai to bata dega

// var str = "welcome back"
// var f = str.includes("come")
// console.log(f)



// (4) indexOf()

// var str = "welcome back"
// // console.log(str[0]);

// var f = str.indexOf("$")

// console.log(f);
// var f = str.indexOf("e",2)
// console.log(f)



// (5) indexOf()


//var str = "welcome back"
// var f = str.indexOf("c"  , str.indexOf("c")+1)
// console.log(f);


// (6) lastIndexOf()

// var str = "welcome back"
// var f = str.lastIndexOf("c")
// console.log(f);


// (7) startsWith()      :-  Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.

// var str = "welcome back";
// var b = str.startsWith("wel",3)
// console.log(b)


// (8) endsWith()

// var str = "welcome";
// var b = str.endsWith("me")
// console.log(b)


// (9) trim()

// var str = "  wel     come   ";
// var b = str.trim()
// console.log(b)


// (10) charCodeAt()

// var str = "A";
// var f = str.charCodeAt()
// console.log(f)


// (11) padStart()

// var str = '5'
// var g = str.padStart(2,'3')
// console.log(g)  // 05


// (12) padEnd()

// var str = '5'
// var g = str.padEnd(2,'3')
// console.log(g)  // 05


// (13) repeat()

// var str = "hello"
// var st = str.repeat(0)
// console.log(st)


// (14) slice(-4,-1)

// var str = "welcome";
// var f = str.slice(-4,-1)   
// console.log(f)

// (15) substr()

// var str = "welcome";
// var st = str.substr(); 
// console.log(st)


// (16) trimStart()

// var str = "  welcome"

// var f = str.trimStart()
// console.log(f)

// (17) trimEnd()

// var str = "   welcome   "

// var f = str.trimEnd()
// console.log(f)


//------------------------------------convert Object String Constructor to String Primitive type-------------------

// (18) valueOf()

// var str = new String("4")
// console.log(typeof str)

// var f = str.valueOf()
// console.log(f)

