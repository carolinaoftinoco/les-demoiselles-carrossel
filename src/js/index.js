const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const paragrafoDescricao = document.querySelector('.descricao');

// Array com as descrições para cada imagem
const descricoes = [
    "Poesia, musicalidade e finesse. Eis \"Les Demoiselles de Rochefort\" (FRA, 1967), uma das maiores pérolas do cineasta Jacques Demy. Brilhante romance musical: o cenário francês da época, as cores, a distinta arte - enfim, uma obra encantadora.",
    "Delphine e Solange são as gêmeas protagonistas desta envolvente história. Elas sonham encontrar o amor perfeito enquanto lecionam ballet e música na pequena cidade de Rochefort.",
    "A elegante e refinada Sra. Yvonne é a mãe das gêmeas. Maxence, um marinheiro que se torna importante ao longo da trama, é um dos principais personagens masculinos.",
    "Andy e Sr. Dame representam parte do elenco que contribui para a riqueza das relações humanas neste clássico.",
    "Delphine e Solange compartilham momentos inesquecíveis ao longo da narrativa, enfrentando os desafios do amor e da vida em Rochefort.",
    "O enigmático fim de \"Les Demoiselles de Rochefort\" reserva surpresas e conclusões que consolidam esta obra como um clássico imperecível do cinema musical. Trata-se de um longa-metragem digno de todos aqueles que apreciam uma boa e requintada película repleta de charme e mistério."
];

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        atualizarDescricao(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function atualizarDescricao(indice) {
    paragrafoDescricao.textContent = descricoes[indice];
}