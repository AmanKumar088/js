//(1) Array mai se nikal lene ke liye data ko 

//var arr = []  //
// var arr = [  [10,20,40],  [4,6],  [12,10],  [89,13]   ]
// var y = arr[2]
// var t = y[0];
// console.log(t) //12  

//(2) Data change Qustion

//var arr =  [10,20] 
// var x = arr[0]
// arr[0] = arr[1]
// arr[1] = x
// console.log(arr); //20,10

//(3) Ascending order

//  var arr = [10, 20 ,3, 9, 12, 23, 13]  
//  for(let i = 0;  i<arr.length;   i++){
//      for(let j=i+1; j<arr.length; j++){
//          if(arr[i] > arr[j])
//          {
//              var temp = arr[i]
//              arr[i] = arr[j]
//              arr[j] = temp;
//          }
//      }
//  }console.log(arr); // [3,9,10,12,13,20,23]

// Topic:- array destructuring  // unpack value from array

//(1) unpack array mai se 

// var arr = [10,20]
// console.log(arr[0]);

//(2) 

// var arr =  [ 10,20]
// var [a,b] = arr; //a=10 ,b=20

// console.log(a)//10

//(3)

// var [a,b,c] = [10,20,30];
// console.log(c);

//(4)

// var a = 10  , b = 20;
// [a,b] = [b,a]
// console.log(a,b);


// Topic:- spread operator (...)

//(1)

// var arr = [10,20,30,50]
// const [a,b] = arr
// console.log(a,b); // 10,20 

//(2)

//var a = [2,6];
//var b = [10,20,30,...a]

//console.log(b) // [10,20,30,2,6]

//(3)

// var arr = [10,20]
// const [a,b,c] = arr
// console.log(a,b,c);
// console.log(arr[0])

//(4)

//var a = [1,2,5];
//var b = [5,12,19]
//var c ;  // [1,2,5,5,12,19]

//var c = [...a,...b];
//console.log(c)












