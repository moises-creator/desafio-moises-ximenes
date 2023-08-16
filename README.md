# Desafio Lanchonete DB 🍔☕

Bem-vindo ao Desafio Lanchonete DB! Neste desafio, você vai automatizar o caixa de uma lanchonete, calculando o valor da compra de acordo com o cardápio, regras e descontos da Lanchonete DB. 🚀

## Cardápio 🍔🥤

Aqui estão as opções deliciosas do nosso cardápio:

- **cafe**: Café - R$ 3,00
- **chantily**: Chantily (extra do Café) - R$ 1,50
- **suco**: Suco Natural - R$ 6,20
- **sanduiche**: Sanduíche - R$ 6,50
- **queijo**: Queijo (extra do Sanduíche) - R$ 2,00
- **salgado**: Salgado - R$ 7,25
- **combo1**: 1 Suco e 1 Sanduíche - R$ 9,50
- **combo2**: 1 Café e 1 Sanduíche - R$ 7,50

## Formas de Pagamento 💳

Aceitamos as seguintes formas de pagamento:

- **dinheiro**: 5% de desconto
- **debito**: Sem descontos ou acréscimos
- **credito**: 3% de acréscimo

## Como Rodar 🏃‍♂️

1. Instale o Node.js se ainda não tiver instalado.
2. Instale as dependências do projeto com `npm install`.
3. Rode os testes com `npm test`.

## Como Usar 🍔🛒

O método `calcularValorDaCompra(paymentMethod, items)` calcula o valor da compra com base nas suas escolhas.

- `formaDePagamento`: Escolha entre "dinheiro", "debito" ou "credito".
- `items`: Uma array com os itens que você deseja comprar. Cada item é uma string no formato `code,quantity`.

## Exemplos de Uso 🧾

```javascript
const caixa = new CaixaDaLanchonete();

const resultado = caixa.calcularValorDaCompra('credito', ['combo1,1','cafe,2']);
console.log(resultado); // Saída esperada: "R$ 15,96"
