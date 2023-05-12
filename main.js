const form = document.querySelector('.form-contato');
const adicionar = document.querySelector('.adicionar');
let nomes = [];
let telefones = [];
let linhas = '';

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    adicionaContato();
    contaContatos();
})

function adicionaContato() {
    const inputNome = document.querySelector('.nome');
    const inputTelefone = document.querySelector('.telefone');
    const corpoTabela = document.querySelector('tbody');
    
    nomes.push(inputNome.value);
    telefones.push(parseFloat(inputTelefone.value));

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';

    corpoTabela.innerHTML = linhas;

    console.log(nomes, nomes.length)
}

function contaContatos() {
    const contador = document.querySelector('.numero-contatos');

    contador.innerHTML = `Você tem ${nomes.length} ${ nomes.length == 1 ? 'contato' : 'contatos'}`;
}