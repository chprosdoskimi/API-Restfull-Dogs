## _Projeto Dogs_

> Status: Andamento

## Sobre o projeto

Este projeto foi desenvolvido como um desafio que surgiu no curso de React da Origamid, onde enfreitei problemas ao cadastrar usuário na API original que foi feita em WordPress. Tive como base os dados que são enviados no Front da aplicação

### Features

- [x] Cadastro de Usuário.
- [x] Cadastro de Animais com Foto.
- [x] Editar Animais.
- [x] Atualizar Animais.
- [x] Deletar Animais.
- [x] Visualizar Animais.
- [x] Visualizar Acessos a foto.


## Pré-requisitos

- Qualquer ferramenta de teste de API

  - [Insomnia REST](https://insomnia.rest/download)
  - [Postman](https://www.postman.com/)

- Docker

## \*\*Instalação

1. Clonar o repositório - `git clone`.
2. Abrir o "README.md".
3. Abrir o arquivo "scriptDocker.txt" baixar a imagem do banco MariaDB no Docker.
4. Criar as variaveis de ambiente em um arquivo ".env" como:

- APP_PORT=3000
- DATABASE=NomeDoBanco
- DATABASE_HOST=localhost
- DATABASE_PORT=PortaDoBanco
- DATABASE_USERNAME=UsuarioBanco
- DATABASE_PASSWORD=SenhaBanco
- TOKEN_SECRET=SegredoTokenDeSuaPreferência
- TOKEN_EXPIRATION=7d

5. Criar Migrations pelo comando "npx sequelize db:migrate".
6. Inicializar o Express pelo comando "npm run dev" ou "yarn dev".

## Tecnologias utilizada

### Back-end

- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Sequelize-Cli](https://www.npmjs.com/package/sequelize-cli)
- [Multer](https://www.npmjs.com/search?q=multer)
- [ExpressJS](https://expressjs.com/pt-br/)
- [MariaDB](https://www.npmjs.com/package/mariadb)
- [Helmet](https://www.npmjs.com/package/helmet)
- [CORS](https://www.npmjs.com/package/cors)

### Front-end

---

### Desenvolvido por

Carlos Prosdoskimi
