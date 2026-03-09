document.getElementById("loginForm").addEventListener("submit", function (e) {

    e.preventDefault()

    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    let usuario = JSON.parse(localStorage.getItem("usuario"))

    if (usuario && email === usuario.email && senha === usuario.senha) {

        alert("Login realizado com sucesso!")

        window.location.href = "home.html"

    } else {

        alert("Email ou senha incorretos")

    }

})