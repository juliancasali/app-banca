# 🎓 Unisinos - Banca Fácil (Backend)

Sistema web para gerenciamento de bancas de TCC da Universidade do Vale do Rio dos Sinos (Unisinos).  
Esta é a API RESTful responsável por fornecer os endpoints para criação, atualização, consulta e exclusão dos dados relacionados às bancas, professores, usuários, entre outros recursos do sistema.

## 📋 Sobre o Projeto

O **Banca Fácil** foi desenvolvido para simplificar o processo de agendamento, organização e gerenciamento de bancas de Trabalho de Conclusão de Curso (TCC).  
Este back end foi projetado para ser escalável e seguro, oferecendo uma interface robusta para o front end consumir os dados.

## 🚀 Tecnologias Utilizadas

### Linguagem e Ambiente
- **Node.js** - Ambiente de execução para JavaScript no servidor.
- **Express.js** - Framework para criação de APIs REST.

### Banco de Dados e ODM
- **MongoDB** - Banco de dados NoSQL utilizado para armazenar os dados.
- **Mongoose** - Biblioteca que facilita a modelagem e a validação dos dados no MongoDB.

### Utilitários e Outras Ferramentas
- **Axios** (em serviços do front end) – para requisições HTTP à API.
- **cors** – para habilitar o compartilhamento de recursos entre diferentes origens.
- **dotenv** – para gerenciar variáveis de ambiente (como URI de conexão com o banco e porta do servidor).
- **nodemon** – para recarregamento automático durante o desenvolvimento.

## 📁 Estrutura do Projeto

- **src/server/** - Config da porta
- **src/Controllers/** -  Lógica dos endpoints
- **src/conf/** - Configurações da aplicação do banco de dados
- **src/Middlewares/** - Middlewares personalizados
- **src/models/** - Schemas e modelos do Mongoose
- **src/public/** - Dados estaticos
- **src/routes/** - Definição das rotas
- **src/.env** - Variáveis de ambiente
- **src/App.js** - instância do Express, configuração de middlewares e rotas


## ⚙️ Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **MongoDB** – Você pode utilizar uma instância local ou uma solução cloud (por exemplo, MongoDB Atlas).
- **npm** ou **yarn** para gerenciamento dos pacotes

## 🔧 Instalação e Execução

### 1. Clone o repositório
git clone https://github.com/juliancasali/app-banca
cd app-banca

### 2. Instale as dependências
npm install

### 3. Configure as variáveis de ambiente
PORT=5000
MONGO_URI=mongodb://localhost:27017/bancafacil
NODE_ENV=development

### 4. Execute o projeto
Durante o desenvolvimento, você pode utilizar o nodemon para recarregamento automático:
npm run dev

Para executar o servidor em produção (ou para testes manuais), utilize:
npm start


A API deverá estar disponível em http://localhost:5000 (ou na porta definida na variável PORT).


📦 Scripts Disponíveis
- npm run dev – Inicia o servidor de desenvolvimento com nodemon.
- npm start – Inicia o servidor em modo de produção.
- npm run lint – Executa as verificações de linting para garantir a qualidade do código.
🤝 Contribuição
Para contribuir com o projeto:
- Faça um fork do repositório.
- Crie uma branch para sua feature ou correção.
- Commit suas mudanças.
- Push para sua branch.
- Abra um Pull Request.
- 
👥 Desenvolvido por
Projeto desenvolvido no estágio obrigatório na Universidade do Vale do Rio dos Sinos (Unisinos) por Julian Casali.
📄 Licença
Este projeto é desenvolvido como parte do estágio obrigatório da Unisinos.

---

Esse README fornece uma visão geral do back end, detalhando a estrutura, tecnologias utilizadas, passos para instalação, execução e contribuição. Você pode personalizá-lo conforme os detalhes reais do seu projeto (como nomes de pastas, endpoints ou variáveis de ambiente) e mantê-lo atualizado para que outros desenvolvedores possam entender e contribuir com o sistema.

Se precisar de mais detalhes ou ajustes, fique à vontade para perguntar!







