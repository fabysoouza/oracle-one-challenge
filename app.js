let amigos = []; 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {

    let amigo = document.querySelector('#amigo').value.trim(); 
    if (amigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (amigos.length === 0) {
        exibirTextoNaTela('#resultado', ''); //reinicia o jogo
    }    

    amigos.push(amigo);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; //limpando lista

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });

    document.querySelector('#amigo').value = ''; //limpando
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        exibirTextoNaTela('#resultado', 'Todos os amigos já foram sorteados.');
        return;
    }
    let numeroSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteado];

    exibirTextoNaTela('#resultado', `Amigo sorteado: ${amigoSorteado}`);

    amigos.splice(numeroSorteado, 1);
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}