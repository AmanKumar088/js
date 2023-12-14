//----------------------------------------------------Date object--------------------------------------------------


// Date()   :-Refence se kr rega Midnight 1970 1st jan se lega time , peramenter mai milli second mai pass 

//-----------------------------------Date method---------------------------------------

//(1) getTime() :-1970 ki date se ab tak ki date bata dega
//(2) now()     :-current  date mille second mai dega


// (1) getTime()

// var date = new Date()

// console.log(((((date.getTime()/1000)/60)/60)/24)/365)
// var f = new Date()
// var date = new Date(f.getTime()+ 1000*60*60*24*2000)
// console.log(date.getDate() +" "+ date.getFullYear())



// (2) now()

// function getNextDate(no_of_days){
//     return new Date(Date.now() + 1000*60*60*24*no_of_days)
// }

// var f = getNextDate(-50000)
// console.log(f)

// var f = new Date()
// f.setTime(1000*60*60*24*4000)
// console.log(f)
