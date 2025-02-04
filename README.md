# Express API

Uma API RESTful construída com Express.js que fornece funcionalidades de autenticação, gerenciamento de usuários e produtos.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/)
- [Sequelize](https://sequelize.org/) (ORM)
- [JSON Web Token](https://jwt.io/) (Autenticação)
- [AJV](https://ajv.js.org/) (Validação de Schema)

## 💻 Projeto

Esta API oferece um sistema completo de gerenciamento com as seguintes funcionalidades:

- Autenticação de usuários (login/registro)
- Gerenciamento de usuários
- Gerenciamento de produtos
- Validação de schemas
- Middleware de autenticação
- Sistema de permissões
- Armazenamento em banco de dados SQLite

## 🔧 Instalação

```bash
# Clone este repositório
git clone [url-do-seu-repositorio]

# Entre no diretório
cd express-api

# Instale as dependências
npm install

# Execute a aplicação
npm start
```

O servidor iniciará na porta configurada (padrão: 3000) - acesse `http://localhost:3000`

## 📝 Estrutura do Projeto

```
src/
├── authorization/       # Autenticação e autorização
├── common/
│   ├── middlewares/    # Middlewares compartilhados
│   └── models/         # Modelos do banco de dados
├── products/           # Módulo de produtos
├── users/             # Módulo de usuários
├── storage/           # Banco de dados SQLite
├── config.js          # Configurações do projeto
└── server.js          # Entrada da aplicação
```

## 🔐 Rotas

### Autenticação
- `POST /auth/register` - Registro de novo usuário
- `POST /auth/login` - Login de usuário

### Usuários
- `GET /users` - Lista todos os usuários
- `GET /users/:id` - Obtém um usuário específico
- `PUT /users/:id` - Atualiza um usuário
- `DELETE /users/:id` - Remove um usuário

### Produtos
- `GET /products` - Lista todos os produtos
- `POST /products` - Cria um novo produto
- `GET /products/:id` - Obtém um produto específico
- `PUT /products/:id` - Atualiza um produto
- `DELETE /products/:id` - Remove um produto

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 