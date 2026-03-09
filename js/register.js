document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault()

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value

    let usuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    localStorage.setItem("usuario", JSON.stringify(usuario))

    alert("Usuário registrado com sucesso!")

    window.location.href = "index.html"

})