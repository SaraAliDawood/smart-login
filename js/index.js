var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var loginInput = document.getElementById("loginInput");
var loginPage = document.getElementById("loginPage");
var homePage = document.getElementById("homePage");
var signUpPage = document.getElementById("signUpPage");
var nameInput2 = document.getElementById("nameInput2");
var emailInput2 = document.getElementById("emailInput2");
var passwordInput2 = document.getElementById("passwordInput2");
var signUpInput = document.getElementById("signUpInput");
var signUp = document.getElementById("signUp");
var signIn = document.getElementById("signIn")
var usersList;

var users;

if(localStorage.getItem("storedUsers") == null){
    usersList =[];
}
else{
    usersList = JSON.parse(localStorage.getItem("storedUsers"));
}
signUp.addEventListener("click" , function(){
    signUpPage.classList.replace("d-none" , "d-block");
    loginPage.classList.add("d-none");
})
signIn.addEventListener("click",function(){
    signUpPage.classList.replace("d-block" , "d-none");
    loginPage.classList.remove("d-none");
})






signUpInput.addEventListener("click" , function(){
    if(emailInput2.value == "" || passwordInput2.value == "" || nameInput2.value == ""){
        document.getElementById("null").innerHTML = ` <p class="text-danger" >all inputs are required</p>`;
        
    }
    else{
        users = {
            name : nameInput2.value,
            email : emailInput2.value,
            password : passwordInput2.value
        };
        var isExist = false ;
        
        for(i=0; i< usersList.length; i++){
            if( usersList[i].email === emailInput2.value ){
                isExist = true;
                break; 
            }
        }
            if (isExist){
                document.getElementById("null").innerHTML = ` <p class="text-danger" >email already exist</p>`;
            }
            else{
                usersList.push(users);
                localStorage.setItem("storedUsers" , JSON.stringify(usersList));
                document.getElementById("null").innerHTML = ` <p class="text-danger" >success</p>`;
            }  
        }      
    
})

var logOut = document.getElementById("logOut");
var welcomePage = document.getElementById("welcomePage");


loginInput.addEventListener("click" , function(){
    if(emailInput.value == "" || passwordInput.value == ""){
        document.getElementById("null1").innerHTML = ` <p class="text-danger" >all inputs are required</p> `;
    }
    else{
        for(i=0; i<usersList.length; i++){
            if(emailInput.value == usersList[i].email && passwordInput.value == usersList[i].password){
                loginPage.classList.add("d-none");
                homePage.innerHTML = ` <div class="d-flex align-items-center justify-content-center text-bg-light text-center">
            <h1>welcome ${usersList[i].name} </h1>  
        </div> `
       logOut.classList.remove("d-none");
       logOut.classList.add("d-block");
            }
            else{
                document.getElementById("null1").innerHTML = ` <p class="text-danger" >invalid username or password</p> `;
            }
        }
    }
    clearInputs();
})
logOut.addEventListener("click" , function(){
    welcomePage.classList.add("d-none");
    loginPage.classList.replace("d-none" , "d-block");

    console.log("helloo")
    
    
})

function clearInputs(){
    passwordInput.value = null;
    emailInput.value = null;
}
