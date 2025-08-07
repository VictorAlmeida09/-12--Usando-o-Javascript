console.log('Olá mundo!');

let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
let elementoBody = document.body;
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

let hora = document.createElement('p');
hora.innerText = "Agora são: " + new Date().toLocaleTimeString();
hora.style.fontSize = '20px';
hora.style.color = 'white';
elementoBody.appendChild(hora);

let botao = document.createElement('button');
botao.innerText = 'Clique para mudar a cor!';
botao.style.padding = '15px 25px';
botao.style.fontSize = '18px';
botao.style.cursor = 'pointer';
botao.style.marginTop = '30px';
botao.style.display = 'block';

let textoCor = document.createElement('p');
textoCor.innerText = 'Cor atual:';
textoCor.style.fontSize = '20px';
textoCor.style.fontWeight = 'bold';

document.body.appendChild(botao);
document.body.appendChild(textoCor);
document.body.style.textAlign = 'center';

function gerarCorAleatoria() {
  let letras = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

botao.addEventListener('click', () => {
  let novaCor = gerarCorAleatoria();
  document.body.style.backgroundColor = novaCor;
  textoCor.innerText = 'Cor atual: ' + novaCor;
});
