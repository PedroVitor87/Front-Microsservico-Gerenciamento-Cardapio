function excluirPrato(pratoId) {
    const confirmacao = confirm('Tem certeza que deseja excluir este prato?');

    if (confirmacao) {
        fetch(`http://localhost:3333/cardapio/${pratoId}/apagar-prato`, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            exibirPratos();
        })
        .catch(error => console.error('Erro ao excluir prato:', error));
    }
}
