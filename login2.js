const container = document.querySelector(".container")
const btnSignIn = document.getElementById("btn-sign-in")
const btnSignUp = document.getElementById("btn-sign-up")

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle")
})
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle")
})

//sign in
const formLogin = document.querySelector(".sign-in");

formLogin.addEventListener("submit", function (e) {
    e.preventDefault(); //no se recargue la pagina

const email = document.getElementById("login-email").value;
const pass = document.getElementById("login-pass").value;

  // Simulación simple de validación
    if (email === "frdiego1601@gmail.com" && pass === "1234") {
        localStorage.setItem("usuario", email);
        console.log("Guardando en localStorage: ", email);
        window.location.href = "dashboard.html"; // redirige a la siguiente página
    } else {
    alert("Correo o contraseña incorrectos");
    }
});
