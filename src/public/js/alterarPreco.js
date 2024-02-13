function alterarPreco(pratoId) {
    const value = prompt('Digite o novo preço:');

    if (value !== null) {
        fetch(`http://localhost:3333/cardapio/${pratoId}/atualizar-valor`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ value }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            exibirPratos()
            // Adicione aqui a lógica para atualizar a interface após a alteração do preço
        })
        .catch(error => console.error('Erro ao alterar preço do prato:', error));
    }
}
