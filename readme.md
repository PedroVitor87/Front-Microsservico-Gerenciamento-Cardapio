# Frontend do Microsserviço de Cardápio

Este é o frontend do microsserviço de cardápio, que permite visualizar, cadastrar, editar e excluir pratos do cardápio de um restaurante. O frontend foi desenvolvido utilizando apenas as linguagens JavaScript, CSS e HTML.

## Funcionalidades

- **Visualização do Cardápio**: Visualize todos os pratos disponíveis no cardápio do restaurante.
- **Cadastro de Prato**: Adicione novos pratos ao cardápio, fornecendo nome, descrição e preço.
- **Edição de Prato**: Altere o preço de um prato existente no cardápio.
- **Exclusão de Prato**: Remova um prato do cardápio.

## Como Usar

1. **Instalação das Dependências**: Antes de executar o frontend, certifique-se de ter todas as dependências instaladas. Você pode instalar as dependências executando o comando `npm install`.

2. **Execução do Frontend**: Para iniciar o frontend, utilize o comando `npm start`. Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo em seu navegador padrão.

3. **Uso do Aplicativo**: Após iniciar o frontend, você poderá visualizar o cardápio, cadastrar novos pratos, editar os preços existentes e excluir pratos indesejados. Certifique-se de seguir as orientações na tela para cada operação.

> Nota: Para o correto funcionamento do frontend, é necessário que o backend correspondente esteja em execução e acessível. Você pode encontrar o código-fonte do backend em [Backend-PedroVitor87](https://github.com/PedroVitor87/Microsservico-Gerenciamento-Cardapio). Certifique-se de que o backend esteja configurado corretamente e em execução antes de utilizar o frontend.

## Estrutura de Arquivos


- `/src`: Contém os arquivos de código-fonte do frontend, incluindo JavaScript, componentes React, estilos CSS, etc.
  - `/src/html`: Arquivos HTML para as diferentes páginas do aplicativo.
  - `/src/public/js`: Arquivos JavaScript que contêm a lógica de frontend, como interação com a API do backend e manipulação do DOM.
  - `/src/public/css`: Arquivos de estilo CSS para estilizar o aplicativo.
  - `src/routes`: Contém as definições das rotas do frontend.

- [Microsserviço de Gerenciamento de Cardápio (Backend)](https://github.com/PedroVitor87/Microsservico-Gerenciamento-Cardapio): Repositório GitHub do backend correspondente para este frontend.

## Dependências

Este projeto utiliza os seguintes pacotes npm:

- [Express](https://expressjs.com/): Um framework web rápido, flexível e minimalista para Node.js.
- [Cors](https://www.npmjs.com/package/cors): Um middleware para Express que habilita o controle de acesso HTTP.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, correções de bugs ou melhorias para o frontend do microsserviço de cardápio, sinta-se à vontade para abrir uma issue ou enviar um pull request.
