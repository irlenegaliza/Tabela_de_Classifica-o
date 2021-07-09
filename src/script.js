// Objetos em JavaScript
var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0 
}

var irlene = {
  nome: "Irlene",
  vitorias: 3,
  empates: 5,
  derrotas: 7,
  pontos: 0
}

// calcJogo(irlene)
// calcJogo(paulo)


console.log(irlene.pontos)
irlene.pontos = calcJogo(irlene)
paulo.pontos = calcJogo(paulo)

// console.log(irlene.pontos)
// ao colocar um retorno da função, é necessário ter um local para guardar o valor retornado, nesse caso, onde será guardado esse valor é na variável do objeto "irlene.pontos".

function calcJogo(jogador){
  var totalPontos = (jogador.vitorias * 3) + jogador.empates
  return totalPontos
}
// os parâmetros são os que entram na função
//  o retorno é o que retorna da função

var jogadores = [paulo, irlene]
// chamando a função
exibirJogadorTela(jogadores)

function exibirJogadorTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
//     <tr> quer dizer linha (uma nova linha)
//     <td> quer dizer a coluna no HTML
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
//     dizer ao javascript onde se quer que ele mostre as informações
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html  
}

function adicionarVitoria(i){
//   trabalha encima do indice do jogador indicado
  var jogador = jogadores[i]
//   esta expressão significa que irá ser somado mais uma vitória
  jogador.vitorias++
  jogador.pontos = calcJogo(jogador)
//   atualizar os pontos do jogador
//   chamar a função para exibir na tela
  exibirJogadorTela(jogadores)
  
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calcJogo(jogador)
  exibirJogadorTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calcJogo(jogador)
  exibirJogadorTela(jogadores)
}

/*  
TABELA DE CLASSIFICAÇÃO E OBJETOS NO JAVASCRIPT
PARTICIPE E VÁ MAIS FUNDO

Nesta sexta aula da Imersão Dev, vamos criar uma tabela de classificação e aprender o que são objetos no Javascript! O código da aula para você acompanhar está aqui:

https://codepen.io/imersao-dev/pen/yLgLLNY

Neste programa, focamos em objetos no universo Javascript, criando uma tabela de classificação, onde manipulamos os valores, realizamos cálculos e incluímos no HTML.

Conteúdo detalhado dessa aula
Remover o código estático do HTML;
Criar um objeto no Javascript para cada jogador;
Criar uma função que receba um objeto como parâmetro para calcular os pontos;
Exibir o objeto na página HTML;
Criar uma função para adicionar vitória;
Criar uma função para adicionar empate e outra para adicionar derrota;
Recalcular os pontos quando vitória ou empate for adicionado.

Desafios dessa aula!
Incluir uma imagem na linha de cada jogador;
Um botão que adiciona um novo jogador na tabela de classificação.

Links importantes para você acompanhar a aula
Codepen - editor de código online
-HTML, CSS e JavaScript, quais as diferenças(https://www.alura.com.br/artigos/html-css-e-js-definicoes)
-Repositório do código final da aula 5(https://codepen.io/imersao-dev/pen/KKaKKKK)

Links citados nessa aula
-Mais sobre variáveis(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#vari%C3%A1veis)

-Mais sobre a função parseFloat(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

Conteúdos extras:
Usando o VSCode(https://www.youtube.com/watch?v=xvkuNF_8Coc)
Primeira aula da imersão com Python(https://www.youtube.com/watch?v=DsFb24TgJ0c)
Primeiros passos na programação(https://hipsters.tech/primeiros-passos-na-programacao-a-imersao-dev-hipsters-ponto-tech-243/)
5 minutos de HTML(https://www.youtube.com/watch?v=3oSIqIqzN3M)

Como compartilhar seu CodePen:
Clique na opção Settings no canto superior direito;
Selecione a opção Pen Details (Detalhes);
No campo Pen Title você pode dar o nome do seu projeto;
No campo Pen Description, você pode dar detalhes sobre o projeto (o que ele faz, qual objetivo do projeto);
Para compartilhar seu projeto, no campo Tags, você pode adicionar #imersaodev,#alura
Agora só salvar seu projeto e compartilhar o link marcando a Alura nas redes sociais!
*/