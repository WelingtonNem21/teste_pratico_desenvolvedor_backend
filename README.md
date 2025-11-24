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
