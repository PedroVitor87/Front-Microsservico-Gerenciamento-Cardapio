function exibirPratos() {
    fetch("http://localhost:3333/cardapio")
        .then(response => response.json())
        .then(pratos => {
            let divHTML = document.getElementById("cards")
            divHTML.innerHTML = ""; // Limpa o conteúdo existente antes de adicionar novos pratos

            pratos.forEach(prato => {
                const cardPrato = document.createElement('div')
                cardPrato.classList.add('card')

                cardPrato.innerHTML = `
                    <h3>${prato.dish_name}</h3>
                    <h5>${prato.description}</h5>
                    <h4>Preço: R$${prato.value}</h4>
                    <button onclick="excluirPrato(${prato.id})">Excluir</button>
                    <button onclick="alterarPreco(${prato.id})">Alterar Preço</button>
                `;

                divHTML.appendChild(cardPrato)
            });
        })
        .catch(error => {
            console.error('Erro ao exibir cardápio', error)
        });
}

// Executar a função de exibição quando a página carregar
window.onload = exibirPratos;