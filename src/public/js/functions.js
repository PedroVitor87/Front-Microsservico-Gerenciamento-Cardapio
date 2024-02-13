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
                `;

                divHTML.appendChild(cardPrato)
            });
        })
        .catch(error => {
            console.error('Erro ao exibir cardápio', error)
        });
}

function novoPrato() {
    location.href = "./forms.html"
}

function formPrato() {
    const dish_name = document.getElementById("dish_name").value
    const description = document.getElementById("description").value
    const value = document.getElementById("value").value

    const pratoData = {
        dish_name,
        description,
        value
    };

    fetch('http://localhost:3333/cardapio/criar-prato', {
        method: 'POST',
        headers: { //Cabeçalho da requisição
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pratoData), //Conversão da variável para JSON
    })
    .catch(error => {
        console.error('Erro ao cadastrar prato:', error)
    });
}

exibirPratos();
