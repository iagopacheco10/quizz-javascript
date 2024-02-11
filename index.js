const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "def",
        "var",
        "let",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas não é uma estrutura de controle de fluxo em JavaScript?",
      respostas: [
        "if",
        "for",
        "start",
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama o processo de juntar dois ou mais strings em JavaScript?",
      respostas: [
        "Concatenação",
        "Agregação",
        "Junção",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para comparar o valor e o tipo de duas variáveis em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "write()",
      ],
      correta: 0
    },
    {
      pergunta: "Como se chama a função que é chamada quando ocorre um erro em JavaScript?",
      respostas: [
        "errorHandler()",
        "catchError()",
        "tryCatch()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o tipo de dados que representa um valor verdadeiro ou falso em JavaScript?",
      respostas: [
        "Boolean",
        "Logic",
        "Truthy",
      ],
      correta: 0
    },
    {
      pergunta: "O que é necessário para acessar os elementos de um array em JavaScript?",
      respostas: [
        "Chave",
        "Índice",
        "Rótulo",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a função que é executada quando uma promessa é rejeitada em JavaScript?",
      respostas: [
        "catch()",
        "reject()",
        "error()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico usado para verificar se uma condição ou outra é verdadeira em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 1
    }
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDeperguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDeperguntas
  //loop de repetição
  for(const item of perguntas ) {
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
   
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta
     dt.querySelector('input').setAttribute('name' , 'pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
  
       mostrarTotal.textContent = corretas.size + ' de ' + totalDeperguntas
     }
     
     quizItem.querySelector('dl').appendChild(dt)
   }
  
   quizItem.querySelector('dl dt').remove()
   
   //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  
  
  }