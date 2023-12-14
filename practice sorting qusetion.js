//Array mai object mai data hai class 10 & class 12 ka is dono alag-alag class ke accouding answer class ke total marks show ho 

var arr = [
    {name:"Mukesh",class:10,totalMarks:200},
    {name:"Abc",class:12,totalMarks:260},
    {name:"Xyz",class:12,totalMarks:210},
    {name:"rahul",class:10,totalMarks:450},
    {name:"Dilip",class:12,totalMarks:310},
    {name:"Dilip",class:6,totalMarks:310},
    {name:"Dilip",class:6,totalMarks:389},
    {name:"lakshay",class:10,totalMarks:250},
    {name:"Dukan",class:12,totalMarks:340},
    {name:"makkan",class:10,totalMarks:200}

]
// output
// [
//     {class:10,totalMarks:567},
//     {class:12,totalmarks:789}
// ]


//-------------------------------------first type:-----------------------------------------------------

// var ten = arr.filter(ele=>{
//     return ele.class === 10
// })
// var Tensum = ten.reduce((a, b) => a + (b['totalMarks'] || 0), 0)
// var twelve = arr.filter(ele=>{
//     return ele.class === 12
// })
// var TwelveSum = twelve.reduce((a, b) => a + (b['totalMarks'] || 0), 0)
// var myArr = []
// myArr.push({class:10,totalMarks:Tensum})
// myArr.push({class:12,totalMarks:TwelveSum})
// console.log(myArr)



//------------------------------------ second type:----------------------------------------------
arr.sort(function(a,b){
    if(a.class > b.class){
        return 1
    }
    else if(a.class < b.class){
        return -1
    }
    else{
        return 0
    }

})


var myArr = []
var totalSum = 0;
arr.forEach(function(ele,index){
        totalSum+=ele.totalMarks;
        if(arr[index].class !== arr[index+1]?.class)
        {
           myArr.push({class:ele.class,totalMarks:totalSum})
           totalSum = 0
        } 
      
})
console.log(myArr)

