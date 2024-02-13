function novoPrato() {
    console.log("Clicou no botão Novo Prato");
    // Verifique se o caminho está correto
    location.href = "/cardapio/cadastrar-prato";
}

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se o botão existe antes de adicionar o ouvinte de eventos
    const botaoNovoPrato = document.querySelector('button');
    
    if (botaoNovoPrato) {
        botaoNovoPrato.addEventListener('click', novoPrato);
    }
});
