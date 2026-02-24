function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user == "admin" && pass == "12345"){

window.location = "home.html";

}else{

document.getElementById("pesan").innerHTML = "Username atau Password salah";

}

}
