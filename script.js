const perguntas = [
  {
    pergunta:
      "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
    respostas: ["// Comentário", "/* Comentário */", "# Comentário"],
    correta: 0
  },
  {
    pergunta: "Qual destes não é um tipo de dado primitivo em JavaScript?",
    respostas: ["String", "Array", "Boolean"],
    correta: 1
  },
  {
    pergunta:
      "Qual método é usado para adicionar um novo elemento ao final de um array em JavaScript?",
    respostas: ["append()", "push()", "add()"],
    correta: 1
  },
  {
    pergunta: "Qual operador é usado para atribuição de valor em JavaScript?",
    respostas: ["=", "==", ":="],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Comparação estrita (valor e tipo)",
      "Atribuição de valor",
      "Comparação solta (apenas valor)"
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'parseInt()' faz em JavaScript?",
    respostas: [
      "Arredonda um número para o inteiro mais próximo",
      "Converte uma string em um número inteiro",
      "Retorna a parte decimal de um número"
    ],
    correta: 1
  },
  {
    pergunta:
      "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
    respostas: ["var", "let", "const"],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '5 + '5' em JavaScript?",
    respostas: ["55", "10", "Erro"],
    correta: 0
  },
  {
    pergunta:
      "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: ["console.print()", "print()", "console.log()"],
    correta: 2
  },
  {
    pergunta: "O que o método 'map()' faz em um array JavaScript?",
    respostas: [
      "Aplica uma função a cada elemento do array e retorna um novo array com os resultados",
      "Remove um elemento específico do array",
      "Adiciona um elemento ao final do array"
    ],
    correta: 0
  }
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos  span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = event => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }

    quizItem.querySelector("dl").appendChild(dt)
  }
  quizItem.querySelector("dl dt").remove()
  quiz.appendChild(quizItem)
}
