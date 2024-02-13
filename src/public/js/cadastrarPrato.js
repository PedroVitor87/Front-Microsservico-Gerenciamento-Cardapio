function formPrato() {
    const dish_name = document.getElementById("dish_name").value;
    const description = document.getElementById("description").value;
    const value = document.getElementById("value").value;

    if (dish_name.length < 5) {
        alert("O nome do prato deve ter pelo menos 5 caracteres.");
        return;
    }

    const pratoData = {
        dish_name,
        description,
        value
    };

    fetch('http://localhost:3333/cardapio/criar-prato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pratoData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar prato');
        }
        return response.json();
    })
    .then(() => {
        // Exibir mensagem de sucesso
        const mensagemSucesso = document.getElementById("mensagemSucesso");
        mensagemSucesso.style.display = "block";
        setTimeout(() => {
            mensagemSucesso.style.display = "none";
        }, 3000);

        // Limpar o formulário após o cadastro
        document.getElementById("formPratos").reset();
    })
    .catch(error => {
        console.error('Erro ao cadastrar prato:', error);
    });
}
