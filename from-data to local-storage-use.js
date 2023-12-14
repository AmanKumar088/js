//-----------localstorage use to from data stor by localstorage


// <form id="myForm" onsubmit="validateLogin(event)"> 

(()=>{
    const loginInfo = getStorage();
    if(loginInfo.isLogin === "true"){
        location.href = "dashboard.html"
    }
    })();
    function validateForm(event){
        event.preventDefault();
        const box = document.querySelectorAll(".box");
        let formObj={
            name:"",
            email:"",
            password:"",
            isLogin:"true"
        };
        box.forEach(e=>{
            formObj = {...formObj,[e.name] : e.value}
        })
    
        if(Object.values(formObj).every(e=>e !="")){
                setStorage(formObj);
                location.href = "dashboard.html";
        }
        else{
            alert("Please Fill out this field")
        }
    }
    
    
    function validateLogin(event){
        event.preventDefault();
        const box = document.querySelectorAll(".box");
        let formObj={
            email:"",
            password:""
        };
        box.forEach(e=>{
            formObj = {...formObj,[e.name] : e.value}
        })
    
        if(Object.values(formObj).every(e=>e !="")){
               
            const loginData = getStorage()
            if(loginData.email = formObj.email && loginData.password === formObj.password){
                loginData.isLogin = "true"; 
                setStorage(loginData);
                location.href = "dashboard.html"
            }
            else{
                alert("incorrect email and password")
            }
        }
        else{
            alert("Please Fill out this field")
        }
    }
    function setStorage(item){
        localStorage.setItem("login-info",JSON.stringify(item));
    }
    function getStorage(){
        return JSON.parse(localStorage.getItem("login-info"));
    };


    

//-------------logout button use click logout page and home page return 



// <button onclick="logout()">Logout</button>

(()=>{
const loginInfo = getStorage();
if(loginInfo.isLogin === "false"){
    location.href = "/"
}
})();
function logout(){
    const loginInfo = getStorage();
    loginInfo.isLogin = "false"
    setStorage(loginInfo)
    location.href = "/"
}

function setStorage(item){
    localStorage.setItem("login-info",JSON.stringify(item));
}
function getStorage(){
    return JSON.parse(localStorage.getItem("login-info"));
}