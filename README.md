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
git clone https://github.com/01Rian/express-api.git

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
- `POST /signup` - Registro de novo usuário
- `POST /login` - Login de usuário

### Produtos
- `GET /product` - Lista todos os produtos (requer autenticação)
- `GET /product/:productId` - Obtém um produto específico (requer autenticação)
- `POST /product` - Cria um novo produto (requer autenticação e permissão de ADMIN)
- `PATCH /product/:productId` - Atualiza um produto (requer autenticação e permissão de ADMIN)
- `DELETE /product/:productId` - Remove um produto (requer autenticação e permissão de ADMIN)

### Usuários
- `GET /user` - Obtém informações do usuário autenticado (requer autenticação)
- `GET /user/all` - Lista todos os usuários (requer autenticação e permissão de ADMIN)
- `PATCH /user` - Atualiza informações do usuário autenticado (requer autenticação)
- `PATCH /user/role` - Altera o papel/role de um usuário (requer autenticação e permissão de ADMIN)
- `DELETE /user/:id` - Remove um usuário (requer autenticação e permissão de ADMIN)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 