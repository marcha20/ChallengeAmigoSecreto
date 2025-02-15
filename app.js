// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === ""){
        alert("Por favor, inserte un nombre válido");
        return;
    }

    amigos.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value ="";
    inputAmigo.focus();
}

function actualizarLista(){
    const listaAmigoUL = document.getElementById("listaAmigos");
    listaAmigoUL.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;

        listaAmigoUL.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
    
    const resultadoUL =document.getElementById("resultado");

    resultadoUL.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo)
});