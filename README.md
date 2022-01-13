# API GRAPHQL

## CRUD EM MONGODB

### Tecnologias

* NodeJS
* GRAPHQL
* ApolloServer
* MONGODB
* Mongoose

#### Como utilizar?

É necessário ter instalado o MongoDB e rodar o comando abaixo para que a conexão com o Banco de Dados seja possível.

```bash
    mongod
```
Faça o clone do projeto com o comando abaixo:

```bash
git clone https://github.com/WandersonLontra/GRAPHQL_CRUD_MONGODB.git
```
Em seguida instale as dependências:

```bash
npm install
# ou
yarn
```
### Exemplo de Query e Mutation

```gql
query listUsers {
  users {
    _id
    firstName
    lastName
    active
  }
}

mutation createUser {
  createUser(data: {
  firstName: "barbara",
  lastName: "Amem Duim",
  email: "barbara@gmail.com",
  active: true
}) {
    _id
    firstName
    active
  }
}
```
