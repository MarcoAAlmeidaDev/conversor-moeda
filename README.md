Conversor de Moedas
Este projeto é um conversor de moedas simples e eficaz, que permite aos usuários converter valores entre diferentes moedas com base nas taxas de câmbio atuais. A aplicação foi construída com HTML, Tailwind CSS, JavaScript e Express, oferecendo uma interface moderna e uma funcionalidade robusta para consultar e exibir os valores de conversão.

Funcionalidades
Conversão de Moedas: O usuário pode inserir um valor em uma moeda e obter o valor equivalente em outra moeda.
Interface Responsiva: A interface foi criada com Tailwind CSS para garantir um design responsivo e agradável, funcionando bem em dispositivos móveis e desktops.
Busca de Moedas: A lista de moedas pode ser filtrada ao digitar, facilitando a escolha da moeda desejada.
Conexão com API de Câmbio: As taxas de câmbio são obtidas em tempo real através de uma API externa.
Segurança: A chave da API é acessada de forma segura por meio de um endpoint Express.
Tecnologias Usadas
HTML: Estrutura base da aplicação.
Tailwind CSS: Framework de CSS utilizado para estilização moderna e responsiva.
JavaScript: Usado para manipulação da interface e interações do usuário.
Express: Framework Node.js para criação de um endpoint seguro para acessar a chave da API de câmbio.
API de Câmbio: A conversão de moedas é realizada através de uma API externa, fornecendo dados em tempo real.
Como Rodar o Projeto
Clone este repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/conversor-de-moedas.git
Instale as dependências: Navegue até o diretório do projeto e instale as dependências necessárias:

bash
Copiar
Editar
cd conversor-de-moedas
npm install
Instale o nodeModules
Crie um arquivo .env para armazenar sua chave da API:

bash
Copiar
Editar
API_KEY=SuaChaveDaAPI
Inicie o servidor Express: Para rodar o servidor, use o seguinte comando:

bash
Copiar
Editar
npm start
Acesse a aplicação: Abra seu navegador e acesse http://localhost:3000 para usar o conversor de moedas.
