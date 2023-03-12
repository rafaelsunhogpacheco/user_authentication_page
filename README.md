# User Authentication Page
User Authntication Page using using NodeJs and bcrypt
Página de autenticação de usuário usando NodeJs e bcrypt

### Status do Projeto:
Finalizado

### Features

* Consultar os os usuários cadastrados
Retorna o arquivo contendo a lista dos usuários cadastrados

* Criar novo usuário
Recebe o usuário e a senha e gera hash da senha

* Requisitar acesso
Valida o usuário e a senha (hash) 


### Pré-requisitos 
1. express
2. bcrypt para realizar o hash das senhas

#### Modo devDependencies
3. Nodemon

#### VS Code extensions
4. REST Client v0.25.1
(ou você pode usar Postman ou outra extensão para reazlizar o teste das rotas e as respostas)

### Como rodar a aplicação
$ git clone <git@github.com:dev-rafa1707/user_authentication_page.git>

* Acesse a pasta do projeto no terminal/cmd indicando o caminho da pasta
$ cd <path>

* Instale as dependências
$ npm install

* Execute a aplicação 
$ npm start server.js
* O servidor inciará na porta:3000

### Para testar o projeto
* Utilize a extensão do VS Code Rest Client para testar
* Arquivo request.rest

* Consultar os os usuários cadastrados
GET http://localhost:3000/users
Retorna o arquivo Json contendo a lista de usuários cadastrados

* Criar novo usuário
 POST http://localhost:3000/users
 Content-Type: application/json

 {
   "name": "Maria",
   "password": "password"
 }

* Requisitar acesso
POST http://localhost:3000/users/login
Content-Type: application/json

{
  "name": "Maria", (verifica nome)
  "password": "password"
}






### Tecnologias utilizadas
1. [express] (https://expressjs.com/pt-br/starter/installing.html)
 
2. [bcrypt] (https://www.npmjs.com/package/bcrypt)

3. REST Client v0.25.1
