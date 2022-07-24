function validarLogin() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    if((username == "admin") && (password == "admin")){
        location.href = "views/main_view.html";
    }else{
        alert("Usuario y contraseña incorrectos");
        document.querySelector("#password").value = "";
        document.querySelector("#username").value = "";
    }
}