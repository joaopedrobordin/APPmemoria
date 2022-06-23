function salvarContato() {
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone")
    let novoContato = <li>${nome} - ${telefone}</li>
    document.getElementById("lista-contatos").innerHTML = novoContato
}

localStorage.listaContatos = novoContato


btSalvar = document.getElementById("salvar")
btSalvar.addEventListener("click", function () {
    salvarContato()
})

if (localStorage.listaContatos) {
    document.getElementById("lista-contato").innerHTML = localStorage.listaContatos
}
