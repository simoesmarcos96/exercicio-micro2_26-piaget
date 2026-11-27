
# 🎓 CRUD de Alunos — API REST

Projeto acadêmico desenvolvido para a disciplina de Microserviços do curso de Análise e Desenvolvimento de Sistemas.

O sistema permite cadastrar, consultar, editar e excluir alunos, utilizando uma API REST integrada ao MongoDB Atlas e autenticação JWT.

## 🚀 Funcionalidades

- Login com autenticação JWT.
- Cadastro de alunos.
- Listagem de alunos.
- Edição de registros.
- Exclusão de registros.
- Proteção de rotas com middleware.
- Interface web integrada à API.
- Persistência de dados no MongoDB Atlas.

## 🛠️ Tecnologias utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JSON Web Token (JWT)
- Dotenv
- HTML5
- CSS3
- JavaScript
- Git e GitHub

## 📁 Estrutura do projeto

```text
exercicio-micro2_26-piaget/
├── config/
│   └── database.js
├── middleware/
│   └── auth.js
├── models/
│   └── aluno.js
├── routes/
│   └── alunos.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── .env.example
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## 🔗 Endpoints da API

| Método | Rota | Descrição | Autenticação |
|--------|------|-----------|--------------|
| POST | /login | Gerar token JWT | Não |
| GET | /alunos | Listar alunos | Não |
| POST | /alunos | Cadastrar aluno | Sim |
| PUT | /alunos/:id | Atualizar aluno | Sim |
| DELETE | /alunos/:id | Excluir aluno | Sim |

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/simoesmarcos96/exercicio-micro2_26-piaget.git
cd exercicio-micro2_26-piaget
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto, utilizando o `.env.example` como referência.

```env
PORT=3000
MONGO_URI=
JWT_SECRET=
ADMIN_USER=
ADMIN_PASSWORD=
```

Preencha as variáveis com suas próprias credenciais.

### 4. Iniciar o servidor

```bash
node index.js
```

### 5. Acessar a aplicação

Abra no navegador:

[http://localhost:3000](http://localhost:3000)

## 🔐 Segurança

- Credenciais armazenadas em variáveis de ambiente.
- Autenticação utilizando JWT.
- Token com validade de uma hora.
- Middleware de proteção das rotas de escrita.
- Arquivos sensíveis excluídos do versionamento.

A autenticação foi desenvolvida para fins acadêmicos.

## 🧪 Testes realizados

- [x] Conexão com MongoDB Atlas.
- [x] Login e geração de token JWT.
- [x] Bloqueio de cadastro sem token.
- [x] Cadastro de alunos.
- [x] Listagem de alunos.
- [x] Atualização de alunos.
- [x] Exclusão de alunos.
- [x] Integração entre frontend e backend.
- [x] Testes de CRUD pelo navegador.

Os testes da API foram realizados utilizando PowerShell e Invoke-RestMethod.

## 📚 Objetivo acadêmico

Aplicar conhecimentos de desenvolvimento backend, APIs REST, banco de dados NoSQL, autenticação, integração frontend e versionamento de código.

## 👨‍💻 Autor

**Marcos Simoes**

- Curso: Análise e Desenvolvimento de Sistemas
- Disciplina: Microserviços
- Ano: 2026
- GitHub: [simoesmarcos96](https://github.com/simoesmarcos96)
