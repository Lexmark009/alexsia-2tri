const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma festa e vê uma mesa cheia de petiscos. Qual o primeiro item que você pega?",
        alternativas: [
            {
                texto: "Uma porção de batatas fritas.",
                afirmacao: "Você gosta de petiscos crocantes e salgados."
            },
            {
                texto: "Um pedaço de queijo.",
                afirmacao: "Você aprecia sabores mais sofisticados e sofisticados."
            }
        ]
    },
    {
        enunciado: "O anfitrião oferece uma variedade de bebidas. Qual você escolhe para acompanhar o seu prato?",
        alternativas: [
            {
                texto: "Um refrigerante gelado.",
                afirmacao: "Você prefere bebidas refrescantes e gasosas."
            },
            {
                texto: "Um suco natural.",
                afirmacao: "Você opta por bebidas saudáveis e naturais."
            }
        ]
    },
    {
        enunciado: "Durante a refeição, você é servido com um prato especial. O que você faz para aproveitar melhor a comida?",
        alternativas: [
            {
                texto: "Experimento todos os acompanhamentos e temperos para descobrir novos sabores.",
                afirmacao: "Você é um explorador de sabores e gosta de experimentar novos pratos."
            },
            {
                texto: "Mantenho a comida simples, focando no prato principal apenas.",
                afirmacao: "Você valoriza a simplicidade e a qualidade do prato principal."
            }
        ]
    },
    {
        enunciado: "Para a sobremesa, você tem duas opções: um bolo de chocolate ou uma taça de sorvete. O que você escolhe?",
        alternativas: [
            {
                texto: "Bolo de chocolate.",
                afirmacao: "Você adora sobremesas ricas e indulgentes."
            },
            {
                texto: "Taça de sorvete.",
                afirmacao: "Você prefere sobremesas frias e refrescantes."
            }
        ]
    },
    {
        enunciado: "Após a refeição, você decide preparar um prato para a próxima refeição. Qual é a sua escolha?",
        alternativas: [
            {
                texto: "Um prato de pasta com molho.",
                afirmacao: "Você gosta de pratos reconfortantes e cheios de sabor."
            },
            {
                texto: "Uma salada fresca.",
                afirmacao: "Você opta por refeições leves e saudáveis."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil alimentar:";
    textoResultado.textContent = historiaFinal.trim();
    caixaAlternativas.textContent = "";
}

mostraPergunta();
