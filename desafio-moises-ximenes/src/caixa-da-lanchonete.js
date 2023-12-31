

class CaixaDaLanchonete {
    calcularValorDaCompra(paymentMethod, items) {

        const menu = {
            cafe: { descricao: "Café", valor: 3.00 },
            chantily: { descricao: "Chantily (extra do Café)", valor: 1.50 , principal: "cafe"},
            suco: { descricao: "Suco Natural", valor: 6.20 },
            sanduiche: { descricao: "Sanduíche", valor: 6.50 },
            queijo: { descricao: "Queijo (extra do Sanduíche)", valor: 2.00 , principal: "sanduiche"},
            salgado: { descricao: "Salgado", valor: 7.25 },
            combo1: { descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
            combo2: { descricao: "1 Café e 1 Sanduíche", valor: 7.50 },
        };

        const paymentMethods = {
            dinheiro: { desconto: 0.05 },
            debito: {},
            credito: { acrescimo: 0.03 },
        };

        
        let totalAmount = 0;
        let mainItemsInCart = new Set();
        let requiredMainItems = new Set();

        if (items.length === 0) {
            return "Não há itens no carrinho de compra!";
        }
        
        for (const item of items) {
            const [code, quantity] = item.split(",");
            const product = menu[code];
        
            if (!product) {
                return "Item inválido!";
            }
        
            if (product.principal) {
                requiredMainItems.add(product.principal);
            } else {
                mainItemsInCart.add(code);
            }
        
            if (quantity <= 0) {
                return "Quantidade inválida!";
            }
        
            totalAmount += product.valor * quantity;
        }
        
        if (requiredMainItems.size > 0) {
            for (const mainItem of requiredMainItems) {
                if (!mainItemsInCart.has(mainItem)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
        }
        
        if (!paymentMethods[paymentMethod]) {
            return "Forma de pagamento inválida!";
        }
        
        const paymentMethodDetails = paymentMethods[paymentMethod];
        
        if (paymentMethodDetails.desconto) {
            totalAmount *= 1 - paymentMethodDetails.desconto;
        } else if (paymentMethodDetails.acrescimo) {
            totalAmount *= 1 + paymentMethodDetails.acrescimo;
        }
        const valorTotalFormatado = `R$ ${totalAmount.toFixed(2).replace(".", ",")}`;

        return valorTotalFormatado;
    }
}

export { CaixaDaLanchonete };

