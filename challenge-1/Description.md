# Aplicando Máscara em um string

Frequentemente, quando você compra algo, é perguntado se o número do seu cartão de crédito, número de telefone ou a resposta à sua pergunta mais secreta ainda estão corretos. No entanto, como alguém pode espionar você, você não quer que isso apareça na tela. Em vez disso, nós "mascaramos".

Sua tarefa é escrever uma função `maskify`, que transforma todos os caracteres, exceto os quatro últimos, em `#`.

## Exemplos (input ==> output)
```
"4556364607935616" --> "############5616"
     "01499001010" -->      "#######1010"
               "1" -->                "1"
                "" -->                 ""
"string qualquer"  -->  "###########quer"
```