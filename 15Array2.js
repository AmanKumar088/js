//(1)
var arr = [10,20,30,40]  // mutable object
var a = arr;
a[1] = 15

console.log(arr) // [10,20,30,40] 

//(2)
var arr  = [10,20,30,40]
for(let i = 0;  i<arr.length;   i++){
     console.log(arr[i]) // 10,20,30,40
}

//(3)
var arr = [10,20,30,60];
var sum = 0
for(let i = 0 ;i<arr.length ;i++){
     sum = sum+  arr[i]
}
console.log(sum) // 120

//(4) array total sum
 var arr = [9,20,30,90,23,56,13,7,35,10]
 var sum = 0
 for(let i = 0;i<arr.length;i++){
   if(arr[i]%2 == 0)
   {
     sum = sum + arr[i];
   }
 }console.log(sum); //206

//(5) 23 postion check kitne par hai
 var val = 23
 var arr = [10,30,45,12,23,86,10,45];
 for(let i = 0;i<arr.length ;i++){
     if(arr[i] == val){
         console.log(i) // 4
         break;
     }
}

//(6)
var val = "d"
var arr =["hello","abcd","bcd","summer","kumard","hiii"]
for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length;j++){
     if(arr[i][j]=="d"){
          console.log(arr[i]) // output : abcd , bcd ,kumard
          break;
     }
}
}
 



