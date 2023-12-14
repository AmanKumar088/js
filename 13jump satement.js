/*Topic:-Jump Satement[pridifiend reserve keyword]

Four type of:-

(1)break   {use to loop}
(2)Continue{use to loop}
(3)Return  {use to fanction}
(4)Label   {for jumping}

*/
//Example:-

//(1)Break:- 2 satement Hai

for(let i=1;i<=5;i++){
    if(i==3){
        break
    }
    console.log(i)
}

//(2) e word check kr re ge kit ni baar hai 
var string="hello world welcome";
var counter=0;
for(let i=0;i<string.length;i++){
    if(string[i]=="e"){
        counter=counter+1
    }
    console.log(counter)//3
}

//(3)
var string="hello world welcome";
var counter=0;
for(let i=0;i<string.length;i++){
    if(string[i]=="e"){
        console.log(string[i]) //e ko print kr ne liye
    }
    console.log(counter)
}

//(4) 3 satement
for(var i=1;i<=3;i++){
    for(var j=1;j<=5;j=j+2){
        if(i==2){
            break
        }
        console.log(j)
    }
    if(i==1){
        break
    }
    console.log(i)//1,2,3
}

//(2)continue:- is condition mai skip kr dega

//for(var i=1;i<=5;i++){
//    if(i==3)
//    continue
//    console.log(i)//1,2,4,5
//}
