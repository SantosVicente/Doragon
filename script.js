let arrayDeObjetos = [];

const botaoEnviar = document.getElementById("botaoEnviar");
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  let novoObjeto = {
    nome: document.getElementById("nome").value,
    magia: document.getElementById("magia").value,
    poder: document.getElementById("poder").value,
    classe: document.getElementById("classe").value,
  };

  arrayDeObjetos.push(novoObjeto);

  const card = document.createElement('div');
  card.classList.add('card');

  const propriedade1Element = document.createElement('p');
  propriedade1Element.textContent = `Nome: ${novoObjeto.nome}`;

  const propriedade2Element = document.createElement('p');
  propriedade2Element.textContent = `Magia: ${novoObjeto.magia}`;

  const propriedade3Element = document.createElement('p');
  propriedade3Element.textContent = `Poder: ${novoObjeto.poder}`;

  const propriedade4Element = document.createElement('p');
  propriedade4Element.textContent = `Raça: ${novoObjeto.classe}`;

  card.appendChild(propriedade1Element);
  card.appendChild(propriedade2Element);
  card.appendChild(propriedade3Element);
  card.appendChild(propriedade4Element);

  
  const container = document.getElementById("cards");
  console.log(container);

  container.appendChild(card);

  formulario.reset();

  console.log(arrayDeObjetos);

  botaoEnviar.disabled = true;
});

const campo1 = document.getElementById("nome");
const campo2 = document.getElementById("magia");
const campo3 = document.getElementById("poder");

campo1.addEventListener("input", verificarCamposPreenchidos);
campo2.addEventListener("input", verificarCamposPreenchidos);
campo3.addEventListener("input", verificarCamposPreenchidos);

function verificarCamposPreenchidos() {
  if (campo1.value !== "" && campo2.value !== "" && campo3.value !== "") {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}
