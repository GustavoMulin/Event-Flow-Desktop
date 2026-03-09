function carregarEventos() {

    fetch("data/events.json")
        .then(response => response.json())
        .then(dados => {

            let lista = document.getElementById("eventos")

            dados.eventos.forEach(evento => {

                let div = document.createElement("div")

                div.innerHTML = `
<h3>${evento.titulo}</h3>
<p>Data: ${evento.data}</p>
<p>Local: ${evento.local}</p>
<hr>
`

                lista.appendChild(div)

            })

        })

}

carregarEventos()

function logout() {

    window.location.href = "index.html"

}