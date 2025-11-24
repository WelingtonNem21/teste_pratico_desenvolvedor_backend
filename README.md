# 🚗 Teste Prático — Desenvolvedor Backend

API RESTful para gerenciamento de **carros**, **motoristas** e **utilizações de veículos**, construída em **Node.js + TypeScript + Express + Prisma ORM + PostgreSQL**.

---

## 📌 Funcionalidades

### 🚘 Carros

- Criar carro
- Atualizar carro
- Deletar carro
- Buscar por ID
- Listar filtrando por **cor** e **marca**

### 🧑‍✈️ Motoristas

- Criar motorista
- Atualizar motorista
- Deletar motorista
- Buscar por ID
- Listar por nome

### 📝 Utilização de Automóveis

- Registrar utilização
- Finalizar utilização
- Listar todas as utilizações com:
  - Motorista
  - Carro
  - Datas de início e término

---

## 🛠 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma ORM
- PostgreSQL
- Zod (validações)
- Nodemon / ts-node-dev

---

## 📁 Estrutura do Projeto

API organizada no padrão de Arquitetura em Camadas, separando responsabilidades em Controllers, Services, Validation e camada de Acesso a Dados (Prisma), seguindo boas práticas de modularização e clean code.

```
src
├── controllers
│ ├── car
│ ├── driver
│ └── utilizacao
├── prisma
│ └── schema.prisma
├── services
│ ├── car
│ ├── driver
│ └── utilizacao
├── validations
│ ├── carValidation.ts
│ ├── driverValidation.ts
│ └── utilizacaoValidation.ts
├── routes.ts
└── server.ts

```

## ▶️ Como executar e testar a aplicação

### 1️⃣ Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- Node.js (versão 18+)
- PostgreSQL
- Git
- NPM ou Yarn

---

### 3️⃣ Instalar dependências

```sh
git clone https://github.com/WelingtonNem21/teste_pratico_desenvolvedor_backend.git
cd teste_pratico_desenvolvedor_backend

```

### 3️⃣ Instalar dependências

```
npm install
```

### 4️⃣ Configurar as variáveis de ambiente

```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/seu_banco"
```

Crie o banco de dados no PostgreSQL antes de seguir.

### 5️⃣ Rodar as migrations do Prisma

```
npx prisma migrate dev
```

### 6️⃣ Iniciar o servidor

```
npm run dev
```

A API iniciará normalmente em:

```
http://localhost:8080
```

### 🔹 Criar um carro — POST /car

```
{
  "placa": "ABC1234",
  "cor": "Prata",
  "marca": "Fiat"
}
```

### 🔹 Criar motorista — POST /driver

```
{
  "nome": "João da Silva"
}
```

### 🔹 Registrar utilização — POST /utilizacao

```
{
  "motoristaId": 1,
  "automovelId": 1,
  "motivoUtilizacao": "Entrega de mercadorias"
}
```

### 🔹 Finalizar utilização — PUT /utilizacao/finalizar/1

```
{
  "dataTerminoUtilizacao": "2025-11-24T10:00:00.000Z"
}
```
