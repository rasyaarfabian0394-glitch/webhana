function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user == "HanaStoreOne" && pass == "Hana2203"){

window.location = "home.html";

}else{

document.getElementById("pesan").innerHTML = "Username atau Password salah";

}

}
