const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Como um organismo sustentável pode contribuir para a mitigação das mudanças climáticas e a preservação dos ecossistemas naturais?",
        alternativas: [
            {
                texto: "Reduzindo as emissões de gases de efeito estufa através de processos mais eficientes.",
           
            },
            {
                texto: " Promovendo a monocultura intensiva para aumentar a produtividade agrícola.",
               
            }
        ]
    },
    {
        enunciado: "Quais práticas de gestão e tecnologias são essenciais para transformar uma organização em um organismo sustentável?",
        alternativas: [
            {
                texto: " Implementação de políticas de desperdício zero e reciclagem.",
               
            },
            {
                texto: "Redução da eficiência energética para cortar custos.",
               
            }
        ]
    },
    {
        enunciado: "Quais são os principais desafios enfrentados na implementação de práticas sustentáveis em grandes organizações e como eles podem ser superados?",
        alternativas: [
            {
                texto: "Resistência à mudança por parte dos funcionários, que pode ser superada com programas de treinamento e conscientização.",
               
            },
            {
                texto: "Custos iniciais elevados, que não podem ser superados de nenhuma maneira.",
               
            }
        ]
    },
   
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


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();
